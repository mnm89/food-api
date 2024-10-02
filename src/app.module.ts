import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { PrismaModule } from './prisma/prisma.module';
import { CategoriesModule } from './categories/categories.module';
import { FoodsModule } from './foods/foods.module';
import { MealsModule } from './meals/meals.module';

@Module({
  imports: [PrismaModule, CategoriesModule, FoodsModule, MealsModule],
  controllers: [AppController],
  providers: [],
})
export class AppModule {}
