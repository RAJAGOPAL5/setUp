import express, { Request, Response } from 'express';
import { Pool } from 'pg';

// Initialize Express app
const app = express();
const PORT = 3000;

// PostgreSQL connection configuration
const pool = new Pool({
  user: 'your_username',
  host: 'localhost',
  database: 'your_database_name',
  password: 'your_password',
  port: 5432, // PostgreSQL default port
});

// Middleware to parse JSON requests
app.use(express.json());

// Example route to handle GET request for fetching data from PostgreSQL
app.get('/users', async (req: Request, res: Response) => {
  try {
    // Query the PostgreSQL database
    const { rows } = await pool.query('SELECT * FROM users');
    res.status(200).json(rows);
  } catch (err) {
    console.error('Error fetching data:', err);
    res.status(500).json({ error: 'Failed to fetch data' });
  }
});

// Start the Express server
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
