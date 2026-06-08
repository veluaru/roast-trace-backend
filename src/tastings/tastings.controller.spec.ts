import { Test, TestingModule } from '@nestjs/testing';
import { TastingsController } from './tastings.controller';
import { TastingsService } from './tastings.service';

describe('TastingsController', () => {
  let controller: TastingsController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [TastingsController],
      providers: [TastingsService],
    }).compile();

    controller = module.get<TastingsController>(TastingsController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
