"use client";

import { Button } from "@/components/ui/button";

import { ActionsButtonsProps } from "./ActionsButtons.types";
import { ChevronDown, Play, ThumbsUp, X } from "lucide-react";
import { useRouter } from "next/navigation";
import { useLovedFilms } from "@/hooks/use-loved-films";

export function ActionsButtons(props: ActionsButtonsProps) {
  const { movieId, movie, isMyList } = props;
  const { addLovedFilm, removeLovedItem } = useLovedFilms();

  const router = useRouter();

  const onPlayButton = () => {
    router.push(`/movie/${movieId}`);
  };

  const onAddToMyList = () => {
    addLovedFilm(movie);
  };

  const onRemoveFromMyList = () => {
    removeLovedItem(movieId);
  };

  return (
    <div className="flex justify-between mb-5">
      <div className="flex gap-2">
        <Button
          size="icon"
          variant={"ghost"}
          className="flex justify-center items-center bg-slate-50 hover:bg-red-600 rounded-full w-7 h-7"
          onClick={() => onPlayButton()}
        >
          <Play className="w-3 h-3 text-zinc-900 fill-zinc-900" />
        </Button>

        {isMyList ? (
          <Button
            size="icon"
            variant="ghost"
            className="flex justify-center items-center border-2 border-gray-400 bg-zinc-900 rounded-full w-7 h-7"
            onClick={() => onRemoveFromMyList()}
          >
            <X
              width={10}
              height={10}
              className="w-3 h-3 text-slate-50 fill-zinc-900"
            />
          </Button>
        ) : (
          <Button
            size="icon"
            variant="ghost"
            className="flex justify-center items-center border-2 border-gray-400 bg-zinc-900 rounded-full w-7 h-7"
            onClick={() => onAddToMyList()}
          >
            <ThumbsUp className="w-3 h-3 text-slate-50 fill-zinc-900" />
          </Button>
        )}
      </div>
      <Button
        size="icon"
        variant="ghost"
        className="flex justify-center items-center border-2 border-gray-400 hover:border-slate-50 bg-zinc-900 hover:bg-transparent rounded-full w-7 h-7"
      >
        <ChevronDown className="w-3 h-3 text-slate-50" width={10} height={10} />
      </Button>
    </div>
  );
}
