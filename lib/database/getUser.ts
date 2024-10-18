import { sql } from '@vercel/postgres';
import { NextResponse } from 'next/server';
/**
 * Get User
 *
 * Simulates calling your database and returning a user with a seeded random colour
 *
 * @param userId - The user's id
 */
export async function getUser(userId: string) {
  const user = await sql`SELECT * FROM users WHERE id IS ${userId};`;

  if (!user) {
    console.warn(`ERROR: User not found`);
    return null;
  }

  return NextResponse.json({user}, {status: 200})
}

export function getRandom<T>(array: T[], seed?: string): T {
  const index = seed
    ? Math.abs(hashCode(seed)) % array.length
    : Math.floor(Math.random() * array.length);

  return array[index];
}

function hashCode(string: string) {
  let hash = 0;

  if (string.length > 0) {
    let index = 0;

    while (index < string.length) {
      hash = ((hash << 5) - hash + string.charCodeAt(index++)) | 0;
    }
  }

  return hash;
}
