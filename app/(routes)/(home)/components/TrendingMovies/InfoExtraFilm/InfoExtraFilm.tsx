"use client";
import dynamic from "next/dynamic";

import { ActionsButtonsFilm } from "@/components/shared/ActionsButtonsFilm";

import { InfoExtraFilmProps } from "./InfoExtraFilm.types";

import { FilmGenres } from "@/components/shared/FilmGenres";

import { ChaptersInfo } from "@/components/shared/ChaptersInfo";

const ReactPlayer = dynamic(() => import("react-player"), { ssr: false });

export function InfoExtraFilm(props: InfoExtraFilmProps) {
  const { movie } = props;

  return (
    <div
      className="opacity-0 absolute top-0 transition-all duration-300 z-10
  invisible sm:visible delay-300 w-full bg-zinc-900 rounded-lg scale-0 
  group-hover:lg:scale-150 group-hover:md:scale-150  
  group-hover:-translate-y-[5vw]
  group-hover:opacity-100"
    >
      <div className="aspect-video">
        <ReactPlayer
          url={movie.trailerVideo}
          playing={false}
          controls
          width="100%"
          height="100%"
          config={{
            youtube: {
              playerVars: {
                origin: window.location.origin, // Asegura que el origen sea consistente
                modestbranding: 1, // Opcional: reduce la marca de YouTube
                rel: 0, // Opcional: desactiva videos relacionados
              },
            },
          }}
        />
      </div>

      <div className="p-4 shadow-lg">
        <ActionsButtonsFilm idFilm={movie.id} />

        <ChaptersInfo age={movie.age} duration={movie.duration} />

        <FilmGenres genres={movie.genre} />
      </div>
    </div>
  );
}
