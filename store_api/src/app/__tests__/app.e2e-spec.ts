import * as request from 'supertest';
import { Test, TestingModule } from '@nestjs/testing';
import { AppController } from '../app.controller';
import { ApplicationModule } from '../app.module';
import { INestApplication } from '@nestjs/common'; 

describe('AppController', () => {
    let app: INestApplication;
    let appController: AppController;
  
    beforeEach(async () => {
      const module: TestingModule = await Test.createTestingModule({
        controllers: [AppController],
      }).compile();
  
      appController = module.get<AppController>(AppController);
      app = module.createNestApplication();
        await app.init();
    });
    it('/ (GET)', () => {
        return request(app.getHttpServer())
        .get('/')
        .expect(200)
        .expect('Hello World!');
    });
   });  