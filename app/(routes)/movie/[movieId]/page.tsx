import { db } from "@/lib/db";
import { redirect } from "next/navigation";
import NavbarFilm from "./components/NavbarFilm/NavbarFilm";
import MovieVideo from "./components/NavbarFilm/MovieVideo/MovieVideo";

export default async function MovieIdPage({
  params: rawParams,
}: {
  params: Promise<{ movieId: string }>; // Explicitly treat params as a Promise
}) {
  const params = await rawParams; // Await the params to resolve

  const movieFilm = await db.movie.findUnique({
    where: {
      id: params.movieId,
    },
  });

  const popularMovie = await db.popularMovie.findUnique({
    where: {
      id: params.movieId,
    },
  });

  if (!movieFilm && !popularMovie) {
    redirect("/");
  }

  const currentMovie = movieFilm
    ? movieFilm.movieVideo
    : popularMovie
    ? popularMovie.movieVideo
    : "";
  const titleMovie = movieFilm
    ? movieFilm.title
    : popularMovie
    ? popularMovie.title
    : "";

  return (
    <div className="h-screen w-full bg-black">
      <NavbarFilm titleMovie={titleMovie} />
      <MovieVideo currentMovie={currentMovie} />
    </div>
  );
}
