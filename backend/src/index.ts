import { Hono } from 'hono'
import { PrismaClient } from '@prisma/client/edge'
import { withAccelerate } from '@prisma/extension-accelerate'
import { decode, sign, verify } from 'hono/jwt'

const app = new Hono<{
  Bindings: {
    DATABASE_URL: string
    JWT_SECRET: string
  }
}>()

app.post('/api/v1/signup', async (c) => {

  const prisma = new PrismaClient({
    datasourceUrl: c.env.DATABASE_URL,
  }).$extends(withAccelerate())


  const body = await c.req.json()
  const user = await prisma.user.create({
    //@ts-ignore
    data: {
      email: body.email,
      password: body.password
    },
  })

  const token = await sign({ id: user.id }, c.env.JWT_SECRET)

  return c.json({ jwt: token })
})
app.post('./api/v1/sigin', async (c) => {
  const prisma = new PrismaClient({
    datasourceUrl: c.env.DATABASE_URL,
  }).$extends(withAccelerate())

  const body = await c.req.json()
  const user = await prisma.user.create({
    //@ts-ignore
    data: {
      email: body.email,
      password: body.password
    },
  })

  if(!user) {
    c.status(401)
    return c.json({ message: "Invalid email or password" })
  }

  const jwt = await sign({ id: user},c.env.JWT_SECRET)
  return c.json({ jwt })
})
app.post('./api/v1/blog', (c) => {
  return c.text('blog')
})
app.get('./api/v1/blog/:id', (c) => {
  const id = c.req.param('id')
  return c.text(`blog id: ${id}`)
})
app.put('./api/v1/blog', (c) => {
  return c.text('update blog')
})

export default app
