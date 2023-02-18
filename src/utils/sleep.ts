export function sleep(segundos: number) {
  return new Promise((resolve) => setTimeout(resolve, segundos * 1000));
}
