import { Injectable } from '@nestjs/common';
import { CreateCoffeeShopDto } from './dto/create-coffee-shop.dto';
import { UpdateCoffeeShopDto } from './dto/update-coffee-shop.dto';
import { PrismaService } from '../../prisma/prisma.service';

@Injectable()
export class CoffeeShopsService {
  // NestJS detecta automáticamente el PrismaService global aquí
  constructor(private prisma: PrismaService) {}

  async create(createCoffeeShopDto: CreateCoffeeShopDto) {
    return this.prisma.coffeeShop.create({
      data: {
        name: createCoffeeShopDto.name,
        address: createCoffeeShopDto.address,
        city: createCoffeeShopDto.city,
        logoUrl: createCoffeeShopDto.logoUrl,
      },
    });
  }

  async findAll() {
    return this.prisma.coffeeShop.findMany();
  }

  async findOne(id: string) { // Cambia a number si tu ID es autoincremental
    return this.prisma.coffeeShop.findUnique({
      where: { id },
    });
  }

  async update(id: string, updateCoffeeShopDto: UpdateCoffeeShopDto) {
    return this.prisma.coffeeShop.update({
      where: { id },
      data: updateCoffeeShopDto,
    });
  }

  async remove(id: string) {
    return this.prisma.coffeeShop.delete({
      where: { id },
    });
  }
}
