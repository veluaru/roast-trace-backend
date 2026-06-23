import { IsNotEmpty, IsNumber, IsString, IsOptional, IsUUID, Min, Max } from 'class-validator';

export class CreateTastingDto {
  @IsNumber() @Min(0) @Max(10)
  body: number;

  @IsNumber() @Min(0) @Max(10)
  acidity: number;

  @IsNumber() @Min(0) @Max(10)
  sweetness: number;

  @IsNumber() @Min(0) @Max(10)
  aroma: number;

  @IsNumber() @Min(0) @Max(10)
  bitterness: number;

  @IsOptional() @IsString()
  notes?: string;

  @IsUUID() @IsNotEmpty()
  beanId: string;
}