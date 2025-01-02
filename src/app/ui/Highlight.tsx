/* eslint-disable @typescript-eslint/no-unused-vars */
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
        "absolute left-[var(--gutter-width,_3.25rem)] h-[1.875rem] leading-8",
        "mix-blend-screen pointer-events-none",
        "transition-all",
        "group data-[highlight=true]:opacity-100",
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
      <span className={cn(
        "bg-orange-500/50 px-1.5 -mx-1.5 rounded-md inline-block",
        "group-data-[highlight=true]:bg-white/10",
        "group-data-[highlight=true]:opacity-100",
      )}
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

export function Highlight3(
  { className, row, col, hidden, width, height, children, id, ...props }: ComponentProps<"div"> & {
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
        "absolute left-[var(--gutter-width,_3.25rem)] h-[var(--line-height)] leading-8",
        "mix-blend-screen pointer-events-none",
        "transition-all",
        "opacity-100",
        // hidden && "opacity-0",
        className
      )}
      style={{
        transform: `translateY(calc(${ row } * var(--line-height)))`,
      }}
      {...props}
    >
      <span>
        {Array.from({ length: col - 1 }).map(() => {
          return ' '
        }).join('')}
      </span>
      <span id={id} className={cn(
        "bg-white/10",
        hidden && "bg-white/0",
        "px-1.5 -mx-1.5 rounded-md inline-block",
        "data-[highlight=true]:bg-white/10",
      )}
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
  onBlink?: () => void,
  tag?: string[],
}[], const U extends { [key: string]: (T[number]['id'])[] }>(
  config: T,
  speedMult: number = 1,
  tags?: () => U
) {
  const blink = (id: T[number]['id'], delay: number = 0, onFinish?: () => void) => {
    requestAnimationFrame(() => {
      const ref = document.getElementById(id)
      if (!ref) return

      ref.animate([
        { backgroundColor: "rgb(249 115 22 / 0.5)" }, {}
      ], {
        duration: unit(2 / speedMult),
        delay: unit(delay / speedMult)
      })

      setTimeout(() => {
        config.find(c => c.id === id)?.onBlink?.()
        onFinish?.()
      }, unit(delay / speedMult))
    })

    return unit(delay / speedMult)
  }

  const blinkAll = (...ids: (T[number]['id'])[]) => {
    let delay = 0
    unhighlightMany("all")
    for (const id of ids) {
      blink(id, delay)
      delay++
    }
    return ids.map((id, i) => unit(i / speedMult))
  }

  const highlightMany = (tag: keyof U) => {
    unhighlightMany("all")
    if (!tags) return
    for (const id of tags()[tag]) {
      const ref = document.getElementById(id)
      if (!ref) return
      ref.setAttribute("data-highlight", 'true')
    }
  }

  const unhighlightMany = (tag: keyof U | "all") => {
    if (tag === "all") {
      for (const hl of config) {
        const ref = document.getElementById(hl.id)
        if (!ref) return
        ref.setAttribute("data-highlight", 'false')
      }
      return
    }
    if (!tags) return
    for (const id of tags()[tag]) {
      const ref = document.getElementById(id)
      if (!ref) return
      ref.setAttribute("data-highlight", 'false')
    }
  }

  const Highlights = (props: {
    hidden?: boolean
  }) => config.map(({ onBlink, ...iprops }, i) => {
    return <Highlight3 key={i} {...iprops} hidden={iprops.hidden || props.hidden} />
  })

  return {
    blink,
    blinkAll,
    Highlights,
    highlightMany,
    unhighlightMany,
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