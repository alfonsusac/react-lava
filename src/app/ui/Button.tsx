import { cn } from "lazy-cn";
import type { ComponentProps } from "react";

export function Button(
  {className, ...props}: ComponentProps<"button">
) {

  return (
    <button
      className={cn(
        "text-[#FFD271] font-medium text-xl px-5 rounded-lg shadow-sm",
        "outline outline-1 outline-[#FFD27144]",
        "hover:outline-[#FFD27188]",
        "flex gap-2 items-center",
        "hover:brightness-105",
        "transition-all",
        "shadow-lg",
        "hover:shadow-md",
        "active:shadow-none",
        "active:scale-110",
        "bg-[var(--bg,_#D4420D)]",
        "h-11",
        className
      )}
      {...props}
    />
  )
}