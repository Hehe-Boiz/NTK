import { Controller, Get, Post, Body, Patch, Param, Delete, UseGuards } from '@nestjs/common';
import { WishService } from './wish.service';
import { Prisma } from 'generated/prisma';
import { AuthGuard } from '@nestjs/passport';
import { UserGuard } from 'src/auth/user.guard';

@Controller('wish')
@UseGuards(AuthGuard('jwt'), UserGuard)
export class WishController {
  constructor(private readonly wishService: WishService) {}

  @Post()
  create(@Body() createWishDto: Prisma.WishCreateInput) {
    return this.wishService.create(createWishDto);
  }

  @Get()
  findAll() {
    return this.wishService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.wishService.findOne(+id);
  }

  @Patch(':id')
  update(@Param('id') id: string, @Body() updateWishDto: Prisma.WishUpdateInput) {
    return this.wishService.update(+id, updateWishDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.wishService.remove(+id);
  }
}
