
import { codeToTokens, type ThemeRegistrationAny } from 'shiki'
import { UesClientClientPage } from './client'
import { Outro } from '../ui/Outro'

export default async function Page() {

  const { tokens } = await codeToTokens(`import { useState } from "react"

export function LikeCounter() {
  const [likes, setLikes] = useState(0)
  return <>
    <div>{likes}</div>
    <button onClick={ () => setLikes(likes + 1) }>Like</button>
    <button onClick={ () => setLikes(0) }>Reset</button>
  </>
}`, {
    lang: 'tsx',
    theme: myTheme
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



const myTheme: ThemeRegistrationAny = {
  name: 'my-theme',
  settings: [
    {
      scope: ['keyword', 'storage.type'],
      settings: {
        foreground: '#FD8DA3'
      }
    },
    {
      scope: ['string', 'entity.name.tag'],
      settings: {
        foreground: '#77D5A3'
      }
    },
    {
      scope: ['entity.name.function', 'entity.name'],
      settings: {
        foreground: '#BD9CFE'
      }
    },
    {
      scope: ['variable'],
      settings: {
        foreground: '#92A9FF'
      }
    },
  ]
}



