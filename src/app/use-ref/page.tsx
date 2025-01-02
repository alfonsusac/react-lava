import { toTokens } from "../lib/codeToToken"

export default async function UseRefIntroPage() {
  const { tokens: t1 } = await toTokens(code1)
  const { tokens: t2 } = await toTokens(code2)
  return (
    <div className="min-h-screen flex items-center justify-center overflow-hidden bg-[#171F2B]">
      <article className="w-[960] h-[660px] flex flex-col relative">

      </article>
    </div>
  )
}

const code1 = `import { useState, useRef } from "react"

export function AirplaneModeToggle() {
  const [toggle, setToggle] = useState(false)

  return <>
    <div>{ toggle }</div>
    <button onClick={ () => setToggle(true) }>Turn On</button>
    <button onClick={ () => setToggle(false) }>Turn Off</button>
  </>
}`
const code2 = `import { useState, useRef } from "react"

export function AirplaneModeToggle() {
  const [toggle, setToggle] = useState({ value: false })
  return <>
    <div>{ toggle }</div>
    <button onClick={ () => setToggle({ value: true }) }>Turn On</button>
    <button onClick={ () => setToggle({ value: false }) }>Turn Off</button>
  </>
}`