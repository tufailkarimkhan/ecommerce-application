import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  let server = await app.listen(process.env.PORT ?? 3001);
  if (server) {
    const address = server.address();
    const port = typeof address === 'string' ? address : address?.port;
    console.log(address);
    console.log(`API Gateway is running on http://localhost:${port}`);
  }
}
bootstrap();
