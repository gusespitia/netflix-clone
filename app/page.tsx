
import { redirect } from "next/navigation";
import { db } from "@/lib/db";
import Navbar from "@/components/shared/Navbar/Navbar";
import { SliderVideo } from "./(routes)/(home)/components/SliderVideo";
import { auth } from "@/auth";
import { TrendingMovies } from "./(routes)/(home)/components/TrendingMovies";


export default async function Home() {
  const session = await auth();
  if (!session || !session?.user || !session.user.id) {
    redirect("/login");
  }
  const usersNetflix = await db.userNetflix.findMany({
    where: {
      userId: session.user.id
    }
  })
  const movies = await db.movie.findMany({});
  const trendingMovies = await db.popularMovie.findMany({
    orderBy: {
      ranking: "asc"
    }
  });
  console.log(trendingMovies);
  console.log(movies);
  return (
    <div className="relative bg-zinc-900">
      <Navbar users={usersNetflix} />
      <SliderVideo />
      <TrendingMovies movies={trendingMovies} />
    </div>
  );
}
