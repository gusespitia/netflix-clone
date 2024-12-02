import { db } from "@/lib/db";
import { auth } from "@/auth";
import { redirect } from "next/navigation";
import Profiles from "./components/Profiles/Profiles";

export default async function ProfilePage() {
  const session = await auth();
  if (!session?.user) {
    redirect("/login");
  }
  const userNetflix= await db.userNetflix.findMany({
    where: {
      userId: session.user.id
    }
  });


  return <div className="h-full flex flex-col justify-center items-center bg-zinc-900">
    <div className="">
  
      <h1 className="text-5xl mb-8 font-bold">Quien eres? elije tu perfil</h1>
   <Profiles users={userNetflix}/>
   </div>
  </div>;
}
