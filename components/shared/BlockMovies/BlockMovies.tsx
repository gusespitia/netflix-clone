import { BlockMoviesProps } from "./BlockMovies.types";
import { CarouselMovie } from "./CarouselMovie";

export function BlockMovies(props: BlockMoviesProps) {
  const { title, movies, isMyList } = props;

  if (!movies || movies.length === 0) return null;

  return (
    <div className="relative -top-14 bg-[#171717] px-[4%] overflow-hidden">
      <h3 className="mb-3 font-semibold text-2xl">{title}</h3>
      <CarouselMovie movies={movies} isMyList={isMyList} />
    </div>
  );
}
