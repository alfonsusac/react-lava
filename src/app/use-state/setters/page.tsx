import { Outro } from "@/app/ui/Outro"
import { codeToTokens } from "shiki"
import { SettersUseStateClient } from "./client"

const code1 = `import { useState } from "react"

export function AirplaneModeToggle() {
  const [toggle, setToggle] = useState(false)
  return <>
    <div>{ toggle }</div>
    <button onClick={ () => setToggle(true) }>Turn On</button>
    <button onClick={ () => setToggle(false) }>Turn Off</button>
  </>
}`
const code2 = `import { useState } from "react"

export function AirplaneModeToggle() {
  const [toggle, setToggle] = useState({ value: false })
  return <>
    <div>{ toggle }</div>
    <button onClick={ () => setToggle({ value: true }) }>Turn On</button>
    <button onClick={ () => setToggle({ value: false }) }>Turn Off</button>
  </>
}`


export default async function UseStateSettersPage() {
  const { tokens: t1 } = await codeToTokens(code1, { lang: "tsx", theme: "vesper" })
  const { tokens: t2 } = await codeToTokens(code2, { lang: "tsx", theme: "vesper" })
  return (
    <div className="bg-[#bc3a0b] bg-grid min-h-screen flex items-center justify-center overflow-hidden">
      {/* Viewport */}
      <article className="p-1 w-[960] h-[660px] flex flex-col relative">
        <div className="flex items-stretch h-full">
          <SettersUseStateClient
            t1={t1}
            t2={t2}
          />
        </div>
      </article>
      <Outro />
    </div>
  )
}