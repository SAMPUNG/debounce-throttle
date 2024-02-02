# debounce-throttle

- NPM Install

```cmd
npm install @jugar/json-beautify@latest
```

- Usage

```ts
import { debounce } from '@jugar/debounce-throttle'

export const greeting = debounce((...params: unknown[]) => {
  const [str1, str2] = params as (string | undefined)[]
  console.log(str1, str2)
}

greeting('hello', 'world')
```
