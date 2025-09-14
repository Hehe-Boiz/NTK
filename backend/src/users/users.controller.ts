import { Body, Controller, Delete, Get, Param, Patch, Post, Query, ParseIntPipe, ValidationPipe } from '@nestjs/common';
import { UsersService } from './users.service';
import { Prisma } from 'generated/prisma';

@Controller('users')
export class UsersController {
    /*
    GET /users/
    GET /users/:id
    POST /users/
    PATCH /users/:id
    DELETE /users/:id
    */

    constructor(private readonly usersService: UsersService) {}
    
    @Get()
    findAll(@Query('role') role?: 'ADMIN' | 'USER') {
        return this.usersService.findAll(role)
    }

    @Get(':id')
    findOne(@Param('id', ParseIntPipe) id: number) {
        return this.usersService.findOne(id)
    }

    @Post()
    createOne(@Body(ValidationPipe) createUserDto: Prisma.UserCreateInput) {
        return this.usersService.createOne(createUserDto)
    }

    @Patch(':id') 
    patchOne(@Param('id', ParseIntPipe) id: number, @Body(ValidationPipe) updateUserDto: Prisma.UserUpdateInput) {
        return this.usersService.patchOne(id, updateUserDto)
    }

    @Delete(':id') 
    deleteOne(@Param('id', ParseIntPipe) id: number) {
        return this.usersService.deleteOne(id)
    }
}
