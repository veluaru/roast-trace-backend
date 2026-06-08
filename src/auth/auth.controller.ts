import { Controller, Post, Body, HttpCode, HttpStatus } from '@nestjs/common';
import { AuthService } from './auth.service';

@Controller('auth')
export class AuthController {
  constructor(private readonly authService: AuthService) {}

  @HttpCode(HttpStatus.OK) // Por defecto un POST devuelve 201, pero un login exitoso debería devolver 200 OK
  @Post('login')
  signIn(@Body() signInDto: Record<string, any>) {
    // Extraemos el email y el password del cuerpo de la petición
    return this.authService.login(signInDto.email, signInDto.password);
  }
}