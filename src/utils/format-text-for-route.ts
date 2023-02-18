export function formatTextForRoute(text: string, id: string | number) {
  const textFormatted = text
    .toLowerCase() // Coloca todo o texto em letras minúsculas.
    .normalize("NFD") // Normaliza a string para remover qualquer diacrítico.
    .replace(/[\u0300-\u036f]/g, "") // Essa expressão regular faz a remoção de acentos e diacríticos.
    .replace(/([^\w]+|\s+)/g, "-") // Remove quaisquer carácteres especiais e espaços em branco e substitui por um hífen.
    .replace(/^-+/, "") // Remove hifens no início.
    .replace(/-+$/, ""); // Remove hifens no final.

  const route = textFormatted + "." + id;

  return route;
}
