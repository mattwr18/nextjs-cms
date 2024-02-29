import { sql } from '@vercel/postgres';
import { User, Contributor, Request } from './definitions';
import { unstable_noStore as noStore } from 'next/cache';

export async function fetchContributors(state?: string) {
  noStore();

  try {
    let query = `SELECT * FROM contributors WHERE deactivated_at IS NULL AND unsubscribed_at IS NULL`;

    if (state == 'inactive') {
      query = `SELECT * FROM contributors WHERE deactivated_at IS NOT NULL`;
    }

    if (state == 'unsubscribed') {
      query = `SELECT * FROM contributors WHERE unsubscribed_at IS NOT NULL`;
    }

    console.log('Fetching contributors...');
    const { rows } = await sql.query(query);
    console.log(`Fetched ${rows.length} contributors`);
    return rows;
  } catch (error) {
    console.error('Database error:', error);
    throw new Error('Falied to fetch contributors');
  }
}

export async function fetchRequests() {
  noStore();

  try {
    console.log('Fetching requests...');
    const { rows } = await sql<Request>`SELECT * FROM requests`;
    return rows;
  } catch (error) {
    console.error('Database error:', error);
    throw new Error('Falied to fetch requests');
  }
}

export async function getUser(email: string) {
  try {
    const { rows } = await sql`SELECT * FROM users WHERE email=${email}`;
    return rows[0] as User;
  } catch (error) {
    console.error('Database error:', error);
    throw new Error('Falied to fetch user.');
  }
}

export async function fetchContributorById(id: string) {
  noStore();

  try {
    const { rows } =
      await sql<Contributor>`SELECT * FROM contributors WHERE contributors.id = ${id}`;
    return rows[0];
  } catch (error) {
    console.error('Database error:', error);
    throw new Error('Falied to fetch contributor.');
  }
}
