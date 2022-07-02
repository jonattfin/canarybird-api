import { NestFactory } from '@nestjs/core';
import { SwaggerModule, DocumentBuilder } from '@nestjs/swagger';

import { AppModule } from './app.module';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);

  const config = new DocumentBuilder()
    .setTitle('CanaryBird')
    .setDescription('The CanaryBird API description')
    .setVersion('1.0')
    .addTag('sensors')
    .build();
  const document = SwaggerModule.createDocument(app, config);
  SwaggerModule.setup('api', app, document);

  await await app.listen(process.env.PORT || 8080);
}
bootstrap();
