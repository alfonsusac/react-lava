import type { ComponentProps, SVGProps } from "react"
import { TitleBar, Window } from "./Window"
import { cn } from "lazy-cn"

export function PreviewWindow(
  { children, className, ...props }: ComponentProps<typeof Window>
) {
  return (
    <Window className={cn("w-60 flex-none z-10 absolute right-4 bottom-4 top-0 shadow-2xl", className)}
      // @ts-expect-error --bg is a css variable
      style={{ "--bg": "#D4420D" }}
      {...props}
    >
      <TitleBar>
        <div className="flex items-center grow">
          <div className="grow text-center">localhost:3000</div>
          <button
            className="-m-2 p-2 bg-[var(--bg)] hover:brightness-125 rounded-md cursor-pointer outline-none"
            onClick={() => location.reload()}
          >
            <FluentArrowCounterclockwise12Filled />
          </button>
        </div>
      </TitleBar>
      {children}
    </Window>
  )
}

export function FluentArrowCounterclockwise12Filled(props: SVGProps<SVGSVGElement>) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="1em"
      height="1em"
      viewBox="0 0 12 12"
      {...props}
    >
      <path
        fill="currentColor"
        d="M1.5 2A.75.75 0 0 1 3 2v.646a4.5 4.5 0 1 1-1.42 4.206C1.492 6.387 1.885 6 2.358 6c.355 0 .636.291.711.638a3.001 3.001 0 1 0 1.266-3.133h.416a.75.75 0 0 1 0 1.5h-2.5a.75.75 0 0 1-.75-.75z">
      </path>
    </svg>
  )
}