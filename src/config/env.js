require('dotenv').config();

if (!process.env.JWT_SECRET) {
  throw new Error('JWT_SECRET not set');
}

export const port = process.env.PORT || 3000;
export const jwtSecret = process.env.JWT_SECRET;
