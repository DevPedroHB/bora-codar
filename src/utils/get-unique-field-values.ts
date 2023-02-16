export function getUniqueFieldValues<T>(
  objArray: T[],
  fieldName: keyof T
): Array<T[keyof T]> {
  const fieldValues = objArray.map((obj) => obj[fieldName]);

  const uniqueFieldValues = [...new Set(fieldValues)];

  return uniqueFieldValues.sort(function (a, b) {
    return String(a).localeCompare(String(b));
  });
}
