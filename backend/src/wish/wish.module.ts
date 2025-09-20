import { Module } from '@nestjs/common';
import { WishService } from './wish.service';
import { WishController } from './wish.controller';
import { DatabaseModule } from 'src/database/database.module';
import { AuthModule } from 'src/auth/auth.module';
import { UsersModule } from 'src/users/users.module';

@Module({
  imports: [DatabaseModule, AuthModule, UsersModule],
  controllers: [WishController],
  providers: [WishService],
})
export class WishModule {}
