import type { RefObject } from "react";
import { getCharacterWidthInEm } from "../ui/Code";
import { hitEffect } from "./keyframes";

export function unit(i: number) {
  const scale = 150
  return i * scale
}

export function highlight(ref: RefObject<HTMLElement | null>, delay: number = 0) {
  ref.current?.animate([{ opacity: 1 }, { opacity: 0 }], {
    duration: unit(3),
    delay: unit(delay)
  })
}

export function highlight3(id: string, delay: number = 0) {
  const ref = document.getElementById(id)
  if (!ref) return
  ref.animate([{ opacity: 1 }, { opacity: 0 }], {
    duration: unit(3),
    delay: unit(delay)
  })
}

export function highlight2(ref: RefObject<HTMLElement | null>, places: {
  row: number,
  col: number,
  width: number,
  height?: number,
}[]) {
  const keyframes: Keyframe[] = []

  for (const place of places) {
    keyframes.push({
      top: `${ place.row }em`,
      height: `${ place.height ?? 1 }em`,
      left: `${ (getCharacterWidthInEm(place.col - 0.4 - 1)) + 1.6 }em`,
      width: `${ (getCharacterWidthInEm(place.width + 0.8)) }em`,
      opacity: 1,
    })
    keyframes.push({
      top: `${ place.row }em`,
      height: `${ place.height ?? 1 }em`,
      left: `${ (getCharacterWidthInEm(place.col - 0.4 - 1)) + 1.6 }em`,
      width: `${ (getCharacterWidthInEm(place.width + 0.8)) }em`,
      opacity: 1,
    })
  }


  ref.current?.animate(keyframes, {
    duration: unit(keyframes.length * 2),
    delay: unit(0),
    fill: 'forwards',
    easing: 'ease-in-out',
  })

}




export function applyHitEffect(parentId: string, el: HTMLDivElement) {
  const parent = document.getElementById(parentId)
  if (!parent) throw new Error("Parent not found")
  parent.appendChild(el)
  const anim = el.animate(hitEffect(), { duration: 800 })
  anim.onfinish = () => el.remove()
}