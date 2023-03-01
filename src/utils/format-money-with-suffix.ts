export function formatMoneyWithSuffix(valor: number) {
  // Definimos um array com os sufixos de cada ordem de magnitude
  const sufixos = ["", "K", "M", "B", "T"];
  // Calculamos o índice do sufixo a partir do logaritmo do valor na base 10, dividido por 3
  const sufixoIndex = Math.floor(Math.log10(valor) / 3);
  // Calculamos o valor formatado, dividindo o valor pelo divisor correspondente à ordem de magnitude,
  // formatando o resultado com uma casa decimal, e substituindo o ponto por vírgula
  let valorFormatado = (valor / Math.pow(1000, sufixoIndex))
    .toFixed(sufixoIndex > 0 ? 1 : 0)
    .replace(".", ",");
  // Se o valor formatado terminar em ",0", removemos os caracteres ",0" do final
  if (valorFormatado.slice(-2) === ",0") {
    valorFormatado = valorFormatado.slice(0, -2);
  }
  // Concatenamos o prefixo "R$ ", o valor formatado e o sufixo correspondente ao índice calculado
  return `R$ ${valorFormatado}${sufixos[sufixoIndex]}`;
}
