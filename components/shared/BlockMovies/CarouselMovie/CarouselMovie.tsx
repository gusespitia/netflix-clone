import { useState, useEffect } from "react";
import Image from "next/image";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";
import { Card, CardContent } from "@/components/ui/card";
import { ActionsButtons } from "./ActionsButtons";
import { ChaptersInfo } from "./ChaptersInfo";
import { CarouselMovieProps } from "./CarouselMovie.types";
import { FilmGenres } from "./FilmGenres";

export function CarouselMovie(props: CarouselMovieProps) {
  const { movies, isMyList } = props;

  // Estado para detectar si es un dispositivo táctil
  const [isTouchDevice, setIsTouchDevice] = useState(false);
  const [isMobile, setIsMobile] = useState(false); // Estado para detectar si la pantalla es móvil
  const [activeMovieId, setActiveMovieId] = useState<string | null>(null); // Estado para el control de video

  useEffect(() => {
    // Detectar si el dispositivo es táctil
    setIsTouchDevice("ontouchstart" in window || navigator.maxTouchPoints > 0);

    // Detectar el tamaño de la pantalla (móvil o escritorio)
    const handleResize = () => {
      setIsMobile(window.innerWidth <= 768); // Establecer como móvil si el ancho es <= 768px
    };

    // Llamar a handleResize cuando el componente se monta y cada vez que se redimensiona la ventana
    handleResize();
    window.addEventListener("resize", handleResize);

    // Limpiar el evento al desmontar el componente
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  // Función para manejar el clic en la imagen
  const handleClick = (movieId: string) => {
    if (isMobile) {
      setActiveMovieId(activeMovieId === movieId ? null : movieId);
    }
  };

  return (
    <Carousel className="w-full">
      <CarouselContent className="-ml-1 gap-2 overflow-inherit">
        {movies.map((movie) => (
          <CarouselItem
            key={movie.id}
            className="pl-1 md:basis-1/2 lg:basis-1/5 transition delay-300 group relative py-16"
          >
            <Card className="cursor-pointer transition delay-300 group relative">
              <CardContent className="flex aspect-video items-center justify-center p-6 relative border-none rounded-md bg-zinc-900">
                <Image
                  src={movie.thumbnailUrl}
                  alt="Image"
                  fill
                  sizes="(max-width: 768px) 100vw, 50vw"
                  className="rounded-md"
                  priority
                  onClick={() => handleClick(movie.id)}
                />
                <div
                  className={`absolute top-0 transition-all duration-300 z-50 w-full bg-zinc-900 rounded-lg 
                    ${
                      isMobile
                        ? activeMovieId === movie.id
                          ? "opacity-100 scale-105 -translate-y-[8vw]"
                          : "opacity-0 scale-0"
                        : "opacity-0 scale-0 group-hover:scale-105 group-hover:-translate-y-[8vw] group-hover:opacity-100"
                    }
                  `}
                  // Hacer clic sobre la imagen
                >
                  <Image
                    src={movie.thumbnailUrl}
                    alt="Movie"
                    width={200}
                    height={200}
                    className="cursor-pointer object-cover transition-all duration-300 shadow-xl w-full rounded-t-lg"
                  />
                  <div className="p-2 shadow-lg">
                    <ActionsButtons
                      movieId={movie.id}
                      movie={movie}
                      isMyList={isMyList}
                    />

                    <ChaptersInfo age={movie.age} duration={movie.duration} />

                    <FilmGenres genres={movie.genre} />
                  </div>
                </div>
              </CardContent>
            </Card>
          </CarouselItem>
        ))}
      </CarouselContent>
      <CarouselPrevious />
      <CarouselNext />
    </Carousel>
  );
}
