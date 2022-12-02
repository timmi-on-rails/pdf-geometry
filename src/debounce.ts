export function debounce(f: Function, timeout: number) {
  let timer

  return () => {
    clearTimeout(timer)
    timer = setTimeout(()=> { f() }, timeout)
  }
}
