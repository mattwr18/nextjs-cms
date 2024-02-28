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
        admin BOOL DEFAULT FALSE,
        created_at TIMESTAMP DEFAULT NOW(),
        updated_at TIMESTAMP DEFAULT NOW()
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
          last_name VARCHAR(255) NOT NULL,
          email VARCHAR(255),
          telegram_chat_id BIGINT,
          created_at TIMESTAMP DEFAULT NOW(),
          updated_at TIMESTAMP DEFAULT NOW(),
          username VARCHAR(255),
          telegram_id BIGINT,
          note TEXT,
          zip_code VARCHAR(255),
          city VARCHAR(255),
          phone VARCHAR(255),
          deactivated_at TIMESTAMP,
          threema_id VARCHAR(255),
          data_processing_consented_at TIMESTAMP,
          telegram_onboarding_token VARCHAR(255),
          signal_phone_number VARCHAR(255),
          signal_onboarding_completed_at TIMESTAMP,
          additional_email VARCHAR(255),
          additional_consent_given_at TIMESTAMP,
          organization_id UUID,
          whats_app_phone_number VARCHAR(255),
          whats_app_message_template_responded_at TIMESTAMP,
          deactivated_by_user_id UUID,
          deactivated_by_admin BOOLEAN DEFAULT FALSE,
          whats_app_message_template_sent_at TIMESTAMP,
          unsubscribed_at TIMESTAMP
        );
      `;

    console.log(`Created "contributors" table`);

    // Insert data into the "contributors" table
    const insertedContributors = await Promise.all(
      contributors.map(async (contributor) => {
        return client.sql`
          INSERT INTO contributors (id, first_name, last_name, email,
            telegram_chat_id, username, telegram_id, note,
            zip_code, city, phone, deactivated_at,
            threema_id, data_processing_consented_at, telegram_onboarding_token, signal_phone_number,
            signal_onboarding_completed_at, additional_email, additional_consent_given_at, organization_id,
            whats_app_phone_number, whats_app_message_template_responded_at, deactivated_by_user_id,
            whats_app_message_template_sent_at, unsubscribed_at)
          VALUES (${contributor.id}, ${contributor.first_name}, ${contributor.last_name}, ${contributor.email},
                  ${contributor.telegram_chat_id}, ${contributor.username}, ${contributor.telegram_id}, ${contributor.note},
                  ${contributor.zip_code}, ${contributor.city}, ${contributor.phone}, ${contributor.deactivated_at},
                  ${contributor.threema_id}, ${contributor.data_processing_consented_at}, ${contributor.telegram_onboarding_token}, ${contributor.signal_phone_number},
                  ${contributor.signal_onboarding_completed_at}, ${contributor.additional_email}, ${contributor.additional_consent_given_at}, ${contributor.organization_id},
                  ${contributor.whats_app_phone_number}, ${contributor.whats_app_message_template_responded_at}, ${contributor.deactivated_by_user_id},
                  ${contributor.whats_app_message_template_sent_at}, ${contributor.unsubscribed_at})
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
          text VARCHAR(1600),
          created_at TIMESTAMP DEFAULT NOW(),
          updated_at TIMESTAMP DEFAULT NOW(),
          user_id UUID,
          schedule_send_for TIMESTAMP,
          broacasted_at TIMESTAMP
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
