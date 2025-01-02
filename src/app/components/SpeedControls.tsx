import { useState, type SVGProps } from "react";
import { Button } from "../ui/Button";

export function useSpeedControl() {
  const speeds = [0.1, 0.25, 0.5, 1] as const
  const [speed, _setSpeed] = useState(3)
  const makeFaster = () => {
    _setSpeed(prev => {
      if (prev < speeds.length - 1) { return prev + 1 }
      return prev
    })
  }
  const makeSlower = () => {
    _setSpeed(prev => {
      if (prev > 0) { return prev - 1 }
      return prev
    })
  }
  return {
    speed: speeds[speed],
    makeFaster,
    makeSlower
  }
}


export function SpeedControl(props: {
  speed: number,
  makeSlower: () => void,
  makeFaster: () => void,
}) {
  return (
    <div className="h-full flex gap-2 items-center"
      // @ts-expect-error --bg is a css variable
      style={{ "--bg": "#171F2B" }}
    >
      <Button className="outline-transparent" onClick={props.makeSlower} id="makeslower">
        <MaterialSymbolsFastRewind />
      </Button>
      <div className="w-16 text-end bg-black/20 p-2 rounded-md" id="speeddisplay">
        {`${ props.speed ?? 1 }x`}
      </div>
      <Button className="outline-transparent" onClick={props.makeFaster} id="makefaster">
        <MaterialSymbolsFastForward />
      </Button>
    </div>
  )
}


export function MaterialSymbolsFastForward(props: SVGProps<SVGSVGElement>) {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" width="1em" height="1em" viewBox="0 0 24 24" {...props}><path fill="currentColor" d="M2.5 18V6l9 6zm10 0V6l9 6z"></path></svg>
  )
}

export function MaterialSymbolsFastRewind(props: SVGProps<SVGSVGElement>) {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" width="1em" height="1em" viewBox="0 0 24 24" {...props}><path fill="currentColor" d="m21.5 18l-9-6l9-6zm-10 0l-9-6l9-6z"></path></svg>
  )
}

