import { Injectable, Param } from '@nestjs/common';
import * as bcrypt from 'bcrypt'

@Injectable()
export class UsersService {
    private users = [{
        id: 1,
        name: 'Le Minh Nhut',
        password: '123',
        role: 'ADMIN'
    }];

    findAll(role?: 'ADMIN' | 'USER') {
        if (role) {
            return this.users.filter(u => u.role === role)
        }
        return this.users
    }

    findOne(@Param('id') id: number) {
        const user = this.users.find(u => u.id === id)
        return user
    }
    
    async createOne(user: { name: string, password: string, role: 'USER' | 'ADMIN'}) {
        const hashedPassword = await bcrypt.hash(user.password, 10);

        const userByHighestId = [...this.users].sort((a, b) => b.id - a.id)
        const newUser = {
            id: userByHighestId[0].id + 1,
            ...user,
            password: hashedPassword
        }
        this.users.push(newUser)
        return newUser
    }

    async patchOne(id:number, updatedUser: { name?: string, password?: string, role?: 'USER' | 'ADMIN'}) {
        let newHashedPassword: string
        if (updatedUser.password) {
            newHashedPassword = await bcrypt.hash(updatedUser.password, 10)
        }

        this.users = this.users.map(user => {
            if (user.id === id) {
                return { 
                    ...user,
                    ...updatedUser,
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
