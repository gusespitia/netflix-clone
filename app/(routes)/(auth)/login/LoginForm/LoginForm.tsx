"use client";

import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { formSchema } from "./LoginForm.form";
import { useState } from "react";
import { z } from "zod";

import { Button } from "@/components/ui/button";
import {
  Form,
  FormControl,
  FormDescription,
  FormField,
  FormItem,
  FormMessage,
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { login } from "@/actions/login";
import { useRouter } from "next/navigation";
import FormError from "./FormError/FormError";
import { toast } from "@/hooks/use-toast";

const LoginForm = () => {
  const router = useRouter();
  // declarar errores
  const [errors, setErrors] = useState<string | undefined>("");
  // 1. Define your form.
  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      email: "",
      password: "",
    },
  });

  // 2. Define a submit handler.

  const onSubmit = async (values: z.infer<typeof formSchema>) => {
    try {
      login(values).then((data) => {
        setErrors(data?.error);
        if (data?.success) {
          toast({
            title: "Login se ha realizado con éxito",
          });
          router.push("/profiles");
        }
      });
    } catch (error) {
      console.log(error);
    }
  };
  return (
    <Form {...form}>
      <form
        onSubmit={form.handleSubmit(onSubmit)}
        className="w-full gap-4 flex flex-col"
      >
        <FormField
          control={form.control}
          name="email"
          render={({ field }) => (
            <FormItem>
              <FormControl>
                <Input
                  placeholder="Email"
                  {...field}
                  className="h-14 text-white"
                />
              </FormControl>
              <FormDescription>This is your email address.</FormDescription>
              <FormMessage />
            </FormItem>
          )}
        />
        <FormField
          control={form.control}
          name="password"
          render={({ field }) => (
            <FormItem>
              <FormControl>
                <Input
                  type="password"
                  placeholder="Password"
                  className="h-14 text-white"
                  {...field}
                />
              </FormControl>
              <FormDescription>This is your secret password.</FormDescription>
              <FormMessage />
            </FormItem>
          )}
        />
        <FormError message={errors} />
        <Button type="submit" className="w-full bg-[#E50914]">
          Iniciar Sesion
        </Button>
      </form>
    </Form>
  );
};

export default LoginForm;
