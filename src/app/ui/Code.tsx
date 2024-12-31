import { cn } from "lazy-cn";
import type { ComponentProps } from "react";

export function CodeBlock({ className, ...props }: ComponentProps<"div">) {
  return (
    <div className={cn(
      "font-mono whitespace-pre min-h-0 overflow-auto grow font-semibold text-base relative",
      className
    )}

      {...props}
    />
  )
}

export function CodeLine({ className, ...props }: ComponentProps<"div">) {
  return (
    <div className={cn(
      "h-[1.875rem] leading-8  items-center z-10 hover:bg-black/40 -ml-4 pl-4",
      className
    )}
      {...props}
    />
  )
}

export function LineNumber({ className, ...props }: ComponentProps<"div">) {
  return (
    <span className={cn(
      "w-9 text-white/20 select-none inline-block",
      className
    )}
      {...props}
    />
  )
}

export function getCharacterWidthInEm(width: number) {
  return width * 0.3156
}