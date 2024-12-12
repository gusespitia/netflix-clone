import { Info, Play } from "lucide-react";

import { Button } from "@/components/ui/button";

export function SliderVideo() {
  
  return (
    <div className="relative w-full-[80vw] md:h-[56.25vw] lg:h-[40vw]">
      <video
        autoPlay
        loop
        muted
        className="brightness-50 w-full h-[80vw] md:h-[56.25vw] lg:h-[45vw] object-fill"
        src="/videos/video-trailer-test.mp4"
      />
      <div
        className="top-0 -bottom-6 md:bottom-[36%] md:left-[4%] z-20 absolute flex flex-col justify-end px-4 md:px-0 w-full md:w-[36%]"
      >
        <div className="pt-24 md:pt-0">
          <h2 className="drop-shadow-xl font-bold text-2xl md:text-4xl lg:text-6xl">
            GUSFLIX
          </h2>
          <p className="mt-2 max-w-md text-xs md:text-base">
            Aprende a crear desde cero un clon de Netflix con todas sus
            funciones clave, desde la gestión de usuarios hasta la reproducción
            de videos, mientras descubres los secretos detrás de una plataforma
            de streaming exitosa.
          </p>
          <div className="flex md:flex-row flex-col gap-4 mt-5">
            <Button size="lg" variant="secondary">
              <Play className="mr-2 w-6 h-6 fill-black" />
              Reproducir
            </Button>
            <Button size="lg" className="bg-gray-500/50 hover:bg-gray-500/40">
              <Info className="mr-2 w-6 h-6" />
              Más información
            </Button>
          </div>
        </div>
      </div>

      <div
        className="top-auto -bottom-16 absolute bg-transparent bg-gradient-video bg-contain bg-no-repeat opacity-100 w-full h-[14.7vw]"
      />
    </div>
  );
}
