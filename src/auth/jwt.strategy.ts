import { ExtractJwt, Strategy } from 'passport-jwt';
import { PassportStrategy } from '@nestjs/passport';
import { Injectable } from '@nestjs/common';

@Injectable()
export class JwtStrategy extends PassportStrategy(Strategy) {
  constructor() {
    super({
      // Extrae el token de la cabecera "Authorization: Bearer <token>"
      jwtFromRequest: ExtractJwt.fromAuthHeaderAsBearerToken(),
      // Rechaza automáticamente los tokens que ya caducaron
      ignoreExpiration: false,
      // Usa la misma clave del .env para verificar la firma
      secretOrKey: process.env.JWT_SECRET as string,
    });
  }

  // Si la firma es válida, este método extrae la información
  async validate(payload: any) {
    return { userId: payload.sub, email: payload.email };
  }
}