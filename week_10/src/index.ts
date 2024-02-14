
import { Client } from "pg";

async function insertData(username: string, email: string, password: string) {
  const client = new Client({
    connectionString: "postgresql://postgres:mysecretpassword@localhost/postgres"
  });

  try {
    await client.connect();
    const insertQuery = "INSERT INTO users (username, email, password) VALUES ($1,$2,$3)";
    const values = [username, email, password];

    const res = await client.query(insertQuery, values);
    console.log('Insertion success:', res); // Output insertion result
  } catch (err) {
    console.error('Error during the insertion:', err);
  } finally {
    await client.end(); // Close the client connection
  }
}

insertData('username1', 'user5@sample.com', 'user_password').catch(console.error);

