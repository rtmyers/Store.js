import {
  Module,
  HttpModule,
  CacheModule,
  CacheInterceptor,
} from '@nestjs/common';
import { ConfigModule } from '@nestjs/config';
import { AppController } from './app.controller';
import { APP_INTERCEPTOR } from '@nestjs/core';
import { HealthModule } from 'src/health/health.module';
import { CartsModule } from 'src/carts/carts.module';
import { MongooseModule } from '@nestjs/mongoose';
import { CartsService } from 'src/carts/carts.service';

@Module({
  imports: [
    HealthModule,
    CartsModule,
    MongooseModule.forRoot('mongodb://mongo:27017/db', { useNewUrlParser: true}),
    CacheModule.register({
      max: 5,
      ttl: 10,
    }),
    ConfigModule.forRoot({
      isGlobal: true,
    }),
    HttpModule.registerAsync({
      useFactory: () => ({
        timeout: 5000,
        maxRedirects: 5,
      }),
    }),
  ],
  controllers: [AppController],
  providers: [
    {
      provide: APP_INTERCEPTOR,
      useClass: CacheInterceptor,
    },
  ],
})
export class ApplicationModule {}
