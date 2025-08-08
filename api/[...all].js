// /api/[...all].js
import serverless from 'serverless-http';
import app from '../mi-backend/src/app.js';

export default serverless(app);