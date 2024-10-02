import {
  Controller,
  Get,
  Post,
  Body,
  Patch,
  Param,
  Delete,
} from '@nestjs/common';
import { FoodsService } from './foods.service';
import {
  CreateFoodDto,
  CreateFoodResponse,
  FindAllFoodsResponse,
  FindOneFoodResponse,
  RemoveFoodResponse,
  UpdateFoodDto,
  UpdateFoodResponse,
} from './dto';
import { ApiOkResponse, ApiOperation, ApiTags } from '@nestjs/swagger';

@ApiTags('Food Items')
@Controller('foods')
export class FoodsController {
  constructor(private readonly foodsService: FoodsService) {}

  @Post()
  @ApiOperation({
    operationId: 'createFoodItem',
  })
  @ApiOkResponse({ type: CreateFoodResponse })
  create(@Body() createFoodDto: CreateFoodDto) {
    return this.foodsService.create(createFoodDto);
  }

  @Get()
  @ApiOperation({
    operationId: 'findAllFoodItems',
  })
  @ApiOkResponse({ type: FindAllFoodsResponse, isArray: true })
  findAll() {
    return this.foodsService.findAll();
  }

  @Get(':id')
  @ApiOperation({
    operationId: 'findOneFoodItem',
  })
  @ApiOkResponse({ type: FindOneFoodResponse })
  findOne(@Param('id') id: string) {
    return this.foodsService.findOne(+id);
  }

  @Patch(':id')
  @ApiOperation({
    operationId: 'updateFoodItem',
  })
  @ApiOkResponse({ type: UpdateFoodResponse })
  update(@Param('id') id: string, @Body() updateFoodDto: UpdateFoodDto) {
    return this.foodsService.update(+id, updateFoodDto);
  }

  @Delete(':id')
  @ApiOperation({
    operationId: 'removeFoodItem',
  })
  @ApiOkResponse({ type: RemoveFoodResponse })
  remove(@Param('id') id: string) {
    return this.foodsService.remove(+id);
  }
}
