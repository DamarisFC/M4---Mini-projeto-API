import { readFileSync } from 'fs';

export function filterByProperty(property, value) {
  const data = readFileSync('./data/unidades.json', 'utf-8'); // Lê o arquivo JSON
  const unidades = JSON.parse(data); // Converte para objeto JS

  const capitalized = value.charAt(0).toUpperCase() + value.slice(1).toLowerCase();

  return unidades.filter((obj) => {
    const prop = obj[property];

    if (Array.isArray(prop)) {
      return prop.some((p) =>
        p.toLowerCase().startsWith(capitalized.toLowerCase())
      );
    } else if (typeof prop === 'string') {
      return prop.toLowerCase().startsWith(capitalized.toLowerCase());
    }
    return false;
  });
}

