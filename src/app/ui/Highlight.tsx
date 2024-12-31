import { cn } from "lazy-cn";
import type { ComponentProps } from "react";
import { getCharacterWidthInEm } from "./Code";
import { unit } from "../lib/animate";

export function Highlight(
  { className, row, col, width, height, hidden, ...props }: ComponentProps<"div"> & {
    row: number,
    col: number,
    width: number,
    height?: number,
    hidden?: boolean,
  }
) {
  return (
    <div
      className={cn(
        "text-[1.9em] ml-1",
        "bg-orange-500/50 rounded-md absolute mix-blend-screen pointer-events-none",
        hidden && "opacity-0",
        className
      )}
      style={{
        top: `${ row }em`,
        height: `${ height ?? 1 }em`,
        left: `${ (getCharacterWidthInEm(col - 0.4 - 1)) + 1.6 }em`,
        width: `${ (getCharacterWidthInEm(width + 0.8)) }em`,
      }}
      {...props}
    />
  )
}

export function Highlight2(
  { className, row, col, hidden, width, height, children, ...props }: ComponentProps<"div"> & {
    row: number,
    col: number,
    width?: number,
    height?: number,
    hidden?: boolean,
  }
) {
  return (
    <div
      className={cn(
        "absolute left-[3.25rem] h-[1.875rem] leading-8 mix-blend-screen pointer-events-none",
        hidden && "opacity-0",
        className
      )}
      style={{
        transform: `translateY(${ row * 1.875 }rem)`,
      }}
      {...props}
    >
      <span>
        {Array.from({ length: col - 1 }).map(() => {
          return ' '
        }).join('')}
      </span>
      <span className="bg-orange-500/50 px-1.5 -mx-1.5 rounded-md inline-block "
        style={{
          height: `${ (height ?? 1) * 1.875 }em`,
        }}
      >
        {Array.from({ length: width ?? 0 }).map(() => {
          return ' '
        }).join('')}
        {children}
      </span>
    </div>
  )
}


export function useHighlights<const T extends {
  id: string,
  row: number,
  col: number,
  width: number,
  height?: number,
  hidden?: boolean,
}[]>(
  config: T,
  speedMult: number = 1,
) {
  const blink = (id: T[number]['id'], delay: number = 0, onFinish?: () => void) => {
    requestAnimationFrame(() => {
      const ref = document.getElementById(id)
      if (!ref) return

      ref.animate([{ opacity: 1 }, { opacity: 0 }], {
        duration: unit(2 / speedMult),
        delay: unit(delay / speedMult)
      })

      setTimeout(() => {
        onFinish?.()
      }, unit(delay / speedMult))
    })

    return unit(delay / speedMult)
  }



  const Highlights = (props: {
    hidden?: boolean
  }) => config.map((iprops, i) => {
    return <Highlight2 key={i} {...iprops} hidden={iprops.hidden || props.hidden} />
  })

  return {
    blink,
    Highlights
  }
}

// test
// eslint-disable-next-line @typescript-eslint/no-unused-expressions
// (() => {
//   const { highlight } = useHighlights([
//     { id: 'id1', row: 1, col: 1, width: 1 },
//     { id: 'id2', row: 1, col: 1, width: 1 },
//     { id: 'id3', row: 1, col: 1, width: 1 },
//   ])


//   highlight('id2')
// })