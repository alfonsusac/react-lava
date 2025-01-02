"use client"

import { Button } from "@/app/ui/Button"
import { CodeBlock, CodeLine, LineNumber } from "@/app/ui/Code"
import { Highlight2, useHighlights } from "@/app/ui/Highlight"
import { TitleBar, Window } from "@/app/ui/Window"
import { PreviewWindow } from "@/app/ui/Window.preview"
import { useEffect, useRef, type SVGProps } from "react"
import type { ThemedToken } from "shiki"
import { FluentArrowCounterclockwise12Filled } from "../client"
import { fadeOut, hitEffect, pulseIn } from "@/app/lib/keyframes"
import { SpeedControl, useSpeedControl } from "@/app/components/SpeedControls"


export function UesClientClientPage(props: {
  token: ThemedToken[][]
}) {
  const speedControl = useSpeedControl()
  const { speed } = speedControl

  const valRef = useRef<HTMLDivElement>(null)
  const likedRef = useRef<HTMLDivElement>(null)
  const codeRef = useRef<HTMLDivElement>(null)
  const actualClickCountRef = useRef(0)
  const progressBarRef = useRef<HTMLDivElement>(null)

  const { blink, Highlights } = useHighlights([
    { row: 3, col: 10, width: 3, id: "[str," },
    { row: 3, col: 15, width: 6, id: "setStr]" },
    { row: 4, col: 9, width: 9, id: "const liked" },
    { row: 6, col: 12, width: 3, id: "{ str }" },
    { row: 7, col: 12, width: 5, id: "{ liked }" },
    { row: 8, col: 23, width: 31, id: "onClick1" },
    { row: 11, col: 23, width: 18, id: "onClick2" },
    { row: 2, col: 0, width: 56, height: 12, id: "component" },
  ], speed)
  // FFD27177
  const createProgress = () => {
    const progress = document.createElement("div")
    progress.className = "h-1 bg-gradient-to-r from-[#FFD27100] to-[#D4420Dbb] transition-all w-full top-0 absolute"
    progress.id = `progress-${ Math.random().toString(25).slice(2, 9) }`
    progressBarRef.current!.appendChild(progress)
    return {
      start: (duration: number = 200) => {
        progress.animate([
          { width: "0" },
          { width: "100%" }
        ], { duration, fill: "forwards" })
        const endAnim = progress.animate(fadeOut(), { delay: duration, duration: 500, fill: "forwards" })
        endAnim.onfinish = () => progress.remove()
      }
    }
  }

  useEffect(() => {
    const p = createProgress()
    blink("component")
    blink("[str,", 1)
    blink("const liked", 2)
    blink("{ str }", 3)
    p.start(blink("{ liked }", 3))
  }, [])

  const changeLiked = (getter: (prev: number) => number) => {
    const liked = parseInt(likedRef.current!.innerHTML)
    likedRef.current!.innerHTML = getter(liked).toString()
    likedRef.current!.animate(pulseIn(), { duration: 300 })
  }
  const changeRng = () => {
    valRef.current!.innerHTML = Math.random().toString(25).slice(2, 6)
    valRef.current!.animate(pulseIn(1.1), { duration: 300 })
  }
  const visualizeRerender = () => {
    actualClickCountRef.current++
    const efx = document.createElement("div")
    efx.className = "absolute top-20 left-[30rem] -rotate-6"
    efx.innerHTML = "Rerender!"
    codeRef.current!.appendChild(efx)
    const anim = efx.animate(hitEffect(), { duration: 800 })
    anim.onfinish = () => {
      efx.remove()
    }
  }

  const onRandomizeClick = () => {
    const p = createProgress()
    blink("onClick1")
    blink("setStr]", 1)
    blink("component", 2, () => { visualizeRerender() })
    blink("[str,", 3)
    blink("const liked", 4, () => { changeLiked(() => 0) })
    blink("{ str }", 5, () => { changeRng() })
    p.start(blink("{ liked }", 5))
  }

  const onLikeClick = () => {
    const p = createProgress()
    blink("onClick2")
    p.start(blink("const liked", 1, () => { changeLiked((prev) => prev + 1) }))
  }

  return (
    <>
      <Window className="bg-[#171F2B]"
        // @ts-expect-error --bg is a css variable
        style={{ "--bg": "#171F2B" }}
        disableWatermark
      >
        <TitleBar className="font-mono ">no-use-state.tsx</TitleBar>
        <div className="flex flex-col grow">
          <div className="h-0 grow -mx-4 px-4 pb-4 flex  border-b border-b-white/10 relative">
            <CodeBlock className="-ml-4 pl-4 -mb-4 pb-4" ref={codeRef}>
              <Highlights hidden />
              <Highlight2 id="liked = 0" row={4} col={20}>{'-> '}<span ref={likedRef} className="inline-block">0</span></Highlight2>
              {
                props.token.map((token, i) =>
                  <CodeLine key={i}>
                    <LineNumber>{(i + '').padStart(2, '0')}</LineNumber>
                    <span>
                      {token.map((t, j) => {
                        return <span key={j} style={{ color: t.color }}>{t.content}</span>
                      })}
                    </span>
                  </CodeLine>
                )
              }
            </CodeBlock>
            <PreviewWindow>
              <div className="flex flex-col items-center justify-center h-full">
                <div className="text-7xl font-semibold opacity-80" ref={valRef}>
                  -
                </div>
                <div className="text-xl font-semibold opacity-80 mt-2">
                  0 Likes
                </div>
                <div className="flex flex-col gap-2 mt-8 items-center">
                  <Button onClick={onRandomizeClick}>
                    <FluentArrowCounterclockwise12Filled />
                    Randomize
                  </Button>
                  <Button className="px-3" onClick={onLikeClick}>
                    <MaterialSymbolsThumbUpSharp />
                    Like
                  </Button>
                </div>
              </div>
            </PreviewWindow>
          </div>
          {/* Progress Bar */}
          <div className="h-1 overflow-hidden bg-black/20 -mx-4 relative" ref={progressBarRef}>
          </div>
          <div className="flex gap-4">
            <div className="py-3 pb-1 text-[#FFD271] px-1 grow shrink-0">
              <div className="text-2xl font-medium">
                Rerenders reset normal variables.
              </div>
            </div>
            {/* Speed Controls */}
            <SpeedControl {...speedControl} />
          </div>
        </div>
      </Window>
    </>
  )

}

export function MaterialSymbolsThumbUpSharp(props: SVGProps<SVGSVGElement>) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="1em"
      height="1em"
      viewBox="0 0 24 24"
      {...props}
    >
      <path
        fill="currentColor"
        d="M8 21V8l7-7l1.85 1.85L15.55 8H23v4.4L19.35 21zm-6 0V8h4v13z"
      ></path>
    </svg>
  );
}


