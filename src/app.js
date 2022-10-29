import { Hono } from 'hono'
import template from "./pages/index.marko"

const app = new Hono();

app.get('/', (c) => {
  return new Response(
    template.stream(c), {
      status: 200,
      headers: { "content-type": "text/html;charset=UTF-8" },
    }
  )
});

export default app;