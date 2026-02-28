import { IsBoolean, IsEmail, IsString } from "class-validator";

export class validationTokenRequest{
    @IsString()
    token!:string
}

export class userDto{
    
    @IsString()
    id!: string; 
    
    @IsEmail()
    email!:string;
    
    @IsString()
    globalRole!:string;

}

export class validationTokenResponse{
    @IsBoolean()
    isValid!:boolean;
    
    user?:userDto;
}