import { NestFactory } from '@nestjs/core'
import { ApplicationModule } from './app/app.module'
import { Logger } from '@nestjs/common'
import * as compression from 'compression'

async function bootstrap () {
  const app = await NestFactory.create(ApplicationModule, {
    logger: new Logger('verbose'),
    cors: true
  })
  app.setGlobalPrefix('api/v1')
  app.use(compression())

  await app.listen(3000)
  console.warn(`Application is running on: ${await app.getUrl()}`)
}

bootstrap()
