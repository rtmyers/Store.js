import * as request from 'supertest';
import { Test } from '@nestjs/testing';
import { HealthModule } from '../health.module';
import { INestApplication } from '@nestjs/common';

describe('HealthModule (e2e)', () => {
  let app: INestApplication;

  beforeAll(async () => {
    const moduleFixture = await Test.createTestingModule({
      imports: [HealthModule],
    }).compile();

    app = moduleFixture.createNestApplication();
    await app.init();
  });

  it('/v1/health (GET)', () => {
    return request(app.getHttpServer())
      .get('/v1/health')
      .expect(200)
      .expect({
        status: 'ok',
        info: { google: { status: 'up' } },
        details: { google: { status: 'up' } },
      });
  });
});
