// db.ts
import { Pool } from 'pg';
import { config } from 'dotenv';
config(); // Load environment variables from .env.local

// Log environment variables to verify they are correctly loaded
console.log('PG_USER:', String(process.env.PG_USER));
console.log('PG_HOST:', String(process.env.PG_HOST));
console.log('PG_DATABASE:', String(process.env.PG_DATABASE));
console.log('PG_PASSWORD:', String(process.env.PG_PASSWORD));
console.log('PG_PORT:', String(process.env.PG_PORT));
console.log('PG_CONNECT_TIMEOUT:', String(process.env.PG_CONNECT_TIMEOUT));
// console.log('PG_SSL_MODE:', String(process.env.PG_SSL_MODE));

const pool = new Pool({
  user: String(process.env.PG_USER),
  host: String(process.env.PG_HOST),
  database: String(process.env.PG_DATABASE),
  password: String(process.env.PG_PASSWORD),
  port: parseInt(String(process.env.PG_PORT || '5432'), 10),
  connectionTimeoutMillis:
    parseInt(String(process.env.PG_CONNECT_TIMEOUT || '10'), 10) * 1000, // Convert to milliseconds
  // ssl: process.env.PG_SSL_MODE === 'prefer' ? { rejectUnauthorized: false } : undefined,
});

export default pool;
