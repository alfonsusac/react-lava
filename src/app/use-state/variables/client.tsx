"use client"

import { highlight3 } from "@/app/lib/animate"
import { Button } from "@/app/ui/Button"
import { CodeBlock, CodeLine, LineNumber } from "@/app/ui/Code"
import { Highlight2 } from "@/app/ui/Highlight"
import { TitleBar, Window } from "@/app/ui/Window"
import { useEffect, useState, type SVGProps } from "react"
import type { ThemedToken } from "shiki"

export function UesClientClientPage(props: {
  token: ThemedToken[][]
}) {
  const [likes, setLikes] = useState(0)

  useEffect(() => {
    highlight3("comp")
    highlight3("varb", 1)
    highlight3("disp", 2)
  }, [])

  return (
    <>
      <Window className="bg-[#171F2B]"
        // @ts-expect-error --bg is a css variable
        style={{ "--bg": "#171F2B" }}
      >
        <TitleBar className="font-mono">no-use-state.tsx</TitleBar>
        <div className="flex flex-col grow">
          <div className="h-0 grow -mx-4 px-4 pb-4 flex  border-b border-b-white/10">
            <CodeBlock className="-ml-4 pl-4 -mb-4 pb-4">
              <Highlight2 hidden id="disp" row={5} col={12} width={7} />
              <Highlight2 hidden id="ocl1" row={6} col={23} width={18} />
              <Highlight2 hidden id="ocl2" row={7} col={23} width={17} />
              <Highlight2 hidden id="varb" row={3} col={9} width={11} />
              <Highlight2 hidden id="comp" row={2} col={0} width={56} height={8} />
              <Highlight2 id="vale" row={3} col={22}>{'-> '}{likes}</Highlight2>
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
            <Window className="w-60 flex-none z-10"
              // @ts-expect-error --bg is a css variable
              style={{ "--bg": "#D4420D" }}
            >
              <TitleBar>
                <div className="flex items-center">
                  <div className="grow">localhost:3000</div>
                  <button
                    className="-m-2 p-2 bg-[var(--bg)] hover:brightness-125 rounded-md cursor-pointer outline-none"
                    onClick={() => {
                      location.reload();
                    }}
                  >
                    <FluentArrowCounterclockwise12Filled className="" />
                  </button>
                </div>
              </TitleBar>

              <div className="flex flex-col items-center justify-center h-full">
                <div className="text-9xl font-semibold opacity-80">
                  0
                </div>
                <div className="flex gap-2 mt-8">
                  <Button
                    onClick={() => {
                      setLikes(likes + 1)
                      highlight3("ocl1")
                      highlight3("varb", 1)
                    }}>
                    <MaterialSymbolsThumbUpSharp />
                    Like
                  </Button>
                  <Button
                    className="px-3"
                    onClick={() => {
                      setLikes(0)
                      highlight3("ocl2")
                      highlight3("varb", 1)
                    }}
                  >
                    <FluentArrowCounterclockwise12Filled />
                  </Button>
                </div>
              </div>
            </Window>
          </div>
          <div className="py-3 pb-1 text-[#FFD271] px-1 w-full shrink-0">
            {/* <h1 className="text-4xl font-black font-mono"></h1> */}
            <div className="text-2xl font-medium">
              Normal variables don&apos;t trigger rerenders.
            </div>
          </div>
        </div>
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
