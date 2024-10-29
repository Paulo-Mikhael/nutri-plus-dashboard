import type React from "react";

interface TextCardProps {
  headingElement: React.ElementType;
  text: string;
  minWidth?: string;
}

export function TextCard({ headingElement: HeadingElement, text, minWidth }: TextCardProps) {
  return (
    <HeadingElement
      className={`${minWidth} flex flex-grow items-center justify-center p-4 text-center text-lg bg-slate-200 dark:text-slate-100 dark:bg-slate-900 rounded-lg`}
    >
      {text}
    </HeadingElement>
  );
}
