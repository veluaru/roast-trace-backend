import { Injectable } from '@nestjs/common';
import { CreateTastingDto } from './dto/create-tasting.dto';
import { PrismaService } from '../../prisma/prisma.service';

@Injectable()
export class TastingsService {
  constructor(private prisma: PrismaService) {}

  create(createTastingDto: CreateTastingDto) {
    return this.prisma.tasting.create({
      data: {
        body: createTastingDto.body,
        acidity: createTastingDto.acidity,
        sweetness: createTastingDto.sweetness,
        aroma: createTastingDto.aroma,
        bitterness: createTastingDto.bitterness,
        notes: createTastingDto.notes,
        beanId: createTastingDto.beanId,
        userId: createTastingDto.userId,
      },
    });
  }

  findAll() {
    return this.prisma.tasting.findMany({ include: { bean: true, user: true } });
  }

  // Agrega estos tres que te faltan:
  findOne(id: string) {
    return this.prisma.tasting.findUnique({ where: { id } });
  }

  update(id: string, updateTastingDto: any) {
    return this.prisma.tasting.update({ where: { id }, data: updateTastingDto });
  }

  remove(id: string) {
    return this.prisma.tasting.delete({ where: { id } });
  }
}