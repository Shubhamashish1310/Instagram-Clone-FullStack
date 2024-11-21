import { z} from "zod";


export const zodUserLoginSchema = z.object({
    email: z.string({message: "Email is required"}).email({message: "Invalid email format"}),
    password: z.string({message: "Password is required"}).min(5)
})