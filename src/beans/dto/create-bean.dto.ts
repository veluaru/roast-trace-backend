import { IsString, IsNotEmpty, IsInt, IsOptional, IsNumber, IsUUID } from 'class-validator';

export class CreateBeanDto {
  @IsString()
  @IsNotEmpty()
  name: string;

  @IsString()
  @IsNotEmpty()
  farm: string;

  @IsString()
  @IsNotEmpty()
  origin: string;

  @IsString()
  @IsNotEmpty()
  process: string;

  @IsInt()
  altitude: number;

  @IsOptional()
  @IsNumber()
  cupScore?: number;

  @IsOptional()
  @IsString()
  imageUrl?: string;

  @IsUUID()
  @IsNotEmpty()
  shopId: string; // Este ID es el que conecta el grano con la cafetería
}