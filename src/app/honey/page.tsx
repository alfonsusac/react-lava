// Draft

"use client"

import { cn } from "lazy-cn"
import { Geist } from "next/font/google"
import type { ComponentProps, SVGProps } from "react"

const sans = Geist({
})

export default function HowHoneyWorks() {
  return (
    <div className={cn(
      "min-h-screen bg-white flex items-center justify-center tracking-tight",
      sans.className,
    )}>
      <article className={cn(
        "shadow-[0_0_50px_0_#0022]",
        "w-[960] border",
        "shrink-0 aspect-[16_/_12] bg-white p-12 flex flex-col gap-2 px-24",
      )}>
        <div className="font-bold text-4xl text-center tracking-tight pb-8">
          How Honey Scam Works
        </div>
        <div className="h-32 flex justify-between">
          <div className="h-full aspect-video border rounded-md bg-white flex flex-col items-start justify-center p-4 tracking-normal">
            <span className="underline font-medium text-blue-600 cursor-pointer">Keycrown M4 Wireless Mouse (referral link)</span>
            <span className="text-sm">Referral link by MKB4K</span>
          </div>
          <div className="w-56 relative translate-x-6">
            <Arrow className="" />
            <Arrow className="rotate-[160deg] translate-y-[3rem]" />
            <Arrow className="rotate-[-20deg] translate-y-[5rem]" />
          </div>
          <div className="h-full aspect-video flex items-center justify-center relative">
            <span className="font-bold text-3xl">amazone</span>
            <Arrow className="rotate-[90deg] translate-y-[2rem] w-16" />
          </div>
        </div>
        <div className="h-32 flex justify-between">
          <div className="h-full aspect-video border rounded-md bg-white flex items-center justify-center p-3 tracking-normal">
            <img className="w-14 h-full object-cover" src="https://www.keychron.com/cdn/shop/files/Keychron-M4-wireless-mouse-black_8b1a522b-c4ef-472c-b6a7-55cdf28e8197.jpg?v=1701341219&width=640" />
            <div className="flex flex-col">
              <div className="text-xl pb-2 font-semibold">
                $39.20
                <span className="text-xs line-through font-normal opacity-60">
                  $40.00
                </span>
              </div>
              <div className="p-2 px-8 bg-blue-500 text-white font-semibold rounded-lg flex items-center gap-1">
                <MaterialSymbolsShoppingCartRounded />
                Buy
              </div>
            </div>
          </div>
          <div className="h-full aspect-video flex flex-col items-center justify-center">
            <div className="font-black text-2xl">MKB4K</div>
            <div className="text-sm">(your favourite creator)</div>
          </div>
        </div>
        <div className="h-32 flex justify-between">
          <div className="h-full aspect-video flex items-center justify-center">
          </div>

        </div>
        <div className="h-32">

        </div>
      </article>
    </div>
  )
}


function MaterialSymbolsShoppingCartRounded(props: SVGProps<SVGSVGElement>) {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" width="1em" height="1em" viewBox="0 0 24 24" {...props}><path fill="currentColor" d="M7 22q-.825 0-1.412-.587T5 20t.588-1.412T7 18t1.413.588T9 20t-.587 1.413T7 22m10 0q-.825 0-1.412-.587T15 20t.588-1.412T17 18t1.413.588T19 20t-.587 1.413T17 22M5.2 4h14.75q.575 0 .875.513t.025 1.037l-3.55 6.4q-.275.5-.737.775T15.55 13H8.1L7 15h11q.425 0 .713.288T19 16t-.288.713T18 17H7q-1.125 0-1.7-.987t-.05-1.963L6.6 11.6L3 4H2q-.425 0-.712-.288T1 3t.288-.712T2 2h1.625q.275 0 .525.15t.375.425z"></path></svg>
  )
}

function Arrow(
  { className, ...props }: ComponentProps<"div">
) {
  return (
    <div className={cn(
      "absolute top-1/2 -translate-y-1/2 w-full h-10",
      className,
    )}
      // @ts-expect-error custom css var
      style={{ "--arrow-color": "#c8d0e2" }}
      {...props}>
      <div className="absolute top-1/2 -translate-y-1/2 left-0 right-2 h-1.5 rounded-lg bg-[var(--arrow-color)]" />
      <div className="absolute top-1/2 -translate-y-1/2 right-0 w-5 h-6 bg-[var(--arrow-color)]"
        style={{
          clipPath: "polygon(0% 0%, 100% 50%, 0% 100%)"
        }}
      />
    </div>
  )
}