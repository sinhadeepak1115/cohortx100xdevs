
import { Client } from "pg";

async function insertData() {
  const client = new Client({
    connectionString: "postgresql://postgres:mysecretpassword@localhost/postgres"
  });

  try {
    await client.connect(); // Ensure client connection is established

    // Create the "users" table if it doesn't exist
    const createTableQuery = `
      CREATE TABLE IF NOT EXISTS users (
        id SERIAL PRIMARY KEY,
        username VARCHAR(255) NOT NULL,
        email VARCHAR(255) NOT NULL,
        password VARCHAR(255) NOT NULL
      );
    `;
    await client.query(createTableQuery);

    // Insert data into the "users" table
    const insertQuery = `
      INSERT INTO users (username, email, password) 
      VALUES ('username2', 'user3@example.com', 'user_password');
    `;
    const res = await client.query(insertQuery);
    console.log('Insertion success:', res); // Output insertion result
  } catch (err) {
    console.error('Error during the insertion:', err);
  } finally {
    await client.end(); // Close the client connection
  }
}

insertData();

