import Image from "next/image";
import { TrendingMoviesProps } from "./TrendingMovies.types";
import { InfoExtraFilm } from "./InfoExtraFilm";
import Link from "next/link";

export function TrendingMovies(props: TrendingMoviesProps) {
  const { movies } = props;

  return (
    <div className="pt-11 md:pt-0 md:-top-24 lg:-top-28 relative px-[4%]">
      <h3 className="text-2xl font-semibold mb-3">
        Las series más populares hoy en este país: España
      </h3>

      <div>
        <div className="grid sm:grid-cols-2 md:grid-cols-5 gap-4">
          {movies.map((movie) => (
            <div
              key={movie.id}
              className="cursor-pointer transition delay-300 hover:h-[14vh] group relative"
            >
              <Link href={`/movie/${movie.id}`}>
                <div
                  className="flex transition duration 
              group-hover:opacity-90 delay-300 w-full justify-center"
                >
                  <Image
                    src={`https://raw.githubusercontent.com/gusespitia/netflix-clone/refs/heads/main/data/ranking/${movie.ranking}.png`}
                    alt="Number"
                    width={116}
                    height={150}
                    className="h-auto w-auto lg:max-h-full"
                  />

                  <Image
                    src={movie.thumbnailUrl}
                    alt="Image"
                    width={116}
                    height={150}
                    className="h-auto w-auto md:max-h-[180px] lg:max-h-full"
                  />
                </div>
              </Link>
              <InfoExtraFilm movie={movie} />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
