
import {
  ConflictException,
  Injectable,
  UnauthorizedException,
  BadRequestException,
} from '@nestjs/common';
import { JwtService } from '@nestjs/jwt';
import { ConfigService } from '@nestjs/config';
import { PrismaService } from '../shared/prisma.service';
import * as bcrypt from 'bcrypt';
import { RegisterDto } from './dto/register.dto';
import { LoginDto } from './dto/login.dto';

@Injectable()
export class AuthService {
  constructor(
    private readonly jwt: JwtService,
    private readonly config: ConfigService,
    private readonly prisma: PrismaService,
  ) {}

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

  async register(payload:RegisterDto) {
    console.log("payload",payload)
    if (!payload?.email || !payload?.password) {
      throw new BadRequestException('Email and password are required');
    }

    const exists = await this.prisma.user.findUnique({
      where: { email: payload.email },
    });

    if (exists) {
      throw new ConflictException('User already exists');
    }

    const hashedPassword = await bcrypt.hash(payload.password, 10);

    const user = await this.prisma.user.create({
      data: {
        email: payload.email,
        password: hashedPassword,
      },
    });

    return {
      message: 'User registered successfully',
      userId: user.id,
    };
  }

  async login(payload:LoginDto) {
    if (!payload?.email || !payload?.password) {
      throw new BadRequestException('Email and password are required');
    }

    const user = await this.prisma.user.findUnique({
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
      accessToken: this.signAccessToken({id:user.id,email:user.email,role:user.role}),
      refreshToken: this.signRefreshToken(user.id),
    };
  }
}
