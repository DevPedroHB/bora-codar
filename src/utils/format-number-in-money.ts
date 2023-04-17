export function formatNumberInMoney(value: number) {
  const valueFormatted = new Intl.NumberFormat("pt-BR", {
    style: "currency",
    currency: "BRL",
  }).format(value);

  return valueFormatted;
}
