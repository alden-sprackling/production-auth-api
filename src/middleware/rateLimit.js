const WINDOW_MS = 60 * 1000; // 1 minute
const MAX_REQUESTS = 5;

const requests = new Map();

export function rateLimit(req, res, next) {
  const key = req.ip;
  const now = Date.now();

  const entry = requests.get(key);

  if (!entry) {
    requests.set(key, { count: 1, start: now });
    return next();
  }

  const elapsed = now - entry.start;

  if (elapsed > WINDOW_MS) {
    requests.set(key, { count: 1, start: now });
    return next();
  }

  if (entry.count >= MAX_REQUESTS) {
    return res.status(429).json({
      error: 'Too many requests. Please try again later.',
    });
  }

  entry.count += 1;
  next();
}
