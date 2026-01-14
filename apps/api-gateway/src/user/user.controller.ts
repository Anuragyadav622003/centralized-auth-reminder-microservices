import { Controller, Get, Inject, Req, UseGuards } from '@nestjs/common';
import { AuthGuard } from '../guards/auth/auth.guard';
import { MICROSERVICE_CLIENTS } from '../app/constants';
import { ClientProxy } from '@nestjs/microservices';
import { firstValueFrom } from 'rxjs';


@Controller('user')
export class UserController {
    constructor(
        
    @Inject(MICROSERVICE_CLIENTS.AUTH_SERVICE)
    private authClient: ClientProxy
) { }


    @Get()
    greet(){
        return "hello user api-gateway"
    }

    @UseGuards(AuthGuard)
    @Get('profile')
    async getUserProfile(@Req() req: any) {
        const userId = req.user.id;
        console.log("hello ")
        return await firstValueFrom(this.authClient.send('user.profile', userId));


    }
}
