import { z } from "zod";

const formSchema = z.object({
    email: z.string().min(2, {
      message: "email is too short",
    }),
    password: z.string().min(2, {
      message: "password is too short",
    }),
    repeatPassword: z.string(),
  }).refine((data) => data.password === data.repeatPassword, {
    message: "passwords don't match",
    path: ["repeatPassword"],
  });

export default formSchema;