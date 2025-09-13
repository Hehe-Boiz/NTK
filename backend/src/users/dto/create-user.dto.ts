export class CreateUserDto {
    name: string;
    password: string;
    role: 'ADMIN' | 'USER';
}