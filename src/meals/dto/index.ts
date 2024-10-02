import { ApiProperty } from '@nestjs/swagger';
import { IsNotEmpty, IsString } from 'class-validator';

export class CreateMealDto {
  @ApiProperty()
  @IsString()
  @IsNotEmpty()
  name: string;
}
export class UpdateMealDto {
  @ApiProperty()
  @IsString()
  @IsNotEmpty()
  name: string;
}
class Meal {
  @ApiProperty()
  created_at: Date;
  @ApiProperty()
  updated_at: Date;
  @ApiProperty()
  id: number;
  @ApiProperty()
  name: string;
}

class MealFood {
  @ApiProperty()
  id: number;
  @ApiProperty()
  name: string;
}

export class CreateMealResponse extends Meal {}
export class FindAllMealsResponse extends Meal {
  @ApiProperty({ isArray: true, type: MealFood })
  foods: MealFood[];
}
export class FindOneMealResponse extends Meal {
  @ApiProperty({ isArray: true, type: MealFood })
  foods: MealFood[];
}
export class UpdateMealResponse extends Meal {}
export class RemoveMealResponse extends Meal {}
