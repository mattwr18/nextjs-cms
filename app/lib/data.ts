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

export async function fetchActiveContributorsCount() {
  try {
    const { rows } =
      await sql`SELECT COUNT(*) FROM contributors WHERE deactivated_at IS NULL AND unsubscribed_at IS NULL`;
    return rows[0].count;
  } catch (error) {
    console.log('Database error:', error);
    throw new Error('Falied to fetch active contributors count');
  }
}

export async function fetchInactiveContributorsCount() {
  try {
    const { rows } =
      await sql`SELECT COUNT(*) FROM contributors WHERE deactivated_at IS NOT NULL`;
    return rows[0].count;
  } catch (error) {
    console.log('Database error:', error);
    throw new Error('Falied to fetch inactive contributors count');
  }
}

export async function fetchUnsubscribedContributorsCount() {
  try {
    const { rows } =
      await sql`SELECT COUNT(*) FROM contributors WHERE unsubscribed_at IS NOT NULL`;
    return rows[0].count;
  } catch (error) {
    console.log('Database error:', error);
    throw new Error('Falied to fetch active contributors count');
  }
}

export async function fetchRequests(filter?: string) {
  noStore();

  try {
    console.log('Fetching requests...');
    let query = `SELECT * FROM requests WHERE broadcasted_at IS NOT NULL`;

    if (filter == 'planned') {
      query = `SELECT * FROM requests WHERE schedule_send_for IS NOT NULL AND (schedule_send_for > NOW())`;
    }
    const { rows } = await sql.query(query);
    console.log(`Fetched ${rows.length} requests`);
    return rows;
  } catch (error) {
    console.error('Database error:', error);
    throw new Error('Falied to fetch requests');
  }
}

export async function fetchSentRequestsCount() {
  try {
    const { rows } =
      await sql`SELECT COUNT(*) FROM requests WHERE broadcasted_at IS NOT NULL`;
    console.log(`Fetched ${rows[0].count} sent requests`);
    return rows[0].count;
  } catch (error) {
    console.error('Database error:', error);
    throw new Error('Falied to fetch sent requests count');
  }
}

export async function fetchPlannedRequestsCount() {
  try {
    const { rows } =
      await sql`SELECT COUNT(*) FROM requests WHERE schedule_send_for IS NOT NULL AND (schedule_send_for > NOW())`;
    console.log(`Fetched ${rows[0].count} planned requests`);

    return rows[0].count;
  } catch (error) {
    console.error('Database error:', error);
    throw new Error('Falied to fetch planned requests count');
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

export async function fetchRequestById(id: string) {
  noStore();

  try {
    const { rows } =
      await sql<Request>`SELECT * FROM requests WHERE requests.id = ${id}`;
    return rows[0];
  } catch (error) {
    console.error('Database error:', error);
    throw new Error('Falied to fetch request.');
  }
}
