import type { ReactNode } from "react";
import { DialogContent, DialogTitle, DialogTrigger, Dialog as DialogUI } from "../ui/dialog";

interface DialogProps {
  trigger: ReactNode;
  children: ReactNode;
  maxWidth?: string;
  asChild?: boolean; // required if the children element is a button
  onOpen?: () => void;
}

export function Dialog({ trigger, children, maxWidth, asChild = false, onOpen }: DialogProps) {
  return (
    <DialogUI
      onOpenChange={() => {
        if (onOpen) {
          onOpen();
        }
      }}
    >
      <DialogTrigger asChild={asChild}>{trigger}</DialogTrigger>
      <DialogContent className={maxWidth ? maxWidth : "sm:max-w-[600px]"}>
        <span className="sr-only">
          <DialogTitle>Diálogo</DialogTitle>
        </span>
        {children}
      </DialogContent>
    </DialogUI>
  );
}
