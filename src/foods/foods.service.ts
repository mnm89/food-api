import { Injectable } from '@nestjs/common';
import { CreateFoodDto } from './dto/create-food.dto';
import { UpdateFoodDto } from './dto/update-food.dto';
import { PrismaService } from '../prisma/prisma.service';

@Injectable()
export class FoodsService {
  constructor(private readonly prisma: PrismaService) {}
  create(createFoodDto: CreateFoodDto) {
    return this.prisma.food.create({ data: createFoodDto });
  }

  findAll() {
    return this.prisma.food.findMany();
  }

  findOne(id: number) {
    return this.prisma.food.findUnique({ where: { id } });
  }

  update(id: number, updateFoodDto: UpdateFoodDto) {
    return this.prisma.food.update({ where: { id }, data: updateFoodDto });
  }

  remove(id: number) {
    return this.prisma.food.delete({ where: { id } });
  }
}
