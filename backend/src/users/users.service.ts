import { Injectable, NotFoundException, Param } from '@nestjs/common';
import * as bcrypt from 'bcrypt'
import { CreateUserDto } from './dto/create-user.dto';
import { UpdateUserDto } from './dto/update-user.dto';

@Injectable()
export class UsersService {
    private users = [{
        id: 1,
        name: 'Le Minh Nhut',
        password: 'Nhut@123',
        role: 'ADMIN'
    }];

    findAll(role?: 'ADMIN' | 'USER') {
        if (role) {
            const rolesArray =  this.users.filter(u => u.role === role)
            if (rolesArray.length === 0) throw new NotFoundException('User Role Not Found')
            return rolesArray
        }
        return this.users
    }

    findOne(id: number) {
        const user = this.users.find(u => u.id === id)
        if (!user) throw new NotFoundException('User Not Found')
        return user
    }
    
    async createOne(createUserDto: CreateUserDto) {
        const hashedPassword = await bcrypt.hash(createUserDto.password, 10);

        const userByHighestId = [...this.users].sort((a, b) => b.id - a.id)
        const newUser = {
            id: userByHighestId[0].id + 1,
            ...createUserDto,
            password: hashedPassword
        }
        this.users.push(newUser)
        return newUser
    }

    async patchOne(id:number, updatedUserDto: UpdateUserDto) {
        let newHashedPassword: string
        if (updatedUserDto.password) {
            newHashedPassword = await bcrypt.hash(updatedUserDto.password, 10)
        }

        this.users = this.users.map(user => {
            if (user.id === id) {
                return { 
                    ...user,
                    ...updatedUserDto,
                    ...(newHashedPassword && {password: newHashedPassword})
                }
            }
            return user
        })

        return this.findOne(id)
    }

    deleteOne(id: number) {
        const removedUser = this.findOne(id)
        this.users = this.users.filter(user => user.id !== id )

        return removedUser
    }

    async validateUser(id: number, password: string): Promise<any> {
        const user = this.findOne(id)
        if (user && await bcrypt.compare(password, user.password)) {
            const { password, ...result } = user
            return result
        }
        return null
    }
}
