import { Injectable } from '@nestjs/common';
import { CreateBeanDto } from './dto/create-bean.dto';
import { PrismaService } from '../../prisma/prisma.service';

@Injectable()
export class BeansService {
  constructor(private prisma: PrismaService) {}

  create(createBeanDto: CreateBeanDto) {
    return this.prisma.bean.create({
      data: {
        name: createBeanDto.name,
        farm: createBeanDto.farm,
        origin: createBeanDto.origin,
        process: createBeanDto.process,
        altitude: createBeanDto.altitude,
        cupScore: createBeanDto.cupScore,
        imageUrl: createBeanDto.imageUrl,
        shopId: createBeanDto.shopId,
      },
    });
  }

  findAll() {
    return this.prisma.bean.findMany({
      include: { coffeeShop: true },
    });
  }

  findOne(id: string) {
    return this.prisma.bean.findUnique({
      where: { id },
      include: { coffeeShop: true },
    });
  }

  async update(id: string, updateBeanDto: any) { // Puedes crear un UpdateBeanDto
    return this.prisma.bean.update({
      where: { id },
      data: updateBeanDto,
    });
  }
  
  async remove(id: string) {
    return this.prisma.bean.delete({
      where: { id },
    });
  }
}