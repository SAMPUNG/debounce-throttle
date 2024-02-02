import { DELAY } from './config'

let timer: NodeJS.Timeout | null = null

export const debounce =
  (
    callback: (...params: unknown[]) => void,
    delay: number = DELAY,
    immediate: boolean = false
  ) =>
  (...params: unknown[]) => {
    if (timer) {
      clearTimeout(timer)
    }
    if (immediate) {
      callback(...params)
    }

    timer = setTimeout(() => {
      if (!immediate) {
        callback(...params)
      }
      timer = null
    }, delay)
  }
