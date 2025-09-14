import { Injectable } from '@nestjs/common';
import { CreateThemeDto } from './dto/create-theme.dto';
import { UpdateThemeDto } from './dto/update-theme.dto';

@Injectable()
export class ThemesService {
  create(createThemeDto: CreateThemeDto) {
    return 'This action adds a new theme';
  }

  findAll() {
    return `This action returns all themes`;
  }

  findOne(id: number) {
    return `This action returns a #${id} theme`;
  }

  update(id: number, updateThemeDto: UpdateThemeDto) {
    return `This action updates a #${id} theme`;
  }

  remove(id: number) {
    return `This action removes a #${id} theme`;
  }
}
