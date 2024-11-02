import { Dialog } from "@/components/Dialog";
import { Button } from "@/components/ui/button";
import { DialogClose, DialogHeader } from "@/components/ui/dialog";
import { useSetFoodsState } from "@/hooks/use-set-foods-state";
import type { ReactNode } from "react";

export function FoodsDialog({ children }: { children: ReactNode }) {
  const setFoodsState = useSetFoodsState();

  return (
    <Dialog trigger={children} maxWidth="max-w-72">
      <DialogHeader>Adicionar nova:</DialogHeader>
      <DialogClose>
        <div className="flex gap-2">
          <Button variant="destructive" className="flex-grow">
            Comida
          </Button>
          <Button onClick={() => setFoodsState("selecting-meal")} className="flex-grow">
            Refeição
          </Button>
        </div>
      </DialogClose>
    </Dialog>
  );
}
