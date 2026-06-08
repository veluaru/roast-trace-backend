import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { PrismaModule } from '../prisma/prisma.module';
import { CoffeeShopsModule } from './coffee-shops/coffee-shops.module';
import { BeansModule } from './beans/beans.module';
import { TastingsModule } from './tastings/tastings.module';
import { UsersModule } from './users/users.module';
import { AuthModule } from './auth/auth.module';

@Module({
  imports: [PrismaModule, CoffeeShopsModule, BeansModule, TastingsModule, UsersModule, AuthModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
