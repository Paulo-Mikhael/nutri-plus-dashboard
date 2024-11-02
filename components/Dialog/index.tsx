import type { ReactNode } from "react";
import { DialogContent, DialogTrigger, Dialog as DialogUI } from "../ui/dialog";

interface DialogProps {
  trigger: ReactNode;
  children: ReactNode;
  maxWidth?: string;
  asChild?: boolean; // requireed if the children element is a button
}

export function Dialog({ trigger, children, maxWidth, asChild = false }: DialogProps) {
  return (
    <DialogUI>
      <DialogTrigger asChild={asChild}>{trigger}</DialogTrigger>
      <DialogContent className={maxWidth ? maxWidth : "sm:max-w-[600px]"}>{children}</DialogContent>
    </DialogUI>
  );
}
