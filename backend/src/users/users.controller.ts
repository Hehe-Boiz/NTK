import { Body, Controller, Delete, Get, Param, Patch, Post, Query } from '@nestjs/common';
import { UsersService } from './users.service';

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
    findOne(@Param('id') id: string) {
        return this.usersService.findOne(+id)
    }

    @Post()
    createOne(@Body() user: { name: string, password: string, role: 'ADMIN' | 'USER'
    }) {
        return this.usersService.createOne(user)
    }

    @Patch(':id') 
    patchOne(@Param('id') id: string, @Body() userUpdate: { name: string, password: string, role: 'ADMIN' | 'USER'
    }) {
        return this.usersService.patchOne(+id, userUpdate)
    }

    @Delete(':id') 
    deleteOne(@Param('id') id: string) {
        return this.usersService.deleteOne(+id)
    }
}
