export declare const debounce: (
  callback: (...params: unknown[]) => void,
  delay?: number,
  immediate?: boolean
) => (...params: unknown[]) => void

export declare const throttle: (
  callback: (...params: unknown[]) => void,
  delay?: number
) => (...params: unknown[]) => void
