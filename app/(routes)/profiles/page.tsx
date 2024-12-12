import { db } from "@/lib/db";
import { auth } from "@/auth";
import { redirect } from "next/navigation";
import Profiles from "./components/Profiles/Profiles";

export default async function ProfilePage() {
  const session = await auth();
  if (!session?.user) {
    redirect("/login");
  }
  const userNetflix = await db.userNetflix.findMany({
    where: {
      userId: session.user.id,
    },
  });

  return (
    <div className="flex flex-col justify-center items-center bg-zinc-900 min-h-screen text-white">
      <div className="mx-auto max-w-lg text-center">
        <h1 className="mb-8 font-bold text-2xl tracking-tight">
          ¿Quién eres? <span className="block">Elige tu perfil</span>
        </h1>
        <Profiles users={userNetflix} />
      </div>
    </div>
  );
}
