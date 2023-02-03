export function formatRandomNumberInMinutes(
  defaultValue: string,
  separator: string,
  index: number
): string {
  defaultValue = defaultValue.padStart(4, "0");

  const formatted =
    defaultValue.substring(0, index) +
    separator +
    defaultValue.substring(index);

  return formatted;
}
