import { Dialog } from "@/components/Dialog";
import { Button } from "@/components/ui/button";
import { DialogHeader } from "@/components/ui/dialog";
import { useSetFoodsState } from "@/hooks/use-set-foods-state";
import type { ReactNode } from "react";
import { CreateFoodDialog } from "./CreateFoodDialog";

export function FoodsDialog({ children }: { children: ReactNode }) {
  const setFoodsState = useSetFoodsState();

  return (
    <Dialog trigger={children} maxWidth="max-w-72">
      <DialogHeader>Adicionar nova:</DialogHeader>
      <div className="flex gap-2">
        <CreateFoodDialog>
          <Button className="flex-grow">Comida</Button>
        </CreateFoodDialog>
        <Button onClick={() => setFoodsState("selecting-meal")} className="flex-grow">
          Refeição
        </Button>
      </div>
    </Dialog>
  );
}
