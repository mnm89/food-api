import { Injectable } from '@nestjs/common';
import {
  CreateMealDto,
  CreateMealResponse,
  FindAllMealsResponse,
  FindOneMealResponse,
  RemoveMealResponse,
  UpdateMealDto,
  UpdateMealResponse,
} from './dto';
import { PrismaService } from 'nestjs-prisma';

@Injectable()
export class MealsService {
  async addFoodToMeal(
    id: number,
    foodId: number,
  ): Promise<FindOneMealResponse> {
    await this.prisma.foodsOnMeals.create({
      data: {
        food_id: foodId,
        meal_id: id,
      },
    });
    return this.findOne(id);
  }
  constructor(private readonly prisma: PrismaService) {}
  create(createMealDto: CreateMealDto): Promise<CreateMealResponse> {
    return this.prisma.meal.create({ data: createMealDto });
  }

  async findAll(): Promise<FindAllMealsResponse[]> {
    const meals = await this.prisma.meal.findMany({
      include: {
        foods: { include: { food: { select: { name: true, id: true } } } },
      },
    });
    return meals.map((m) => ({ ...m, foods: m.foods.map((f) => f.food) }));
  }

  async findOne(id: number): Promise<FindOneMealResponse> {
    const meal = await this.prisma.meal.findUniqueOrThrow({
      where: { id },
      include: {
        foods: { include: { food: { select: { name: true, id: true } } } },
      },
    });
    return { ...meal, foods: meal.foods.map((f) => f.food) };
  }

  update(
    id: number,
    updateMealDto: UpdateMealDto,
  ): Promise<UpdateMealResponse> {
    return this.prisma.meal.update({ where: { id }, data: updateMealDto });
  }

  remove(id: number): Promise<RemoveMealResponse> {
    return this.prisma.meal.delete({ where: { id } });
  }
}
