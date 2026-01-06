import './config/env.js';   // loads .env BEFORE anything else
import app from './app.js';
import { port } from './config/env.js';

app.listen(port, () => {
  console.log(`Server running on port ${port}`);
});
