export const sleep = async (ms: number) => new Promise((r) => setTimeout(r, ms))

export const waitFor = async (f: () => Promise<any>, n = 1000) => {
  let res
  while (!res) {
    res = await f()
    await sleep(n)
  }
  return res
}

export function waitForWithBreak<T>(
  f: () => Promise<T | null>,
  n = 1000,
  err = ''
): [() => Promise<T>, () => void] {
  let isStopping = false
  const stop = () => {
    isStopping = true
  }
  let promise = new Promise<T>((resolve, reject) => {
    const then: (res: T | null) => void = (res: T) => {
      return res
        ? resolve(res)
        : isStopping
        ? reject(err)
        : sleep(n).then(f).then(then)
    }
    f().then(then)
  })
  return [() => promise, stop]
}

export function createPromise(): [Promise<unknown>, (u?: unknown) => void] {
  let resolver: (u?: unknown) => void
  return [
    //@ts-ignore
    new Promise((resolve, reject) => {
      resolver = resolve
    }),
    //@ts-ignore
    resolver
  ]
}
