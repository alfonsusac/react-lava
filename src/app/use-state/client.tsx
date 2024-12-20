"use client"

import { useEffect, useRef, useState, type SVGProps } from "react"
import { Button } from "../ui/Button"
import { TitleBar, Window } from "../ui/Window"
import type { ThemedToken } from "shiki"
import { CodeBlock, CodeLine, LineNumber } from "../ui/Code"

export function UesClientClientPage(props: {
  token: ThemedToken[][]
}) {
  const [likes, setLikes] = useState(0)

  const hl_comp = useRef<HTMLDivElement>(null)
  const hl_init = useRef<HTMLDivElement>(null)
  const hl_getr = useRef<HTMLDivElement>(null)
  const hl_setr = useRef<HTMLDivElement>(null)
  const hl_liks = useRef<HTMLDivElement>(null)
  const hl_ocl1 = useRef<HTMLDivElement>(null)
  const hl_ocl2 = useRef<HTMLDivElement>(null)

  useEffect(() => {
    hl_init.current?.animate([{ opacity: 1 }, { opacity: 0 }], { duration: 300 })
    hl_comp.current?.animate([{ opacity: 1 }, { opacity: 0 }], { duration: 300, delay: 100 })
    hl_getr.current?.animate([{ opacity: 1 }, { opacity: 0 }], { duration: 300, delay: 200 })
    hl_liks.current?.animate([{ opacity: 1 }, { opacity: 0 }], { duration: 300, delay: 300 })
  }, [])

  return (
    <>
      <Window className="bg-[#171F2B]">
        <TitleBar className="font-mono">use-state.tsx</TitleBar>
        <div className="flex flex-col grow">
          <div className="h-0 grow -mx-4 px-4 pb-4 flex  border-b border-b-white/10">
            <CodeBlock className="-ml-4 pl-4 -mb-4 pb-4">
              <div ref={hl_comp} className="opacity-0 text-[1.9em] h-[8em] ml-1 left-[3rem] w-[38rem] top-[2em] bg-orange-500/50 rounded-md absolute mix-blend-screen pointer-events-none" />
              <div ref={hl_init} className="opacity-0 text-[1.9em] h-[1em] ml-1 left-[24.6rem] w-[1.8rem] top-[3em] bg-orange-500/50 rounded-md absolute mix-blend-screen pointer-events-none" />
              <div ref={hl_getr} className="opacity-0 text-[1.9em] h-[1em] ml-1 left-[8rem] w-[3.5rem] top-[3em] bg-orange-500/50 rounded-md absolute mix-blend-screen pointer-events-none" />
              <div ref={hl_setr} className="opacity-0 text-[1.9em] h-[1em] ml-1 left-[12rem] w-[6rem] top-[3em] bg-orange-500/50 rounded-md absolute mix-blend-screen pointer-events-none" />
              <div ref={hl_liks} className="opacity-0 text-[1.9em] h-[1em] ml-1 left-[8.4rem] w-[4.3rem] top-[5em] bg-orange-500/50 rounded-md absolute mix-blend-screen pointer-events-none" />
              <div ref={hl_ocl1} className="opacity-0 text-[1.9em] h-[1em] ml-1 left-[15.8rem] w-[16rem] top-[6em]  bg-orange-500/50 rounded-md absolute mix-blend-screen pointer-events-none" />
              <div ref={hl_ocl2} className="opacity-0 text-[1.9em] h-[1em] ml-1 left-[15.8rem] w-[11rem] top-[7em]  bg-orange-500/50 rounded-md absolute mix-blend-screen pointer-events-none" />
              {
                props.token.map((token, i) =>
                  <CodeLine key={i}>
                    <LineNumber>{(i + '').padStart(2, '0')}</LineNumber>{
                      token.map((t, j) => {
                        return <span key={j} style={{ color: t.color }}>{t.content}</span>
                      })}
                  </CodeLine>
                )
              }
            </CodeBlock>
            <Window className="w-60 flex-none z-10">
              <TitleBar >localhost:3000</TitleBar>
              <div className="flex flex-col items-center justify-center h-full">
                <div className="text-9xl font-semibold opacity-80">
                  {likes}
                </div>

                <div className="flex gap-2 mt-8">
                  <Button
                    onClick={() => {
                      setLikes(likes + 1)
                      hl_ocl1.current?.animate([{ opacity: 1 }, { opacity: 0 }], { duration: 300 })
                      hl_setr.current?.animate([{ opacity: 1 }, { opacity: 0 }], { duration: 300, delay: 100 })
                      hl_comp.current?.animate([{ opacity: 1 }, { opacity: 0 }], { duration: 300, delay: 200 })
                      hl_getr.current?.animate([{ opacity: 1 }, { opacity: 0 }], { duration: 300, delay: 300 })
                      hl_liks.current?.animate([{ opacity: 1 }, { opacity: 0 }], { duration: 300, delay: 400 })
                    }}>
                    <MaterialSymbolsThumbUpSharp />
                    Like
                  </Button>
                  <Button
                    className="px-3"
                    onClick={() => {
                      setLikes(0)
                      hl_ocl2.current?.animate([{ opacity: 1 }, { opacity: 0 }], { duration: 300 })
                      hl_setr.current?.animate([{ opacity: 1 }, { opacity: 0 }], { duration: 300, delay: 100 })
                      hl_comp.current?.animate([{ opacity: 1 }, { opacity: 0 }], { duration: 300, delay: 200 })
                      hl_getr.current?.animate([{ opacity: 1 }, { opacity: 0 }], { duration: 300, delay: 300 })
                      hl_liks.current?.animate([{ opacity: 1 }, { opacity: 0 }], { duration: 300, delay: 400 })
                    }}
                  >
                    <FluentArrowCounterclockwise12Filled />
                  </Button>
                </div>

              </div>
            </Window>
          </div>
          <div className="py-3 text-[#FFD271] px-1 w-full shrink-0">
            <h1 className="text-4xl font-black font-mono">useState</h1>
            <div className="text-2xl font-medium">
              Used to create a reactive state variable and a function to update it.
            </div>
          </div>
        </div>
        {/* <div className="flex items-stretch border-b pb-4">
          <CodeBlock className="">
            <div ref={hl_comp} className="opacity-0 text-[1.9em] h-[10em] ml-1 left-[3rem] w-[38rem] top-[2em] bg-orange-500/50 rounded-md absolute mix-blend-screen pointer-events-none" />
            <div ref={hl_init} className="opacity-0 text-[1.9em] h-[1em] ml-1 left-[24.6rem] w-[1.8rem] top-[3em] bg-orange-500/50 rounded-md absolute mix-blend-screen pointer-events-none" />
            <div ref={hl_getr} className="opacity-0 text-[1.9em] h-[1em] ml-1 left-[8rem] w-[3.5rem] top-[3em] bg-orange-500/50 rounded-md absolute mix-blend-screen pointer-events-none" />
            <div ref={hl_setr} className="opacity-0 text-[1.9em] h-[1em] ml-1 left-[12rem] w-[6rem] top-[3em] bg-orange-500/50 rounded-md absolute mix-blend-screen pointer-events-none" />
            <div ref={hl_liks} className="opacity-0 text-[1.9em] h-[1em] ml-1 left-[6.4rem] w-[4.8rem] top-[6em] bg-orange-500/50 rounded-md absolute mix-blend-screen pointer-events-none" />
            <div ref={hl_ocl1} className="opacity-0 text-[1.9em] h-[1em] ml-1 left-[15.8rem] w-[16rem] top-[8em]  bg-orange-500/50 rounded-md absolute mix-blend-screen pointer-events-none" />
            <div ref={hl_ocl2} className="opacity-0 text-[1.9em] h-[1em] ml-1 left-[15.8rem] w-[11rem] top-[9em]  bg-orange-500/50 rounded-md absolute mix-blend-screen pointer-events-none" />
            {
              props.token.map((token, i) =>
                <CodeLine key={i}>
                  <LineNumber>{(i + '').padStart(2, '0')}</LineNumber>{
                    token.map((t, j) => {
                      return <span key={j} style={{ color: t.color }}>{t.content}</span>
                    })}
                </CodeLine>
              )
            }
          </CodeBlock>


          <Window className="w-60 flex-none z-10">
            <TitleBar>localhost:3000</TitleBar>
            <div className="flex flex-col items-center justify-center h-full">
              <div className="text-9xl font-semibold opacity-80">
                {likes}
              </div>

              <div className="flex gap-2 mt-8">
                <Button
                  onClick={() => {
                    setLikes(likes + 1)
                    hl_ocl1.current?.animate([{ opacity: 1 }, { opacity: 0 }], { duration: 300 })
                    hl_setr.current?.animate([{ opacity: 1 }, { opacity: 0 }], { duration: 300, delay: 100 })
                    hl_comp.current?.animate([{ opacity: 1 }, { opacity: 0 }], { duration: 300, delay: 200 })
                    hl_getr.current?.animate([{ opacity: 1 }, { opacity: 0 }], { duration: 300, delay: 300 })
                    hl_liks.current?.animate([{ opacity: 1 }, { opacity: 0 }], { duration: 300, delay: 400 })
                  }}>
                  <MaterialSymbolsThumbUpSharp />
                  Like
                </Button>
                <Button
                  className="px-3"
                  onClick={() => {
                    setLikes(0)
                    hl_ocl2.current?.animate([{ opacity: 1 }, { opacity: 0 }], { duration: 300 })
                    hl_setr.current?.animate([{ opacity: 1 }, { opacity: 0 }], { duration: 300, delay: 100 })
                    hl_comp.current?.animate([{ opacity: 1 }, { opacity: 0 }], { duration: 300, delay: 200 })
                    hl_getr.current?.animate([{ opacity: 1 }, { opacity: 0 }], { duration: 300, delay: 300 })
                    hl_liks.current?.animate([{ opacity: 1 }, { opacity: 0 }], { duration: 300, delay: 400 })
                  }}
                >
                  <FluentArrowCounterclockwise12Filled />
                </Button>
              </div>

            </div>
          </Window>
        </div>
        <header className="text-[#FFD271] px-0 w-full">
          <h1 className="text-5xl font-black font-mono">useState</h1>
          <div className="text-2xl font-medium">
            Used to create a reactive state variable and a function to update it.
          </div>
        </header> */}
      </Window>

    </>
  )

}


export function MaterialSymbolsThumbUpSharp(props: SVGProps<SVGSVGElement>) {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" width="1em" height="1em" viewBox="0 0 24 24" {...props}><path fill="currentColor" d="M8 21V8l7-7l1.85 1.85L15.55 8H23v4.4L19.35 21zm-6 0V8h4v13z"></path></svg>
  )
}

export function FluentArrowCounterclockwise12Filled(props: SVGProps<SVGSVGElement>) {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" width="1em" height="1em" viewBox="0 0 12 12" {...props}><path fill="currentColor" d="M1.5 2A.75.75 0 0 1 3 2v.646a4.5 4.5 0 1 1-1.42 4.206C1.492 6.387 1.885 6 2.358 6c.355 0 .636.291.711.638a3.001 3.001 0 1 0 1.266-3.133h.416a.75.75 0 0 1 0 1.5h-2.5a.75.75 0 0 1-.75-.75z"></path></svg>
  )
}