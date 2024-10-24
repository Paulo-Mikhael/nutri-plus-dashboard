import type { ReactNode } from "react";
import {
  TooltipProvider,
  Tooltip as TooltipContainer,
  TooltipContent,
  TooltipTrigger,
} from "../ui/tooltip";

export function Tooltip({ children, tipText }: { children: ReactNode; tipText: string }) {
  return (
    <TooltipProvider>
      <TooltipContainer>
        <TooltipTrigger asChild>
          <span className="cursor-pointer">{children}</span>
        </TooltipTrigger>
        <TooltipContent>
          <div className="sr-only">{tipText}</div>
          {tipText}
        </TooltipContent>
      </TooltipContainer>
    </TooltipProvider>
  );
}
