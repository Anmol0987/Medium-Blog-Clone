import { Hono } from "hono";
import { PrismaClient } from '@prisma/client/edge'
import { withAccelerate } from '@prisma/extension-accelerate'
import { sign } from 'hono/jwt'
import { signupInput,signinInput } from "@anmolmittal-npm/medium-blog-comman";
export const userRouter = new Hono<{
    Bindings: {
        DATABASE_URL: string
        JWT_SECRET: string
    }
}>()


userRouter.post('/signup', async (c) => {
    const body = await c.req.json()
    const prisma = new PrismaClient({
        datasourceUrl: c.env.DATABASE_URL,
    }).$extends(withAccelerate())

    const {success} = signupInput.safeParse(body)
    if (!success) {
		c.status(400);
		return c.json({ error: "invalid input" });
	}

    try {
        const user = await prisma.user.create({
            data: {
                username: body.username,
                password: body.password,
                name: body.name
            },
        })
        const jwt = await sign({ id: user.id }, c.env.JWT_SECRET)
        return c.text(jwt)
    }
    catch (error) {

        c.status(401)
        return c.text("Invalid email or password")
    }


})



userRouter.post('/signin', async (c) => {
    const prisma = new PrismaClient({
        datasourceUrl: c.env.DATABASE_URL,
    }).$extends(withAccelerate())

    const body = await c.req.json()
    const {success} = signinInput.safeParse(body)
    if (!success) {
        c.status(400);
        return c.json({ error: "invalid input" });
    }
    try {

        const user = await prisma.user.findFirst({
          where: {
            username: body.username,
            password: body.password
            }
        })

        if (!user) {
            c.status(403)
            return c.json({ message: "Invalid email or password" })
        }

        const jwt = await sign({ id: user.id }, c.env.JWT_SECRET)
        return c.json({ jwt })
    }
    catch (e) {
        return c.text("Invalid email or password")
    }
})

