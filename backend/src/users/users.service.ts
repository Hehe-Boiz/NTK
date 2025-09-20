import { Injectable, NotFoundException, Param, UseGuards } from '@nestjs/common';
import * as bcrypt from 'bcrypt'
import { Prisma } from 'generated/prisma';
import { DatabaseService } from 'src/database/database.service';

@Injectable()
export class UsersService {
    constructor(private readonly databaseService: DatabaseService) {}

    async findAll(role?: 'ADMIN' | 'USER') {
        if (role) {
            return this.databaseService.user.findMany({
                where: {
                    role,
                }
            })
        }
        return this.databaseService.user.findMany()
    }

    async findOne(id: number) {
        return this.databaseService.user.findUnique({
            where: {
                id,
            }
        })
    }
    
    async createOne(createUserDto: Prisma.UserCreateInput) {
        const hashedPassword = await bcrypt.hash(createUserDto.password, 10);

        return this.databaseService.user.create({
            data:  {...createUserDto, password: hashedPassword}
        })
    }

    async patchOne(id:number, updatedUserDto: Prisma.UserUpdateInput) {
        if (updatedUserDto.password) {
            updatedUserDto.password = await bcrypt.hash(updatedUserDto.password.toString(), 10)
        }

        return this.databaseService.user.update({
            where: { id },
            data: updatedUserDto
        })
    }

    async deleteOne(id: number) {
        return this.databaseService.user.delete({
            where: {id}
        })
    }

    async validateUser(username: string, password: string): Promise<any> {
        const user = await this.findByName(username)

        if (user && await bcrypt.compare(password, user.password)) {
            const { password, ...result } = user
            return result
        }
        return null
    }

    async findByName(username: string) {
        return this.databaseService.user.findUnique({
            where: { name: username },
        });
    }

    async isAdmin(id: number): Promise<any> {
        const user = await this.findOne(id);
        if (!user) {
            throw new NotFoundException('User not found');
        }
        return user.role === 'ADMIN';
    }

    async isUser(id: number): Promise<any> {
        const user = await this.findOne(id);
        if (!user) {
            throw new NotFoundException('User not found');
        }
        return user.role === 'USER';
    }
}
