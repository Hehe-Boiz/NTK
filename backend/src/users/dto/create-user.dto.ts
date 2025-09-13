import { IsEnum, IsNotEmpty, IsString, IsStrongPassword } from "class-validator";

export class CreateUserDto {
    @IsString()
    @IsNotEmpty()
    name: string;

    @IsStrongPassword({
        minLength: 6
    }, {
        message: 'Password complexity required'
    })
    @IsNotEmpty()
    password: string;

    @IsEnum(['ADMIN', 'USER'], {
        message: 'Valid role required'
    })
    role: 'ADMIN' | 'USER';
}