import { Injectable, OnApplicationBootstrap } from '@nestjs/common';
import { PrismaService } from './prisma.service';

@Injectable()
export class SeedService implements OnApplicationBootstrap {
  constructor(private readonly prisma: PrismaService) {}
  async onApplicationBootstrap() {
    // seed database with default data
    await this.createDefaultCategories();
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
}
