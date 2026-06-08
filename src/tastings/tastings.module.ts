import { Module } from '@nestjs/common';
import { TastingsService } from './tastings.service';
import { TastingsController } from './tastings.controller';

@Module({
  controllers: [TastingsController],
  providers: [TastingsService],
})
export class TastingsModule {}
