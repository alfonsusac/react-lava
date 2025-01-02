export const pulseIn = (init: number = 1.5): Keyframe[] => {
  return [
    { transform: `scale(${ init })` },
    { transform: 'scale(1)' },
  ]
}

export const fadeOut = (init: number = 1): Keyframe[] => {
  return [
    { opacity: init },
    { opacity: 0 },
  ]
}

export const fadeIn = (start: number = 0, end: number = 1): Keyframe[] => {
  return [
    { opacity: start },
    { opacity: end },
  ]
}

export const hitEffect = () => {
  const randomDeg = Math.random() * 20 - 10
  return [
    { opacity: 1, transform: `translateY(0) rotate(${ randomDeg }deg)` },
    { opacity: 0, transform: `translateY(-2rem) rotate(${ randomDeg }deg)` }
  ]
}