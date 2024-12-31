export const pulseIn = (init: number = 1.5): Keyframe[] => {
  return [
    { transform: `scale(${init})` },
    { transform: 'scale(1)' },
  ]
}

export const fadeOut = (init: number = 1): Keyframe[] => {
  return [
    { opacity: init },
    { opacity: 0 },
  ]
}