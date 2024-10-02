import { Injectable } from '@nestjs/common';
import {
  CreateCategoryDto,
  CreateCategoryResponse,
  FindAllCategoriesResponse,
  FindOneCategoryResponse,
  RemoveCategoryResponse,
  UpdateCategoryDto,
  UpdateCategoryResponse,
} from './dto';
import { PrismaService } from 'nestjs-prisma';

@Injectable()
export class CategoriesService {
  constructor(private readonly prisma: PrismaService) {}
  create(
    createCategoryDto: CreateCategoryDto,
  ): Promise<CreateCategoryResponse> {
    return this.prisma.category.create({
      data: createCategoryDto,
    });
  }

  findAll(): Promise<FindAllCategoriesResponse[]> {
    return this.prisma.category.findMany();
  }

  findOne(id: number): Promise<FindOneCategoryResponse> {
    return this.prisma.category.findUniqueOrThrow({
      where: { id },
      include: { foods: { select: { name: true, id: true } } },
    });
  }

  update(
    id: number,
    updateCategoryDto: UpdateCategoryDto,
  ): Promise<UpdateCategoryResponse> {
    return this.prisma.category.update({
      where: { id },
      data: updateCategoryDto,
    });
  }

  remove(id: number): Promise<RemoveCategoryResponse> {
    return this.prisma.category.delete({ where: { id } });
  }
}
