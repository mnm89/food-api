import {
  Controller,
  Get,
  Post,
  Body,
  Patch,
  Param,
  Delete,
} from '@nestjs/common';
import { MealsService } from './meals.service';
import {
  CreateMealDto,
  CreateMealResponse,
  FindAllMealsResponse,
  FindOneMealResponse,
  RemoveMealResponse,
  UpdateMealDto,
  UpdateMealResponse,
} from './dto';
import { ApiOperation, ApiOkResponse, ApiTags } from '@nestjs/swagger';

@ApiTags('Meals')
@Controller('meals')
export class MealsController {
  constructor(private readonly mealsService: MealsService) {}

  @Post()
  @ApiOperation({
    operationId: 'createMeal',
  })
  @ApiOkResponse({ type: CreateMealResponse })
  create(@Body() createMealDto: CreateMealDto) {
    return this.mealsService.create(createMealDto);
  }

  @Get()
  @ApiOperation({
    operationId: 'findAllMeals',
  })
  @ApiOkResponse({ type: FindAllMealsResponse, isArray: true })
  findAll() {
    return this.mealsService.findAll();
  }

  @Get(':id')
  @ApiOperation({
    operationId: 'findOneMeal',
  })
  @ApiOkResponse({ type: FindOneMealResponse })
  findOne(@Param('id') id: string) {
    return this.mealsService.findOne(+id);
  }

  @Patch(':id')
  @ApiOperation({
    operationId: 'updateMeal',
  })
  @ApiOkResponse({ type: UpdateMealResponse })
  update(@Param('id') id: string, @Body() updateMealDto: UpdateMealDto) {
    return this.mealsService.update(+id, updateMealDto);
  }

  @Delete(':id')
  @ApiOperation({
    operationId: 'removeMeal',
  })
  @ApiOkResponse({ type: RemoveMealResponse })
  remove(@Param('id') id: string) {
    return this.mealsService.remove(+id);
  }
}
