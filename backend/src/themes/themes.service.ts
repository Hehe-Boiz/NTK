import { Injectable } from '@nestjs/common';
import { UpdateThemeDto } from './dto/update-theme.dto';
import * as path from 'path';
import * as fs from 'fs/promises'

@Injectable()
export class ThemesService {
  private readonly defaultConfigPath = path.resolve(
    process.cwd(),
    'config',
    'defaultTheme.json',
  );
  private readonly customConfigPath = path.resolve(
    process.cwd(),
    'config',
    'customTheme.json',
  );

  async getCurrent() {
    try {
      await fs.access(this.customConfigPath);
      const customConfig = await fs.readFile(this.customConfigPath, 'utf-8');
      return JSON.parse(customConfig);
    } catch (error) {
      const defaultConfig = await fs.readFile(this.defaultConfigPath, 'utf-8');
      return JSON.parse(defaultConfig);
    }
  }

  async update(updateThemeDto: UpdateThemeDto) {
    const data = JSON.stringify(updateThemeDto, null, 2);
    await fs.writeFile(this.customConfigPath, data, 'utf-8');
    return updateThemeDto;
  }

  async reset() {
    try {
      await fs.unlink(this.customConfigPath);
      return { message: 'Theme reset successfully' };
    } catch (error) {
      if (error.code === 'ENOENT') {
        return { message: 'No custom theme to reset' };
      }
      throw error;
    }
  }
}
