import { Module } from '@nestjs/common';
import { CoffeeShopsService } from './coffee-shops.service';
import { CoffeeShopsController } from './coffee-shops.controller';

@Module({
  controllers: [CoffeeShopsController],
  providers: [CoffeeShopsService],
})
export class CoffeeShopsModule {}
