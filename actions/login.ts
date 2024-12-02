"use server";
import { signIn } from "@/auth";
import  { signInSchema } from "@/lib/zod";
import { z } from "zod";
import { AuthError } from "next-auth";
export const login = async (values: z.infer<typeof signInSchema>) => {
    const validatedFields = signInSchema.safeParse(values);
    if (!validatedFields.success) {
      throw new AuthError("Invalid credentials");
    }
    const { email, password } = validatedFields.data;
 try {
    await signIn("credentials", {
      email,
      password,
      redirectTo: "/profiles",
    });
    return { success: true };

     }
     catch (error) {
      if (error instanceof AuthError) {
        switch (error.type) {
          case "CredentialsSignin":
            return { error: "Invalid credentials" };
        
          default:
            return { error: "Something went wrong" };
        }
      }
      throw error;
     }
  };