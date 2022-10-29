import { Hono } from 'hono'
import { serveStatic } from 'hono/serve-static'
import app from './app.js'

const worker = new Hono()

worker.route('/', app);

worker.use('/*', serveStatic({ root: './' }));

worker.fire();