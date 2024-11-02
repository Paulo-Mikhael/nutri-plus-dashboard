import type { ReactNode } from "react";
import { DialogContent, DialogTrigger, Dialog as DialogUI } from "../ui/dialog";

interface DialogProps {
  trigger: ReactNode;
  children: ReactNode;
  maxWidth?: string;
}

export function Dialog({ trigger, children, maxWidth }: DialogProps) {
  return (
    <DialogUI>
      <DialogTrigger>{trigger}</DialogTrigger>
      <DialogContent className={maxWidth ? maxWidth : "sm:max-w-[600px]"}>{children}</DialogContent>
    </DialogUI>
  );
}
