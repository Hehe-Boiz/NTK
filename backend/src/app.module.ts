import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { UsersModule } from './users/users.module';
import { DatabaseModule } from './database/database.module';
import { ThemesModule } from './themes/themes.module';
import { SubjectModule } from './subject/subject.module';
import { WishModule } from './wish/wish.module';
import { AuthModule } from './auth/auth.module';


@Module({
  imports: [UsersModule, DatabaseModule, ThemesModule, SubjectModule, WishModule, AuthModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
