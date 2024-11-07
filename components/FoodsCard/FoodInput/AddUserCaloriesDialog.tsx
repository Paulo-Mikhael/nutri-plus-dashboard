import { Dialog } from "@/components/Dialog";
import { Button } from "@/components/ui/button";
import type { ReactNode } from "react";

interface AddUserCaloriesDialogProps {
  children: ReactNode;
}

export function AddUserCaloriesDialog({ children }: AddUserCaloriesDialogProps) {
  return (
    <Dialog
      title="Adicionar calorias"
      description="Selecione um dia e diminua ou aumente suas calorias ingeridas neste dia."
      trigger={children}
    >
      <Button>Atualizar</Button>
    </Dialog>
  );
}
