// src/prisma/prisma.service.ts (Para RoastTrace Backend v7)
import { Injectable, OnModuleInit, OnModuleDestroy } from '@nestjs/common';
import { PrismaPg } from '@prisma/adapter-pg';
import { PrismaClient } from '@prisma/client';
import * as dotenv from 'dotenv';

// Forzamos a Node.js a cargar el archivo .env antes de que se instancie la clase
dotenv.config();

@Injectable()
export class PrismaService extends PrismaClient implements OnModuleInit, OnModuleDestroy {
  constructor() {
    const connectionString = process.env.DIRECT_URL;

    if (!connectionString) {
      throw new Error('DIRECT_URL no esta definida.');
    }

    const adapter = new PrismaPg({ connectionString });

    super({
      adapter,
    });
  }

  async onModuleInit() {
    await this.$connect();
  }

  async onModuleDestroy() {
    await this.$disconnect();
  }
}