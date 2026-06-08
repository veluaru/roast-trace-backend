import { ValidationPipe } from '@nestjs/common';
import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);

  // Activamos la validación global
  app.useGlobalPipes(
    new ValidationPipe({
      whitelist: true, // Elimina automáticamente cualquier propiedad extraña que no esté en el DTO
      forbidNonWhitelisted: true, // Lanza un error si envían propiedades que no corresponden
      transform: true, // Transforma automáticamente los tipos de datos (ej: strings a numbers en IDs)
    }),
  );

  await app.listen(3000);
}
bootstrap();