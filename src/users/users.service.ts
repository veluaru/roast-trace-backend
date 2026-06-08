import { Injectable } from '@nestjs/common';
import { CreateUserDto } from './dto/create-user.dto';
import { PrismaService } from '../../prisma/prisma.service';
import * as bcrypt from 'bcrypt';

@Injectable()
export class UsersService {
  constructor(private prisma: PrismaService) {}

  async create(createUserDto: CreateUserDto) {
    // 1. Definir los "saltos" (salt rounds). 10 es el equilibrio perfecto entre seguridad y velocidad.
    const saltRounds = 10;

    // 2. Encriptar la contraseña
    const hashedPassword = await bcrypt.hash(createUserDto.password, saltRounds);

    // 3. Guardar en la base de datos usando asignación explícita
    return this.prisma.user.create({
      data: {
        name: createUserDto.name,
        email: createUserDto.email,
        password: hashedPassword, // ¡Guardamos el hash, NUNCA el texto plano!
      },
      // Devolvemos los datos del usuario recién creado, pero EXCLUIMOS la contraseña
      select: {
        id: true,
        name: true,
        email: true,
        createdAt: true,
      }
    });
  }

  findAll() {
    return this.prisma.user.findMany({
      select: { id: true, name: true, email: true }, // Nunca devolvemos la contraseña
    });
  }

  findOne(id: string) {
    return this.prisma.user.findUnique({
      where: { id },
    });
  }

  async findByEmail(email: string) {
    return this.prisma.user.findUnique({
      where: { email },
    });
  }

  async update(id: string, updateUserDto: any) { // Puedes usar UpdateUserDto si lo tienes generado
    const dataToUpdate = { ...updateUserDto };

    // ¡SEGURIDAD! Si el usuario está actualizando su contraseña, debemos encriptarla de nuevo
    if (dataToUpdate.password) {
      const saltRounds = 10;
      dataToUpdate.password = await bcrypt.hash(dataToUpdate.password, saltRounds);
    }

    return this.prisma.user.update({
      where: { id },
      data: dataToUpdate,
      // Igual que en el create, NO devolvemos la contraseña al actualizar
      select: {
        id: true,
        name: true,
        email: true,
      },
    });
  }

  remove(id: string) {
    return this.prisma.user.delete({
      where: { id },
      // Devolvemos los datos del usuario eliminado como confirmación, sin la contraseña
      select: {
        id: true,
        name: true,
        email: true,
      },
    });
  }
}