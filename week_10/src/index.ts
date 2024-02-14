import { Client } from "pg";

async function insertData() {
  const client = new Client({
    host: 'localhost',
    port: 5432,
    database: 'postgres',
    user: 'postgres',
    password: 'mysecretpassword',
  })
  try {
    await client.connect();
    const insertQuery = "INSERT INTO user (username, email, password) VALUES ('username2', 'user3@example.com', 'user_password');"
    const res = await client.query(insertQuery);
    console.log("Insertion success:", res);
  } catch (err) {
    console.error("Error during Insertion:", err);
  } finally {
    await client.end();
  }
}

insertData();
