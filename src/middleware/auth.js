import jwt from 'jsonwebtoken';
import { jwtSecret } from '../config/env.js';

export function authenticate(req, res, next) {
  const header = req.headers.authorization;

  if (!header || !header.startsWith('Bearer ')) {
    return res.status(401).json({ error: 'missing or invalid authorization header' });
  }

  const token = header.split(' ')[1];

  try {
    const payload = jwt.verify(token, jwtSecret);
    req.user = payload; // { id, role }
    next();
  } catch {
    return res.status(401).json({ error: 'invalid or expired token' });
  }
}
