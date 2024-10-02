import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { PrismaModule } from './prisma/prisma.module';
import { CategoriesModule } from './categories/categories.module';
import { FoodsModule } from './foods/foods.module';

@Module({
  imports: [PrismaModule, CategoriesModule, FoodsModule],
  controllers: [AppController],
  providers: [],
})
export class AppModule {}
