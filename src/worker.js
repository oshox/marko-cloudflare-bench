import { Hono } from 'hono'
import { serveStatic } from 'hono/serve-static'
import template from "./index.marko"

const worker = new Hono()

worker.get('/', (c) => {
    return new Response(
      template.stream(), {
        status: 200,
        headers: { "content-type": "text/html;charset=UTF-8" },
      }
    )
  });

worker.use('/*', serveStatic({ root: './' }));

worker.fire();