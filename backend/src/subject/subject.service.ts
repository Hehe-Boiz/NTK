import { Injectable } from '@nestjs/common';
import { Prisma } from 'generated/prisma';
import { DatabaseService } from 'src/database/database.service';

@Injectable()
export class SubjectService {
  constructor(private readonly databaseService: DatabaseService) {}

  create(createSubjectDto: Prisma.SubjectCreateInput) {
    return this.databaseService.subject.create({
      data: createSubjectDto
    });
  }

  findAll() {
    return this.databaseService.subject.findMany();
  }

  findOne(id: string) {
    return this.databaseService.subject.findUnique({
      where: {
        id,
      }
    });
  }

  update(id: string, updateSubjectDto: Prisma.SubjectUpdateInput) {
    return this.databaseService.subject.update({
      where: {id},
      data: updateSubjectDto
    });
  }

  remove(id: string) {
    return this.databaseService.subject.delete({
      where: {id}
    });
  }
}
