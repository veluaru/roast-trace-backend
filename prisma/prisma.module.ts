// src/prisma/prisma.module.ts
import { Global, Module } from '@nestjs/common';
import { PrismaService } from './prisma.service';

@Global() // Hace que PrismaService esté disponible en toda la app sin tener que importarlo
@Module({
  providers: [PrismaService],
  exports: [PrismaService], // Lo exportamos para que otros módulos lo usen
})
export class PrismaModule {}