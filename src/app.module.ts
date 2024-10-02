import { HttpStatus, Module } from '@nestjs/common';
import { CategoriesModule } from './categories/categories.module';
import { FoodsModule } from './foods/foods.module';
import { MealsModule } from './meals/meals.module';
import { APP_FILTER, HttpAdapterHost } from '@nestjs/core';
import { PrismaClientExceptionFilter, PrismaModule } from 'nestjs-prisma';

@Module({
  imports: [
    PrismaModule.forRoot({
      isGlobal: true,
    }),
    CategoriesModule,
    FoodsModule,
    MealsModule,
  ],
  controllers: [],
  providers: [
    {
      provide: APP_FILTER,
      useFactory: ({ httpAdapter }: HttpAdapterHost) => {
        return new PrismaClientExceptionFilter(httpAdapter, {
          P2003: HttpStatus.BAD_REQUEST,
        });
      },
      inject: [HttpAdapterHost],
    },
  ],
})
export class AppModule {}
