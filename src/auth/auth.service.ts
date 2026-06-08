import { Injectable, UnauthorizedException } from '@nestjs/common';
import { UsersService } from '../users/users.service';
import { JwtService } from '@nestjs/jwt';
import * as bcrypt from 'bcrypt';

@Injectable()
export class AuthService {
  constructor(
    private usersService: UsersService,
    private jwtService: JwtService
  ) {}

  async login(email: string, pass: string) {
    // 1. Buscamos al usuario por su email
    // Nota: Necesitamos que UsersService tenga un método para buscar por email, lo haremos en el Paso 3
    const user = await this.usersService.findByEmail(email);

    // 2. Si no existe o la contraseña no coincide, lanzamos un error 401 (No Autorizado)
    if (!user) {
      throw new UnauthorizedException('Credenciales inválidas');
    }

    const isMatch = await bcrypt.compare(pass, user.password);
    if (!isMatch) {
      throw new UnauthorizedException('Credenciales inválidas');
    }

    // 3. Si todo está bien, preparamos la "carga útil" (payload) del token
    const payload = { sub: user.id, email: user.email };

    // 4. Firmamos y devolvemos el token
    return {
      access_token: await this.jwtService.signAsync(payload),
      user: { id: user.id, name: user.name, email: user.email } // Opcional: devolvemos datos útiles para el frontend
    };
  }
}