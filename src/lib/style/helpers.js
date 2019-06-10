export const breakpoints = {
  md: '48em', // 768px
  lg: '60em', // 960px
  xl: '80em', // 1280px
}

export function mq(bp = 'lg') {
  return `@media (min-width: ${breakpoints[bp]})`
}
