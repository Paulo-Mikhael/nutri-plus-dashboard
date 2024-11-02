import { Dialog } from "@/components/Dialog";
import { Button } from "@/components/ui/button";
import { DialogClose, DialogHeader } from "@/components/ui/dialog";
import type { ReactNode } from "react";

export function FoodsDialog({ children }: { children: ReactNode }) {
  return (
    <Dialog trigger={children} maxWidth="max-w-72">
      <DialogHeader>Adicionar nova:</DialogHeader>
      <DialogClose>
        <div className="flex gap-2">
          <Button className="flex-grow">Comida</Button>
          <Button className="flex-grow">Refeição</Button>
        </div>
      </DialogClose>
    </Dialog>
  );
}
