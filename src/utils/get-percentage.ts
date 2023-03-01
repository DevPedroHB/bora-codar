export function getPercentage(min: number, max: number): number {
  const percentage = (min * 100) / max;

  // Se o resultado é um número inteiro, retornamos o número como um inteiro
  if (Number.isInteger(percentage)) {
    return percentage;
  }

  // Caso contrário, retornamos o número com duas casas decimais como uma string
  return Number(percentage.toFixed(2));
}
