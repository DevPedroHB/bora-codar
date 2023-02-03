export function getPercentage(min: number, max: number): number {
  const percentage = (min * 100) / max;

  return percentage;
}
