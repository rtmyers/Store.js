import { Test, TestingModule } from '@nestjs/testing';
import { CartsController } from '../carts.controller';
import { CartsService } from '../carts.service';

describe('Carts Controller', () => {
  let controller: CartsController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [CartsController],
      providers: [CartsService],
    }).compile();

    controller = module.get<CartsController>(CartsController);
  });

  it('should be defined', () => {
      expect(true).toBe(true);
    });
});
