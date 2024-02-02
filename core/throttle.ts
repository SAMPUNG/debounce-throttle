import { DELAY } from './config'

let prev = 0

export const throttle =
  (callback: (...params: unknown[]) => void, delay: number = DELAY) =>
  (...params: unknown[]) => {
    const next = Date.now()
    if (next - prev > delay) {
      callback(...params)
      prev = next
    }
  }
