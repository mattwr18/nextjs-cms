const { db } = require('@vercel/postgres');
const {
  users,
  contributors,
  requests,
} = require('../app/lib/placeholder-data.js');
const bcrypt = require('bcrypt');

async function seedUsers(client) {
  try {
    await client.sql`CREATE EXTENSION IF NOT EXISTS "uuid-ossp"`;
    // Create the "users" table if it doesn't exist
    const createTable = await client.sql`
      CREATE TABLE IF NOT EXISTS users (
        id UUID DEFAULT uuid_generate_v4() PRIMARY KEY,
        first_name VARCHAR(255) NOT NULL,
        last_name VARCHAR(255) NOT NULL,
        email TEXT NOT NULL UNIQUE,
        password TEXT NOT NULL,
        admin BOOL NOT NULL DEFAULT FALSE
      );
    `;

    console.log(`Created "users" table`);

    // Insert data into the "users" table
    const insertedUsers = await Promise.all(
      users.map(async (user) => {
        const hashedPassword = await bcrypt.hash(user.password, 10);
        return client.sql`
        INSERT INTO users (id, first_name, last_name, email, password, admin)
        VALUES (${user.id}, ${user.first_name}, ${user.last_name}, ${user.email}, ${hashedPassword}, ${user.admin})
        ON CONFLICT (email) DO NOTHING;
      `;
      }),
    );

    console.log(`Seeded ${insertedUsers.length} users`);

    return {
      createTable,
      users: insertedUsers,
    };
  } catch (error) {
    console.error('Error seeding users:', error);
    throw error;
  }
}

async function seedContributors(client) {
  try {
    await client.sql`CREATE EXTENSION IF NOT EXISTS "uuid-ossp"`;
    // Create the "contributors" table if it doesn't exist
    const createTable = await client.sql`
        CREATE TABLE IF NOT EXISTS contributors (
          id UUID DEFAULT uuid_generate_v4() PRIMARY KEY,
          first_name VARCHAR(255) NOT NULL,
          last_name VARCHAR(255) NOT NULL
        );
      `;

    console.log(`Created "contributors" table`);

    // Insert data into the "contributors" table
    const insertedContributors = await Promise.all(
      contributors.map(async (contributor) => {
        return client.sql`
          INSERT INTO contributors (id, first_name, last_name)
          VALUES (${contributor.id}, ${contributor.first_name}, ${contributor.last_name})
          ON CONFLICT (id) DO NOTHING;
        `;
      }),
    );

    console.log(`Seeded ${insertedContributors.length} contributors`);

    return {
      createTable,
      users: insertedContributors,
    };
  } catch (error) {
    console.error('Error seeding contributors:', error);
    throw error;
  }
}

async function seedRequests(client) {
  try {
    await client.sql`CREATE EXTENSION IF NOT EXISTS "uuid-ossp"`;
    // Create the "requests" table if it doesn't exist
    const createTable = await client.sql`
        CREATE TABLE IF NOT EXISTS requests (
          id UUID DEFAULT uuid_generate_v4() PRIMARY KEY,
          title VARCHAR(255) NOT NULL,
          text VARCHAR(1600) NOT NULL
        );
      `;

    console.log(`Created "requests" table`);

    // Insert data into the "requests" table
    const insertedRequests = await Promise.all(
      requests.map(async (request) => {
        return client.sql`
          INSERT INTO requests (id, title, text)
          VALUES (${request.id}, ${request.title}, ${request.text})
          ON CONFLICT (id) DO NOTHING;
        `;
      }),
    );

    console.log(`Seeded ${insertedRequests.length} requests`);

    return {
      createTable,
      users: insertedRequests,
    };
  } catch (error) {
    console.error('Error seeding requests:', error);
    throw error;
  }
}

async function main() {
  const client = await db.connect();

  await seedUsers(client);
  await seedContributors(client);
  await seedRequests(client);

  await client.end();
}

main().catch((err) => {
  console.error(
    'An error occurred while attempting to seed the database:',
    err,
  );
});
