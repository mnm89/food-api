import { Injectable } from '@nestjs/common';
import {
  CreateFoodDto,
  CreateFoodResponse,
  FindAllFoodsResponse,
  FindOneFoodResponse,
  RemoveFoodResponse,
  UpdateFoodDto,
  UpdateFoodResponse,
} from './dto';

import { PrismaService } from '../prisma/prisma.service';

@Injectable()
export class FoodsService {
  constructor(private readonly prisma: PrismaService) {}
  create(createFoodDto: CreateFoodDto): Promise<CreateFoodResponse> {
    return this.prisma.food.create({ data: createFoodDto });
  }

  findAll(): Promise<FindAllFoodsResponse[]> {
    return this.prisma.food.findMany();
  }

  findOne(id: number): Promise<FindOneFoodResponse> {
    return this.prisma.food.findUnique({ where: { id } });
  }

  update(
    id: number,
    updateFoodDto: UpdateFoodDto,
  ): Promise<UpdateFoodResponse> {
    return this.prisma.food.update({ where: { id }, data: updateFoodDto });
  }

  remove(id: number): Promise<RemoveFoodResponse> {
    return this.prisma.food.delete({ where: { id } });
  }
}
