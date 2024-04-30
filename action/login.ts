import { LoginSchema } from "@/schemas";
import { error } from "console";
import { signIn } from "next-auth/react";
import * as z from "zod";

export const Login = async(values: z.infer<typeof LoginSchema>) => {
    const validatedFields = LoginSchema.safeParse(values);

    if(!validatedFields.success) {
        return { error: "Invalid Fields"}
    }


    const { email, password } = validatedFields.data;

    try {
        await signIn("credentials", {
            email,
            password
        })
    } catch (error) {
        console.log(error);
    }
}