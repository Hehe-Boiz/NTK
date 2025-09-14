import { Module } from '@nestjs/common';
import { WishService } from './wish.service';
import { WishController } from './wish.controller';

@Module({
  controllers: [WishController],
  providers: [WishService],
})
export class WishModule {}
