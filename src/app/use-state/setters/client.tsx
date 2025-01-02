/* eslint-disable @typescript-eslint/no-unused-vars */
"use client";

import { CodeWindow1, TitleBar } from "@/app/ui/Window";
import { cn } from "lazy-cn";
import {
  useEffect,
  useRef,
  useState,
  type ComponentProps,
  type SVGProps,
} from "react";
import type { ThemedToken } from "shiki";
import { SpeedControl, useSpeedControl } from "@/app/components/SpeedControls";
import { ProgressBarBase, useProgressBar } from "@/app/components/ProgressBar";
import { PreviewWindow } from "@/app/ui/Window.preview";
import { Button } from "@/app/ui/Button";
import { Editor, EditorGutter, EditorRow, Tab, Token } from "@/app/ui/Code";
import { applyHitEffect } from "@/app/lib/animate";
import { useHighlights } from "@/app/ui/Highlight";

/** Code

import { useState } from "react"
export function LikeCounter() {
  const [toggle, setToggle] = useState(false)
  return <>
    <div>{ toggle }</div>
    <button onClick={ () => setToggle(true) }>Turn On</button>
    <button onClick={ () => setToggle(false) }>Turn Off</button>
  </>
}

import { useState } from "react"
export function AirplaneModeToggle() {
  const [toggle, setToggle] = useState({ value: false })
  return <>
    <div>{ toggle }</div>
    <button onClick={ () => setToggle({ value: true }) }>Turn On</button>
    <button onClick={ () => setToggle({ value: false }) }>Turn Off</button>
  </>
}

 */

