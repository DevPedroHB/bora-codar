export function getRandomInt(min: number, max: number): number {
  min = Math.ceil(min);
  max = Math.floor(max);

  const numberRandom = Math.floor(Math.random() * (max - min) + min);

  return numberRandom;
}
