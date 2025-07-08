

// const unidades = JSON.parse(
//   fs.readFileSync('./data/unidades.json', 'utf-8')
// );

// export function filterByProperty(property, nameProperty){
//     // Converte a primeira letra em maiúscula e as seguintes letras da string em minúscula
//     const capitalizedGenre = nameProperty.charAt(0).toUpperCase() + nameProperty.slice(1).toLowerCase();

//     // Retorna os objetos que contenham a propriedade escolhida e verifica se essa propriedade é um array ou não
//     return unidades.filter((obj) => {
//         const prop = obj[property];
        
//         if (Array.isArray(prop)) {
//             return prop.some((p) => p.toLowerCase().startsWith(capitalizedGenre.toLowerCase()));
//         } else if (typeof prop === 'string') {
//             return prop.toLowerCase().startsWith(capitalizedGenre.toLowerCase());
//         }
//     });
// } 
//import fs from 'fs';
import { readFileSync } from 'fs';

export function filterByProperty(property, value) {
  const data = readFileSync('./unidades.json', 'utf-8'); // Lê o arquivo JSON
  const unidades = JSON.parse(data); // Converte para objeto JS

  const capitalized = value.charAt(0).toUpperCase() + value.slice(1).toLowerCase();

  return unidades.filter((obj) => {
    const prop = obj[property];

    if (Array.isArray(prop)) {
      return prop.some((p) =>
        p.toLowerCase().includes(capitalized.toLowerCase())
      );
    } else if (typeof prop === 'string') {
      return prop.toLowerCase().includes(capitalized.toLowerCase());
    }
    return false;
  });
}

