import express from 'express';
import db from '../db/index.js';
import { authenticate } from '../middleware/auth.js';
import { requireRole } from '../middleware/roleCheck.js';

const router = express.Router();

router.get('/me', authenticate, async (req, res) => {
  const result = await db.query(
    `SELECT id, email, role, created_at FROM users WHERE id = $1`,
    [req.user.id]
  );

  res.json({ user: result.rows[0] });
});

router.get('/admin/users',
  authenticate,
  requireRole('admin'),
  async (req, res) => {
    const result = await db.query(
      `SELECT id, email, role, created_at FROM users ORDER BY id`
    );

    res.json({ users: result.rows });
  }
);

export default router;
