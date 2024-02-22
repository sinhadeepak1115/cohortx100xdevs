import { Hono } from 'hono';

const app = new Hono();

app.get('/', async (c) => {
  return c.text('Hello Hono! This is a GET request.');
});

app.post('/', async (c) => {
  const body = await c.req.json();
  console.log(body);
  console.log(c.req.header("Authorization"));
  console.log(c.req.query("param"));
  return c.text('Hello Hono! This is a POST request.');
});

export default app;

