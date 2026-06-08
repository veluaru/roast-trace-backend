import { IsNotEmpty, IsOptional, IsString } from 'class-validator';

export class CreateCoffeeShopDto {
  @IsString({ message: 'El nombre debe ser un texto' })
  @IsNotEmpty({ message: 'El nombre es obligatorio' })
  name: string;

  @IsString({ message: 'La dirección debe ser un texto' })
  @IsNotEmpty({ message: 'La dirección es obligatoria' })
  address: string;

  @IsString({ message: 'La ciudad debe ser un texto' })
  @IsNotEmpty({ message: 'La ciudad es obligatoria' })
  city: string;

  @IsString({ message: 'El logo debe ser una URL válida' })
  @IsOptional() // Esto permite que el campo sea opcional, tal como en tu schema.prisma
  logoUrl?: string;
}