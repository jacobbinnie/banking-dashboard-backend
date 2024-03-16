import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { DocumentBuilder, SwaggerModule } from '@nestjs/swagger';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  app.enableCors({
    origin: ['http://localhost:3000'],
    methods: ['GET', 'POST'],
    allowedHeaders: 'Content-Type,Authorization',
  });

  const config = new DocumentBuilder()
    .addBearerAuth()
    .setTitle('Banking Dashboard Backend API')
    .setDescription('The Banking Dashbaord Backend API description.')
    .setVersion('1.0')
    .addTag('banking-dashboard')
    .build();

  const document = SwaggerModule.createDocument(app, config);

  SwaggerModule.setup('api', app, document);

  await app.listen(process.env.PORT || 3000);
}

bootstrap();
