// apps/auth-service/src/auth/auth.service.ts
import {
  ConflictException,
  Injectable,
  UnauthorizedException,
  BadRequestException,
  InternalServerErrorException,
  HttpException,
  NotFoundException,
} from '@nestjs/common';
import { JwtService } from '@nestjs/jwt';
import { ConfigService } from '@nestjs/config';
import { PrismaService } from '../shared/prisma.service';
import * as bcrypt from 'bcrypt';
import { RegisterDto } from './dto/register.dto';
import { LoginDto } from './dto/login.dto';
import { userDto, validationTokenRequest, validationTokenResponse } from './dto/validation.dto';
import {  Payload } from '@nestjs/microservices';


@Injectable()
export class AuthService {
  constructor(
    private readonly jwt: JwtService,
    private readonly config: ConfigService,
    private readonly prismaService: PrismaService,
  ) { }

  private signAccessToken(user: { id: number; email: string; role: string }) {
    return this.jwt.sign({
      sub: user.id,
      email: user.email,
      role: user.role,
    });
  }

  private signRefreshToken(userId: number) {
    return this.jwt.sign(
      { sub: userId },
      {
        secret: this.config.get<string>('JWT_REFRESH_SECRET')!,
        expiresIn: '7d',
      },
    );
  }

  async register(payload: RegisterDto) {
    if (!payload.email || !payload.password) {
      throw new BadRequestException('Email and password are required');
    }

    const exists = await this.prismaService.prisma.user.findUnique({
      where: { email: payload.email },
    });

    if (exists) {
      throw new ConflictException('User already exists');
    }

    const hashedPassword = await bcrypt.hash(payload.password, 10);

    const user = await this.prismaService.prisma.user.create({
      data: {
        email: payload.email,
        password: hashedPassword,
        role: 'CLIENT',
      },
    });

    return {
      message: 'User registered successfully',
      userId: user.id,
    };
  }

  async login(payload: LoginDto) {
    if (!payload.email || !payload.password) {
      throw new BadRequestException('Email and password are required');
    }

    const user = await this.prismaService.prisma.user.findUnique({
      where: { email: payload.email },
    });

    if (!user) {
      throw new UnauthorizedException('Invalid credentials');
    }

    const isValid = await bcrypt.compare(payload.password, user.password);
    if (!isValid) {
      throw new UnauthorizedException('Invalid credentials');
    }

    return {
      accessToken: this.signAccessToken({
        id: user.id,
        email: user.email,
        role: user.role,
      }),
      refreshToken: this.signRefreshToken(user.id),
    };
  }

  
 async validateToken(
  @Payload() data: validationTokenRequest
): Promise<validationTokenResponse> {
  try {   
    if (!data?.token) {
      throw new BadRequestException('Authorization token missing');
    }


    const parts = data.token.split(' ');
    if (parts.length !== 2 || parts[0] !== 'Bearer') {
      throw new UnauthorizedException('Invalid authorization format');
    }

    const token = parts[1];

    
    const {sub,email,role} = await this.jwt.verifyAsync(token);

   
    if (!sub || !email || !role) {
      throw new UnauthorizedException('Invalid token payload');
    }

    const user = await this.prismaService.prisma.user.findUnique({
      where:{email:email}
    });

    if (!user) {
      throw new UnauthorizedException('User not found');
    }

    return {
      isValid: true,
      user: {
        id: sub,
        email: email,
        role: role,
      },
    };

  } catch (error: any) {
    if (
      error.name === 'TokenExpiredError' ||
      error.name === 'JsonWebTokenError'
    ) {
      throw new UnauthorizedException('Token expired or invalid');
    }

    throw new UnauthorizedException('Unauthorized');
  }
}



async getProfile(id: number): Promise<userDto> {
  try {
    const user = await this.prismaService.prisma.user.findUnique({
      where: { id },
      select: {
        id: true,
        email: true,
        role: true,
        createdAt: true,
        updatedAt: true,
      },
    });

    if (!user) {
      throw new NotFoundException('User not found');
    }
   

    return user;
  } catch (error) {
    // Re-throw known HTTP errors
    if (error instanceof HttpException) {
      throw error;
    }

    // Log internal error (important for prod)
    console.error('getProfile error:', error);

    // Hide internal details from client
    throw new InternalServerErrorException(
      'Failed to retrieve user profile',
    );
  }
}


}
