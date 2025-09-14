import { Controller, Get, Post, Body, Patch, Param, Delete } from '@nestjs/common';
import { ThemesService } from './themes.service';
import { CreateThemeDto } from './dto/create-theme.dto';
import { UpdateThemeDto } from './dto/update-theme.dto';

@Controller('themes')
export class ThemesController {
  constructor(private readonly themesService: ThemesService) {}

  @Post()
  create(@Body() createThemeDto: CreateThemeDto) {
    return this.themesService.create(createThemeDto);
  }

  @Get()
  findAll() {
    return this.themesService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.themesService.findOne(+id);
  }

  @Patch(':id')
  update(@Param('id') id: string, @Body() updateThemeDto: UpdateThemeDto) {
    return this.themesService.update(+id, updateThemeDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.themesService.remove(+id);
  }
}
