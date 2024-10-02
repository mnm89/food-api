import { Injectable, OnApplicationBootstrap } from '@nestjs/common';
import { PrismaService } from './prisma.service';

@Injectable()
export class SeedService implements OnApplicationBootstrap {
  constructor(private readonly prisma: PrismaService) {}
  async onApplicationBootstrap() {
    // seed database with default data
    await this.createDefaultCategories();
    await this.createDefaultFruitsItems();
    await this.createDefaultVegetablesItems();
    await this.createDefaultGrainsItems();
    await this.createDefaultProteinsItems();
    await this.createDefaultDairyItems();
    await this.createBreakfastMeal();
    await this.createLunchMeal();
    await this.createDinnerMeal();
  }

  async createDefaultCategories() {
    const categories = [
      { name: 'Fruits' },
      { name: 'Vegetables' },
      { name: 'Grains' },
      { name: 'Proteins' },
      { name: 'Dairy' },
    ];
    const promises = categories.map((c) =>
      this.prisma.category.upsert({
        create: c,
        update: c,
        where: {
          name: c.name,
        },
      }),
    );
    await Promise.all(promises);
  }
  async createDefaultFruitsItems() {
    const fruits = await this.prisma.category.findUniqueOrThrow({
      where: { name: 'Fruits' },
    });
    const promises = [{ name: 'Apple' }, { name: 'Banana' }].map((c) =>
      this.prisma.food.upsert({
        create: { ...c, category_id: fruits.id },
        update: { ...c, category_id: fruits.id },
        where: {
          name: c.name,
        },
      }),
    );
    await Promise.all(promises);
  }
  async createDefaultVegetablesItems() {
    const vegetables = await this.prisma.category.findUniqueOrThrow({
      where: { name: 'Vegetables' },
    });
    const promises = [{ name: 'Carrot' }, { name: 'Broccoli' }].map((c) =>
      this.prisma.food.upsert({
        create: { ...c, category_id: vegetables.id },
        update: { ...c, category_id: vegetables.id },
        where: {
          name: c.name,
        },
      }),
    );
    await Promise.all(promises);
  }

  async createDefaultGrainsItems() {
    const grains = await this.prisma.category.findUniqueOrThrow({
      where: { name: 'Grains' },
    });
    const promises = [{ name: 'Rice' }, { name: 'Wheat Bread' }].map((c) =>
      this.prisma.food.upsert({
        create: { ...c, category_id: grains.id },
        update: { ...c, category_id: grains.id },
        where: {
          name: c.name,
        },
      }),
    );
    await Promise.all(promises);
  }
  async createDefaultProteinsItems() {
    const proteins = await this.prisma.category.findUniqueOrThrow({
      where: { name: 'Proteins' },
    });
    const promises = [{ name: 'Chicken Breast' }, { name: 'Salmon' }].map((c) =>
      this.prisma.food.upsert({
        create: { ...c, category_id: proteins.id },
        update: { ...c, category_id: proteins.id },
        where: {
          name: c.name,
        },
      }),
    );
    await Promise.all(promises);
  }
  async createDefaultDairyItems() {
    const dairy = await this.prisma.category.findUniqueOrThrow({
      where: { name: 'Dairy' },
    });
    const promises = [{ name: 'Milk' }, { name: 'Yogurt' }].map((c) =>
      this.prisma.food.upsert({
        create: { ...c, category_id: dairy.id },
        update: { ...c, category_id: dairy.id },
        where: {
          name: c.name,
        },
      }),
    );
    await Promise.all(promises);
  }

  async createBreakfastMeal() {
    const foods = await this.prisma.food.findMany({
      where: { OR: [{ name: 'Apple' }, { name: 'Yogurt' }] },
    });
    const meal = await this.prisma.meal.upsert({
      create: {
        name: 'Breakfast',
      },
      update: {
        name: 'Breakfast',
      },
      where: {
        name: 'Breakfast',
      },
    });
    const promises = foods.map((f) =>
      this.prisma.foodsOnMeals.upsert({
        create: {
          food_id: f.id,
          meal_id: meal.id,
        },
        update: {
          food_id: f.id,
          meal_id: meal.id,
        },
        where: {
          meal_id_food_id: { food_id: f.id, meal_id: meal.id },
        },
      }),
    );
    await Promise.all(promises);
  }
  async createLunchMeal() {
    const foods = await this.prisma.food.findMany({
      where: {
        OR: [
          { name: 'Wheat Bread' },
          { name: 'Chicken Breast' },
          { name: 'Carrot' },
        ],
      },
    });
    const meal = await this.prisma.meal.upsert({
      create: {
        name: 'Lunch',
      },
      update: {
        name: 'Lunch',
      },
      where: {
        name: 'Lunch',
      },
    });
    const promises = foods.map((f) =>
      this.prisma.foodsOnMeals.upsert({
        create: {
          food_id: f.id,
          meal_id: meal.id,
        },
        update: {
          food_id: f.id,
          meal_id: meal.id,
        },
        where: {
          meal_id_food_id: { food_id: f.id, meal_id: meal.id },
        },
      }),
    );
    await Promise.all(promises);
  }
  async createDinnerMeal() {
    const foods = await this.prisma.food.findMany({
      where: {
        OR: [{ name: 'Salmon' }, { name: 'Broccoli' }, { name: 'Rice' }],
      },
    });
    const meal = await this.prisma.meal.upsert({
      create: {
        name: 'Dinner',
      },
      update: {
        name: 'Dinner',
      },
      where: {
        name: 'Dinner',
      },
    });
    const promises = foods.map((f) =>
      this.prisma.foodsOnMeals.upsert({
        create: {
          food_id: f.id,
          meal_id: meal.id,
        },
        update: {
          food_id: f.id,
          meal_id: meal.id,
        },
        where: {
          meal_id_food_id: { food_id: f.id, meal_id: meal.id },
        },
      }),
    );
    await Promise.all(promises);
  }
}
