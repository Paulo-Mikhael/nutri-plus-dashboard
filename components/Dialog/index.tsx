import type { ReactNode } from "react";
import {
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
  Dialog as DialogUI,
} from "../ui/dialog";

interface DialogProps {
  trigger: ReactNode;
  children: ReactNode;
  maxWidth?: string;
  asChild?: boolean; // required if the children element is a button
  onOpen?: () => void;
  title?: string;
  description?: string;
}

export function Dialog({
  trigger,
  children,
  maxWidth,
  asChild = false,
  onOpen,
  title,
  description,
}: DialogProps) {
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
        {!title ? (
          <span className="sr-only">
            <DialogTitle>Diálogo</DialogTitle>
          </span>
        ) : (
          <DialogHeader>
            <DialogTitle>{title}</DialogTitle>
            <DialogDescription>{description}</DialogDescription>
          </DialogHeader>
        )}
        {children}
      </DialogContent>
    </DialogUI>
  );
}
