import { ApiProperty } from '@nestjs/swagger';
import { IsNotEmpty, IsString } from 'class-validator';
export class CreateCategoryDto {
  @ApiProperty()
  @IsString()
  @IsNotEmpty()
  name: string;
}
export class UpdateCategoryDto {
  @ApiProperty()
  @IsString()
  @IsNotEmpty()
  name: string;
}

class Category {
  @ApiProperty()
  created_at: Date;
  @ApiProperty()
  updated_at: Date;
  @ApiProperty()
  id: number;
  @ApiProperty()
  name: string;
}

export class CreateCategoryResponse extends Category {}
export class FindAllCategoriesResponse extends Category {}
export class FindOneCategoryResponse extends Category {}
export class UpdateCategoryResponse extends Category {}
export class RemoveCategoryResponse extends Category {}
