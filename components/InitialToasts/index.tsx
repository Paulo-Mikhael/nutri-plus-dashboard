"use client";

import { useToast } from "@/hooks/use-toast";
import { useEffect, useRef } from "react";

export function InitialToasts() {
  const { toast } = useToast();
  const buttonRef = useRef<HTMLButtonElement | null>(null);

  useEffect(() => {
    buttonRef.current?.click();
  }, []);

  return (
    <button
      hidden
      ref={buttonRef}
      type="button"
      onClick={() => {
        toast({
          title: "Personalize seu Dashboard!",
          description:
            "Calcule seu IMC e selecione o nível de atividade física em que você se enquadra para obter suas informações nutricionais.",
        });
      }}
    >
      Enviar
    </button>
  );
}
