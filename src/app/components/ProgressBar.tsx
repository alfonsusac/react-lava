import { cn } from "lazy-cn";
import { useRef, type ComponentProps } from "react";
import { fadeOut } from "../lib/keyframes";

export function ProgressBarBase({ className, ...props }: ComponentProps<"div">) {
  return (
    <div className={cn(
      "h-1 overflow-hidden bg-black/20 -mx-4 relative shrink-0",
      className,
    )} {...props}>
    </div>
  )
}

export function createProgressBase(progressBarContainerNode: HTMLDivElement | null | undefined) {
  if (!progressBarContainerNode) return
  const progress = document.createElement("div")
  progress.className = "h-1 bg-gradient-to-r from-[#FFD27100] to-[#D4420Dbb] transition-all w-full top-0 absolute"
  progress.id = `progress-${ Math.random().toString(25).slice(2, 9) }`
  progressBarContainerNode.appendChild(progress)
  return {
    start: (duration: number = 200) => {
      progress.animate([
        { width: "0" },
        { width: "100%" }
      ], { duration, fill: "forwards" })
      const endAnim = progress.animate(fadeOut(), { delay: duration, duration: 500, fill: "forwards" })
      endAnim.onfinish = () => progress.remove()
    }
  }
}

export function useProgressBar() {
  const progressBarRef = useRef<HTMLDivElement>(null)

  const ProgressBar = (props: ComponentProps<"div">) => {
    return <ProgressBarBase {...props} ref={progressBarRef} />
  }
  const createProgress = () => {
     return createProgressBase(progressBarRef.current)
  }

  return {
    ProgressBar,
    createProgress
  }
}