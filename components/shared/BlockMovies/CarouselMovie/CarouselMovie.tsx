/* eslint-disable @typescript-eslint/no-unused-vars */
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
      <CarouselContent className="gap-4 -ml-1 overflow-inherit">
        {movies.map((movie) => (
          <CarouselItem
            key={movie.id}
            className="relative py-14 pl-1 transition delay-300 group md:basis-1/2 lg:basis-1/5"
          >
            <Card className="relative transition delay-300 cursor-pointer group">
              <CardContent className="relative flex justify-center items-center bg-zinc-900 p-6 border-none rounded-md aspect-video">
                <Image
                  src={movie.thumbnailUrl}
                  alt="Image"
                  fill
                  sizes="(max-width: 768px) 100vw, 50vw"
                  className="rounded-sm"
                  priority
                  onClick={() => handleClick(movie.id)}
                />
                <div
                  className={`absolute top-0 transition-all duration-300 z-50 w-full bg-zinc-900 rounded-md 
                    ${
                      isMobile
                        ? activeMovieId === movie.id
                          ? "opacity-100 scale-105 -translate-y-[8vw]"
                          : "opacity-0 scale-0"
                        : "opacity-0 scale-0 group-hover:scale-105 group-hover:-translate-y-[4vw] group-hover:opacity-100"
                    }
                  `}
                  // Hacer clic sobre la imagen
                >
                  <Image
                    src={movie.thumbnailUrl}
                    alt="Movie"
                    width={300}
                    height={260}
                    className="rounded-md w-auto h-auto md:max-h-[180px] lg:max-h-full"
                  />
                  <div className="shadow-lg p-2">
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
