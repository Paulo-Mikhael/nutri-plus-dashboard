import type React from "react";

interface TextCardProps {
  headingElement: React.ElementType;
  text: string;
  minHeight?: number;
}

export function TextCard({ headingElement: HeadingElement, text, minHeight }: TextCardProps) {
  return (
    <HeadingElement
      className={`${minHeight ? `min-h-[${minHeight}px]` : ""}flex-grow p-4 text-center text-lg bg-slate-200 dark:text-slate-100 dark:bg-slate-900 rounded-lg`}
    >
      {text}
    </HeadingElement>
  );
}
