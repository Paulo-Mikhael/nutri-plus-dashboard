"use client";

import { useToast } from "@/hooks/use-toast";
import { useEffect, useRef } from "react";

export function InitialToasts() {
  const { toast } = useToast();
  const buttonRef = useRef<HTMLButtonElement | null>(null);

  function showToast() {
    toast({
      title: "Personalize seu Dashboard!",
      description:
        "Calcule seu IMC e selecione o nível de atividade física em que você se enquadra para obter suas informações nutricionais.",
    });
  }

  useEffect(() => {
    buttonRef.current?.click();
  }, []);

  return (
    <button
      ref={buttonRef}
      type="button"
      onClick={() => {
        showToast();
      }}
    >
      Enviar
    </button>
  );
}
