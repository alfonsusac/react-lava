
import { Outro } from '@/app/ui/Outro'
import { UesClientClientPage } from './client'
import { codeToTokens } from 'shiki'

export default async function Page() {

  const { tokens } = await codeToTokens(`import { useState } from "react"

export function LikeCounter() {
  const [str, setStr] = useState('-')
  const liked = 0
  return <>
    <div>{ str }</div>
    <div>{ liked } Likes</div>
    <button onClick={ () => setStr(getRandomString()) }>
      Randomize
    </button>
    <button onClick={ () => liked += 1 }>Like</button>
  </>
}`, {
    lang: 'tsx',
    theme: 'vesper'
})

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



