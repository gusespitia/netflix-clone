"use client";

import { Button } from "@/components/ui/button";
import { useState } from "react";
const Terms = () => {
  const [showExtraTerms, setShowExtraTerms] = useState(false);
  return (
    <div className="mt-4 mb-10 max-w-72 text-gray-600 text-xs">
      <div className="mb-4">
        <span>
          Esta Página utiliza Google reCaptcha para verificar que eres un
          humano. Si no es un humano, no puedes ingresar.
        </span>
        <Button
          variant="ghost"
          onClick={() => setShowExtraTerms(!showExtraTerms)}
          className="hover:bg-transparent opacity-1 ml-1 p-0 h-fit text-[#0071eb]"
        >
          Más Información
        </Button>
      </div>
      
        {showExtraTerms && (
          <div className="h-28">
          <p>
            La información recopilada por Google reCaptcha está sujeta a la Política de privacidad y las Condiciones de uso de Google, y se utiliza para proporcionar, mantener y mejorar el servicio de reCatcha. Para más información, consulta la Política de privacidad y las Condiciones de uso de Google.
          </p>
          </div>
        )}
   
    </div>
  );
};

export default Terms;
