import { IsBoolean, IsEmail, IsNumber, IsString } from "class-validator";

export class validationTokenRequest{
    @IsString()
    token!:string
}

export class userDto{
    
    @IsNumber()
    id!: number; 
    
    @IsEmail()
    email!:string;
    
    @IsString()
    role!:string;

}

export class validationTokenResponse{
    @IsBoolean()
    isValid!:boolean;
    
    user?:userDto;
}