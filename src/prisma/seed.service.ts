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
}
