import {
  Controller,
  Get,
  Post,
  Body,
  Patch,
  Param,
  Delete,
} from '@nestjs/common';
import { CategoriesService } from './categories.service';
import {
  CreateCategoryDto,
  CreateCategoryResponse,
  FindAllCategoriesResponse,
  FindOneCategoryResponse,
  RemoveCategoryResponse,
  UpdateCategoryDto,
  UpdateCategoryResponse,
} from './dto';

import { ApiOkResponse, ApiOperation, ApiTags } from '@nestjs/swagger';

@ApiTags('Food Categories')
@Controller('categories')
export class CategoriesController {
  constructor(private readonly categoriesService: CategoriesService) {}

  @Post()
  @ApiOperation({
    operationId: 'createFoodCategory',
  })
  @ApiOkResponse({ type: CreateCategoryResponse })
  create(@Body() createCategoryDto: CreateCategoryDto) {
    return this.categoriesService.create(createCategoryDto);
  }

  @Get()
  @ApiOperation({
    operationId: 'findAllFoodCategories',
  })
  @ApiOkResponse({ type: FindAllCategoriesResponse, isArray: true })
  findAll() {
    return this.categoriesService.findAll();
  }

  @Get(':id')
  @ApiOperation({
    operationId: 'findOneFoodCategory',
  })
  @ApiOkResponse({ type: FindOneCategoryResponse })
  findOne(@Param('id') id: string) {
    return this.categoriesService.findOne(+id);
  }

  @Patch(':id')
  @ApiOperation({
    operationId: 'updateFoodCategory',
  })
  @ApiOkResponse({ type: UpdateCategoryResponse })
  update(
    @Param('id') id: string,
    @Body() updateCategoryDto: UpdateCategoryDto,
  ) {
    return this.categoriesService.update(+id, updateCategoryDto);
  }

  @Delete(':id')
  @ApiOperation({
    operationId: 'removeFoodCategory',
  })
  @ApiOkResponse({ type: RemoveCategoryResponse })
  remove(@Param('id') id: string) {
    return this.categoriesService.remove(+id);
  }
}
