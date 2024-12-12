import { auth } from "@/auth";
import { redirect } from "next/navigation";
import Link from "next/link";
import { Checkbox } from "@/components/ui/checkbox";
import LoginForm from "./LoginForm/LoginForm";
import Terms from "../components/Terms/Terms";

export default async function LoginPage() {
  const session = await auth();

  if (session) {
    redirect("/");
  }

  return (
    <section className="text-sm">
      <p className="mb-6 font-bold text-2xl text-left">Iniciar sesión</p>
      <LoginForm />
      <div className="mt-4 text-center">
        <Link href="/" className="hover:opacity-70 text- hover:underline">
          ¿Has olvidado tu contraseña?
        </Link>
      </div>

      <div className="flex items-center space-x-2 mt-4">
        <Checkbox id="terms" className="border-white" />
        <label className="peer-disabled:opacity-70 peer-disabled:cursor-not-allowed">
          Recuérdame
        </label>
      </div>

      <div className="flex items-center gap-1 mt-4">
        <p className="opacity-70 text-white text-xs">¿Todavía sin Netflix?</p>
        <Link href="/register" className="opacity-1 text-white">
          Suscríbete ya
        </Link>
      </div>

      <Terms />
    </section>
  );
}
