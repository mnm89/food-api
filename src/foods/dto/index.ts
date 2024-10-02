import { ApiProperty, ApiPropertyOptional } from '@nestjs/swagger';
import { IsNotEmpty, IsString, IsInt } from 'class-validator';

export class CreateFoodDto {
  @ApiProperty()
  @IsString()
  @IsNotEmpty()
  name: string;
  @ApiPropertyOptional()
  @IsInt()
  category_id: number;
}

export class UpdateFoodDto {
  @ApiProperty()
  @IsString()
  @IsNotEmpty()
  name: string;
  @ApiPropertyOptional()
  @IsInt()
  category_id: number;
}
class Food {
  @ApiProperty()
  created_at: Date;
  @ApiProperty()
  updated_at: Date;
  @ApiProperty()
  id: number;
  @ApiProperty()
  name: string;
  @ApiProperty()
  category_id: number | null;
}
export class CreateFoodResponse extends Food {}
export class FindAllFoodsResponse extends Food {}
export class FindOneFoodResponse extends Food {}
export class UpdateFoodResponse extends Food {}
export class RemoveFoodResponse extends Food {}