export function SettersUseStateClient(props: {
  t1: ThemedToken[][];
  t2: ThemedToken[][];
}) {
  const [tab, setTabs] = useState<1 | 2>(1);
  const gotoTab = (tab: 1 | 2) => () => setTabs(tab);
  const tokens = tab === 1 ? props.t1 : props.t2;
  const val = (num1: number, num2: number) => {
    if (tab === 1) return num1
    else return num2
  }

  const speedControl = useSpeedControl();
  const pbar = useProgressBar()

  // const [state, setState] = useState(false)
  const stateRef = useRef(false)
  const state = () => stateRef.current
  const setState = (val: boolean) => {
    stateRef.current = val
    node("statebox")!.setAttribute("data-state", val ? "true" : "false")
    node("statetext")!.innerHTML = val ? "true" : "false"
  }

  const timeoutRef = useRef<NodeJS.Timeout>(null)
  const rerenderCombo = useRef<number>(0)
  const visualizeRerender = () => {
    rerenderCombo.current++
    if (timeoutRef.current)
      clearTimeout(timeoutRef.current)
    const el = document.createElement("div")
    el.className = "absolute top-20 left-[40rem] -rotate-6 text-4xl font-sans"
    el.innerHTML = `Rerender! ${ rerenderCombo.current }x`
    applyHitEffect("editor", el)
    const timeoutID = setTimeout(() => {
      rerenderCombo.current = 0
    }, 1000)
    timeoutRef.current = timeoutID
  }

  const { Highlights, blinkAll, highlightMany, unhighlightMany } = useHighlights([
    { row: 2, col: 0, width: val(64, 74), height: 8, id: "component", onBlink: visualizeRerender },
    { row: 3, col: 10, width: 6, id: "[toggle" },
    { row: 3, col: 18, width: 9, id: "setToggle]" },
    { row: 3, col: 40, width: 5, id: "(false)" },
    { row: 5, col: 12, width: 6, id: "{ toggle }" },
    { row: 6, col: 23, width: val(21, 32), id: "onClickOn" },
    { row: 7, col: 23, width: val(21, 33), id: "onClickOff" },
  ], speedControl.speed, () => ({
    "turnOn": stateRef.current === true ? ['onClickOn', "setToggle]"] : ['onClickOn', "setToggle]", "[toggle", "{ toggle }"],
    "turnOff": stateRef.current === false ? ['onClickOff', "setToggle]"] : ['onClickOff', "setToggle]", "[toggle", "{ toggle }"],
  }))

  useEffect(() => {
    const p = pbar.createProgress()
    const delays = blinkAll("component", "(false)", "[toggle", "{ toggle }")
    p?.start(delays[3])
  }, [])

  const onOnClick = () => {
    const p = pbar.createProgress()
    if (state() === false || tab === 2) {
      const delays = blinkAll("onClickOn", "setToggle]", "component", "[toggle", "{ toggle }")
      setTimeout(() => setState(true), delays[4])
      p?.start(delays[4])
      return
    }
    const delays = blinkAll("onClickOn", "setToggle]")
    p?.start(delays[1])
  }

  const onOffClick = () => {
    const p = pbar.createProgress()
    if (state() === true || tab === 2) {
      const delays = blinkAll("onClickOff", "setToggle]", "component", "[toggle", "{ toggle }")
      setTimeout(() => setState(false), delays[4])
      p?.start(delays[4])
      return
    }
    const delays = blinkAll("onClickOff", "setToggle]")
    p?.start(delays[1])
  }

  return (
    <CodeWindow1 className="p-0" padding="1rem">
      <TitleBar className="font-mono px-[var(--padding)]">
        <Tab selected={tab === 1} onClick={gotoTab(1)} label="setter1.tsx" />
        <Tab selected={tab === 2} onClick={gotoTab(2)} label="setter2.tsx" />
      </TitleBar>
      <Editor className="pr-[var(--padding)] text-xl" lineHeight="2.25rem" gutterWidth="3rem" id="editor">
        <Highlights hidden />
        {tokens.map((l, i) => <EditorRow key={i}>
          <EditorGutter num={i} />
          <div>{l.map((t, i) => <Token key={i} token={t} />)}</div>
        </EditorRow>)}
        <PreviewWindow className="bottom-2 h-48 w-full max-w-lg top-[unset] flex gap-2 font-sans">
          <div className="flex gap-2 items-center justify-center grow">
            <div className={cn("text-5xl w-32 h-32 bg-[#171F2B] rounded-md flex items-center justify-center transition-all duration-500 relative group")} id="statebox">
              <div className="absolute top-0 left-1.5 text-lg font-mono" id="statetext">false</div>
              <div className="relative scale-150">
                <MaterialSymbolsFlight />
                <div className={cn("absolute top-0 left-0 w-12 h-12 -rotate-45")} >
                  <div className={cn("w-1 h-12 absolute left-1/2 -translate-x-1/2 bg-red-500 transition-all shadow-[0_0_0_4px_#171F2B] group-data-[state=true]:h-0 group-data-[state=false]:h-12")} />
                </div>
              </div>
            </div>
            <div className="flex flex-col gap-4">
              <Button
                onClick={onOnClick}
                onMouseMove={() => highlightMany("turnOn")}
                onMouseLeave={() => unhighlightMany("all")}
              >
                Turn On
              </Button>
              <Button
                onClick={onOffClick}
                onMouseMove={() => highlightMany("turnOff")}
                onMouseLeave={() => unhighlightMany("all")}
              >
                Turn Off
              </Button>
            </div>
          </div>
        </PreviewWindow>
      </Editor>
      <pbar.ProgressBar />
      <CaptionPanel className="flex gap-2 items-center">
        <div className="text-3xl font-medium grow " id="caption">
          {
            tab === 1 && <>
              <div className="animate-appear1">{"Same values will not trigger re-render"}</div>
              <div className="animate-appear1 text-xl">{"State setter compares previous and new values"}</div>
            </>
          }
          {
            tab === 2 && <>
              <div className="animate-appear1">{"Object are still compared by reference"}</div>
              <div className="animate-appear1 text-xl">{"They might be different object instances (even though they appear the same)."}</div>
            </>
          }
        </div>
        {/* <SpeedContro l {...speedControl} /> */}
      </CaptionPanel>
    </CodeWindow1>
  );
}

function node(id: string) { return document.getElementById(id) }

export function CaptionPanel({ className, children, ...props }: ComponentProps<"div">) {
  return (
    <div
      className={cn(
        "py-3 pb-1 text-[#FFD271] px-1 w-full shrink-0",
        "p-[var(--padding)]",
        "border-t border-t-white/10 shadow-[0_-1px_0_0_#0005]",
        className
      )}
    >
      {children}
    </div>
  );
}

export function MaterialSymbolsFlight(props: SVGProps<SVGSVGElement>) {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" width="1em" height="1em" viewBox="0 0 24 24" {...props}><path fill="currentColor" d="M7 22v-2.5l3-2.1v-3.6L2 17v-3l8-5.6V4q0-.825.588-1.412T12 2t1.413.588T14 4v4.4l8 5.6v3l-8-3.2v3.6l3 2.1V22l-5-1.5z"></path></svg>
  )
}