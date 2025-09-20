import { Controller, Get, Post, Body, Patch, Param, Delete, UseGuards } from '@nestjs/common';
import { ThemesService } from './themes.service';
import { UpdateThemeDto } from './dto/update-theme.dto';
import { AuthGuard } from '@nestjs/passport';
import { AdminGuard } from 'src/auth/admin.guard';

@Controller('themes')
@UseGuards(AuthGuard('jwt'), AdminGuard)
export class ThemesController {
  constructor(private readonly themesService: ThemesService) {}

  @Get()
  getCurrent() {
    return this.themesService.getCurrent();
  }

  @Post()
  update(@Body() updateThemeDto: UpdateThemeDto) {
    return this.themesService.update(updateThemeDto);
  }

  @Delete()
  reset() {
    return this.themesService.reset();
  }
}
