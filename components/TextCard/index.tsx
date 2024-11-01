import clsx from "clsx";
import type React from "react";

interface TextCardProps {
  headingElement: React.ElementType;
  text: string;
  minWidth?: string;
  danger?: boolean;
  className?: string;
}

export function TextCard({
  headingElement: HeadingElement,
  text,
  minWidth,
  danger,
  className,
}: TextCardProps) {
  const defaultValues = `${minWidth} ${className} flex flex-grow items-center justify-center p-4 text-center rounded-lg text-lg`;

  return (
    <HeadingElement
      className={clsx(defaultValues, {
        "bg-red-600/70 text-white": danger,
        "bg-slate-200 dark:text-slate-100 dark:bg-slate-900": !danger,
      })}
    >
      {text}
    </HeadingElement>
  );
}
