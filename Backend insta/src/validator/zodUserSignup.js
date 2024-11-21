import {z} from 'zod';

export const zodUserSignupSchema = z.object({
    username: z.string({message: "UserName is required"}).min(3),
    email: z.string({message: "Email is required"}).email({message: "Invalid email format"}),
    password: z.string({message: "Password is required"}).min(5)
})