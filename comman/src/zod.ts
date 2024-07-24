import {z} from "zod"

export const signupInput = z.object({
    username:z.string().email(),
    password:z.string().min(6),
    name:z.string().min(2),
})

export const signinInput = z.object({
    username:z.string().email(),
    password:z.string().min(6),
})

export const creatBlogInput = z.object({
    title:z.string(),
    content:z.string(),
})

export const updateBlogInput = z.object({
    id:z.number(),
    title:z.string(),
    content:z.string(),
})


export type SignupInput = z.infer<typeof signupInput>
export type SigninInput = z.infer<typeof signinInput>
export type CreatBlogInput = z.infer<typeof creatBlogInput>
export type UpdateBlogInput = z.infer<typeof updateBlogInput>



