
import { Outro } from '@/app/ui/Outro'
import { UesClientClientPage } from './client'
import { codeToTokens } from '@/app/lib/codeToToken'

export default async function Page() {

  const { tokens } = await codeToTokens(`import { useState } from "react"

export function LikeCounter() {
  const pressed = 0
  return <>
    <div>{ pressed }</div>
    <button onClick={ () => pressed += 1 }>Like</button>
    <button onClick={ () => pressed = 0 }>Reset</button>
  </>
}`)

  return (
    <div className="bg-[#bc3a0b] bg-grid min-h-screen flex items-center justify-center overflow-hidden">

      {/* Viewport */}
      <article className="p-1 w-[960] h-[540px] flex flex-col relative">
        <div className="flex items-stretch h-full">
          <UesClientClientPage
            token={tokens}
          />
        </div>
      </article>
      <Outro />
    </div>
  )
}



