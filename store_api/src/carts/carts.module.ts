import { Module } from '@nestjs/common';
import { CartsService } from './carts.service';
import { CartsController } from './carts.controller';
import { MongooseModule } from '@nestjs/mongoose';
import { CartsSchema } from './schemas/carts.schema';

@Module({
  imports: [
    MongooseModule.forFeature([{ name: 'Carts', schema: CartsSchema }]),
  ],
  providers: [CartsService],
  controllers: [CartsController]
})
export class CartsModule {}
