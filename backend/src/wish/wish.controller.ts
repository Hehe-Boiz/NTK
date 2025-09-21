import { Controller, Get, Post, Body, Patch, Param, Delete, UseGuards, Request, Query } from '@nestjs/common';
import { WishService } from './wish.service';
import { Prisma, WishStatus } from 'generated/prisma';
import { AuthGuard } from '@nestjs/passport';
import { AdminGuard } from 'src/auth/admin.guard';

@Controller('wish')
export class WishController {
  constructor(private readonly wishService: WishService) {}

  @Post()
  @UseGuards(AuthGuard('jwt'))
  create(@Body() createWishDto: Prisma.WishCreateInput, @Request() req) {
    const userName = req.user.name;
    
    const data: Prisma.WishCreateInput = {
      content: createWishDto.content,
      user: {
        connect: {
          name: userName,
        },
      },
    };
    return this.wishService.create(data);
  }

  @Get()
  findAll(@Query('status') status?: WishStatus) {
    return this.wishService.findAll();
  }

  @Get(':id')
  @UseGuards(AuthGuard('jwt'), AdminGuard)
  findOne(@Param('id') id: string) {
    return this.wishService.findOne(+id);
  }

  @Patch(':id')
  @UseGuards(AuthGuard('jwt'), AdminGuard)
  update(@Param('id') id: string, @Body() updateWishDto: Prisma.WishUpdateInput) {
    return this.wishService.update(+id, updateWishDto);
  }

  @Delete(':id')
  @UseGuards(AuthGuard('jwt'), AdminGuard)
  remove(@Param('id') id: string) {
    return this.wishService.remove(+id);
  }
}
