import { cors } from "hono/cors"
import { serve } from "@hono/node-server"
import { Hono } from "hono"

const app = new Hono()

app.use(
  cors({
    origin: "*",
  })
)

app.get("/", (c) => {
  return c.text("Hello Hono!")
})

const port = 3999
console.log(`Server is running on port ${port}`)

serve({
  fetch: app.fetch,
  port,
})
