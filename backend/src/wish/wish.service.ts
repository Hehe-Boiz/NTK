import { Injectable } from '@nestjs/common';
import { Prisma } from 'generated/prisma';
import { DatabaseService } from 'src/database/database.service';

@Injectable()
export class WishService {
  constructor(private readonly databaseService: DatabaseService) {}

  create(createWishDto: Prisma.WishCreateInput) {
    return this.databaseService.wish.create({
      data: createWishDto
    });
  }

  findAll() {
    return this.databaseService.wish.findMany();
  }

  findOne(id: number) {
    return this.databaseService.wish.findUnique({
      where: {id}
    });
  }

  update(id: number, updateWishDto: Prisma.WishUpdateInput) {
    return this.databaseService.wish.update({
      where: {id},
      data: updateWishDto
    });
  }

  remove(id: number) {
    return this.databaseService.wish.delete({
      where: {id}
    });
  }
}
