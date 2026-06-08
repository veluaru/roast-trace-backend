// prisma/prisma.config.ts (Actualizado para migraciones con Accelerate en v7)
import { defineConfig } from 'prisma/config';
import * as dotenv from 'dotenv';

// Cargamos las variables de entorno manually
dotenv.config();

export default defineConfig({
  datasource: {
    url: process.env.DIRECT_URL, 
  },
  // Opcional: Para el portafolio, también podemos definir la URL de la base de datos directa (shadow database)
  // shadowDatabaseUrl: process.env.SHADOW_DATABASE_URL, 
});