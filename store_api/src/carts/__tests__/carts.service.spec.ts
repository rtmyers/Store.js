import { Test, TestingModule } from '@nestjs/testing';
import * as request from 'supertest';
const mongoose = require('mongoose')
import { INestApplication } from '@nestjs/common'; 
import { CartsModule } from '../carts.module'
import { ApplicationModule } from '../../app/app.module';

import { MongooseModule } from '@nestjs/mongoose';
import { CartsService } from '../carts.service';
import { CartsSchema } from '../schemas/carts.schema';


describe('CartsService', () => {
  let service: CartsService;
  let app: INestApplication;

  beforeEach(async () => {
    const url = `mongodb://0.0.0.0:27017/db`;
    await mongoose.connect(url, { useNewUrlParser: true })
    const module: TestingModule = await Test.createTestingModule({
      imports: [ApplicationModule, MongooseModule.forFeature([{ name: 'Carts', schema: CartsSchema }])],
      providers: [CartsService]
    }).compile()

    service = module.get<CartsService>(CartsService)
    app = module.createNestApplication();
    await app.init();
  });
  it('should be defined', () => {
      expect(service).toBeDefined();
    });
  it('/GET carts', () => {
    return request(app.getHttpServer())
      .get('/carts')
      .expect(200)
      .expect([]);
    });
    afterAll(async () => {
      await app.close();
    });
});
