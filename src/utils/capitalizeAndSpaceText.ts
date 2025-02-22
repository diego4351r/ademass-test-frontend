export function capitalizeAndSpaceText(text: string) {
  // Dividir la cadena en palabras usando guion o guion bajo como separador
  const palabras = text.split(/-|_/)

  // Capitalizar la primera letra de la primera palabra
  palabras[0] = palabras[0].charAt(0).toUpperCase() + palabras[0].slice(1)

  // Unir las palabras con espacios en blanco
  let resultado = palabras.join(' ')

  // Agregar ":" al final de la última palabra
  resultado = resultado.replace(/([^ ]+)$/, '$1:')

  return resultado
}
