import { Client } from 'pg'

const client = new Client({
  connectionString: "postgresql://postgres:mysecretpassword@localhost:5432/postgres"
})

async function createuserstable() {
  await client.connect()
  const result = await client.query(`
create table users3 (
            id serial primary key,
            username varchar(50) unique not null,
            email varchar(255) unique not null,
            password varchar(255) not null,
            created_at timestamp with time zone default current_timestamp
        );
`)
  console.log(result);
}
createuserstable()

