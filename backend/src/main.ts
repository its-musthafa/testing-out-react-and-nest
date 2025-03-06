import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  app.enableCors({
    origin: 'https://symmetrical-succotash-564qrgx497gfp7pr-5173.app.github.dev', // This allows requests from any domain (useful during development)
    methods: 'GET,POST,PUT,DELETE', // Allow these HTTP methods
    allowedHeaders: 'Content-Type, Authorization', // Allow these headers
  });
  await app.listen(5000);
}
bootstrap();
