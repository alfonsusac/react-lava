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
      "flex h-[1.9em] items-center z-10 hover:bg-black/40 -ml-4 pl-4",
      className
    )}
      {...props}
    />
  )
}

export function LineNumber({ className, ...props }: ComponentProps<"div">) {
  return (
    <div className={cn(
      "shrink-0 w-9 text-white/20 select-none",
      className
    )}
      {...props}
    />
  )
}