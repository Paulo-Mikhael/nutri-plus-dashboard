import type { ReactNode } from "react";
import { TooltipProvider, Tooltip as TooltipContainer, TooltipContent, TooltipTrigger } from "../ui/tooltip";

export default function Tooltip({ children, tipText }: { children: ReactNode, tipText: string }){
  return (
    <TooltipProvider>
    <TooltipContainer>
      <TooltipTrigger asChild>
        {children}
      </TooltipTrigger>
      <TooltipContent>
        {tipText}
      </TooltipContent>
    </TooltipContainer>
  </TooltipProvider>
  );
}