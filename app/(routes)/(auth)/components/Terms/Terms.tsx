"use client";

import { Button } from "@/components/ui/button";
import { useState } from "react";
const Terms = () => {
  const [showExtraTerms, setShowExtraTerms] = useState(false);
  return (
    <div className="mt-4 text-xs mb-10 text-gray-600 max-w-72">
      <div className="mb-5">
        <span>
          Esta Página utiliza Google reCaptcha para verificar que eres un
          humano. Si no es un humano, no puedes ingresar.
        </span>
        <Button
          variant="ghost"
          onClick={() => setShowExtraTerms(!showExtraTerms)}
          className="opacity-1 text-[#0071eb] hover:bg-transparent p-0 ml-1 h-fit"
        >
          Más Información
        </Button>
      </div>
      <div className="h-28">
        {showExtraTerms && (
          <p>
            La información recopilada por Google reCaptcha está sujeta a la Política de privacidad y las Condiciones de uso de Google, y se utiliza para proporcionar, mantener y mejorar el servicio de reCatcha. Para más información, consulta la Política de privacidad y las Condiciones de uso de Google.
          </p>
        )}
      </div>
    </div>
  );
};

export default Terms;
