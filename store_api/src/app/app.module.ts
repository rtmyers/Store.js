import {
  Module,
  HttpModule,
  CacheModule,
  CacheInterceptor,
} from '@nestjs/common';
import { ConfigModule } from '@nestjs/config';
import { MongooseModule } from '@nestjs/mongoose';
import { AppController } from './app.controller';
import { APP_INTERCEPTOR } from '@nestjs/core';
import { CartsSchema } from 'src/carts/schemas/carts.schema';
import { CartsController } from 'src/carts/carts.controller';
import { CartsService } from 'src/carts/carts.service';

@Module({
  imports: [
		MongooseModule.forFeature([{ name: 'Carts', schema: CartsSchema, collection: 'carts' }]),
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
  controllers: [AppController, CartsController],
  providers: [
		CartsService,
    {
      provide: APP_INTERCEPTOR,
      useClass: CacheInterceptor,
    },
  ],
})
export class ApplicationModule {}
