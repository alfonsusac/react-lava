"use client"

import { useEffect } from "react"
import { TitleBar, Window } from "../ui/Window"

export default function Page() {


  return (
    <div className="bg-[#922c07] bg-grid min-h-screen flex items-center justify-center">

      {/* Viewport */}
      <article className="p-1 w-[960] h-[540px] flex items-stretch">

        <Window className="bg-[#171F2B]">
          <TitleBar>/use-effect.tsx</TitleBar>
          Hello World
        </Window>

        <Window className="w-60 flex-none">
          <TitleBar>localhost:3000</TitleBar>
          Hello World
        </Window>
      </article>


    </div>
  )
}