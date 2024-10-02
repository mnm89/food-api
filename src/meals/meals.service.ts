import { Injectable } from '@nestjs/common';
import { CreateMealDto } from './dto/create-meal.dto';
import { UpdateMealDto } from './dto/update-meal.dto';
import { PrismaService } from '../prisma/prisma.service';

@Injectable()
export class MealsService {
  constructor(private readonly prisma: PrismaService) {}
  create(createMealDto: CreateMealDto) {
    return this.prisma.meal.create({ data: createMealDto });
  }

  async findAll() {
    const meals = await this.prisma.meal.findMany({
      include: {
        foods: { include: { food: { select: { name: true, id: true } } } },
      },
    });
    return meals.map((m) => ({ ...m, foods: m.foods.map((f) => f.food) }));
  }

  async findOne(id: number) {
    const meal = await this.prisma.meal.findUnique({
      where: { id },
      include: {
        foods: { include: { food: { select: { name: true, id: true } } } },
      },
    });
    return { ...meal, foods: meal.foods.map((f) => f.food) };
  }

  update(id: number, updateMealDto: UpdateMealDto) {
    return this.prisma.meal.update({ where: { id }, data: updateMealDto });
  }

  remove(id: number) {
    return this.prisma.meal.delete({ where: { id } });
  }
}
