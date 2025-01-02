import { cn } from "lazy-cn";
import type { ComponentProps, CSSProperties } from "react";

export function Window(
  { className, children, disableWatermark, ...props }: ComponentProps<"section"> & {
    disableWatermark?: boolean
  }
) {
  return (
    <section
      tabIndex={0}
      className={cn(
        "px-4 pb-4 flex flex-col bg-[#D4420D] outline outline-1 outline-[#FFD27144]  rounded-lg relative grow ",
        "transition-all",
        "overflow-hidden",
        // "focus:z-10",
        // "focus:outline-[#FFD27188]",
        // "[&_.activeColor]:focus:text-[#FFD271cc]",
        // "[&_.activeColorBg]:focus:bg-[#FFD271cc]",
        // "focus:shadow-2xl",
        "shadow-xl",
        "group/window",
        "text-[#FFD271]",
        className,
      )}
      {...props}
    >
      {children}
      {
        !disableWatermark && (
          <div className="absolute right-4 bottom-4 z-0">
            <img src="/logo.svg" className="h-8 opacity-20" />
          </div>
        )
      }
    </section>
  )
}

export function TitleBar(
  { className, children, ...props }: ComponentProps<"div">
) {
  return (
    <div
      className={cn(
        "top-0 left-0 right-0 flex py-3 items-center shrink-0 ",
        className,
      )}
      {...props}
    >
      <div className="shrink-0 w-2 h-2 rounded-full bg-[#FFD27188] activeColorBg" />
      <div className="shrink-0 w-2 h-2 rounded-full bg-[#FFD27188] ml-1 activeColorBg" />
      <div className="shrink-0 w-2 h-2 rounded-full bg-[#FFD27188] ml-1 activeColorBg" />
      <div className="ml-4 text text-[#FFD27188] activeColor leading-none overflow-ellipsis w-0 grow flex">
        {children}
      </div>
    </div>
  )
}

export function CodeWindow1(
  { className, style, padding, ...props }: ComponentProps<typeof Window> & {
    padding: CSSProperties['paddingInline']
  }
) {
  return (
    <Window className={cn("bg-[#171F2B]", className)} style={{
      // @ts-expect-error --bg is var
      "--bg": "#171F2B",
      "--padding": padding,
      ...style
    }} {...props} disableWatermark />
  )
}