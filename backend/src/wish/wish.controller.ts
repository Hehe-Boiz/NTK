import { Controller, Get, Post, Body, Patch, Param, Delete } from '@nestjs/common';
import { WishService } from './wish.service';
import { CreateWishDto } from './dto/create-wish.dto';
import { UpdateWishDto } from './dto/update-wish.dto';

@Controller('wish')
export class WishController {
  constructor(private readonly wishService: WishService) {}

  @Post()
  create(@Body() createWishDto: CreateWishDto) {
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
  update(@Param('id') id: string, @Body() updateWishDto: UpdateWishDto) {
    return this.wishService.update(+id, updateWishDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.wishService.remove(+id);
  }
}
