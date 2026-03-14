import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { AuthModule } from './auth/auth.module';
import { ConfigModule } from '@nestjs/config';
import { UserGatewayModule } from './gateway/user/user.gateway.module';
import { ProductGatewayModule } from './gateway/product/product.gateway.module';

@Module({
  imports: [AuthModule, ConfigModule.forRoot({
    isGlobal: true,
    envFilePath: '.env'
  }),
  UserGatewayModule,
  ProductGatewayModule,
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
