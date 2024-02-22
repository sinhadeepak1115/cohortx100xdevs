import { console } from '@cloudflare/workers-types';
import { Hono } from 'hono'

const app = new Hono()

app.get('/', async (c) => {
  const body = await c.req.json()
  console.log(body);
  console.log(c.req.header("Authoriztion"));
  console.log(c.req.query("params"));
  return c.text('Hello Hono!')
})

export default app
