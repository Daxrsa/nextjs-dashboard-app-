// app/api/test-conn/route.ts
import { NextRequest, NextResponse } from 'next/server';
import pool from '../../../db';

export async function GET(request: NextRequest) {
  console.log('Handler called');
  try {
    console.log('Connecting to the database...');
    const client = await pool.connect();
    console.log('Connected to the database');

    await client.query('SELECT NOW()');
    client.release();

    console.log('Query executed successfully');
    return NextResponse.json({ message: 'Database connection successful' });
  } catch (error) {
    console.error('Database connection failed:', error);
    return NextResponse.json(
      {
        message: 'Database connection failed',
        error: (error as Error).message,
      },
      { status: 500 },
    );
  }
}
