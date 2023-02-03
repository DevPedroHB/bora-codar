export function formatRandomNumberInMinutes(
  defaultValue: string,
  separator: string,
  index: number
): string {
  if (defaultValue.length === 2) {
    defaultValue = `00${defaultValue}`;
  } else if (defaultValue.length === 3) {
    defaultValue = `0${defaultValue}`;
  }

  const formatted =
    defaultValue.substring(0, index) +
    separator +
    defaultValue.substring(index);

  return formatted;
}
