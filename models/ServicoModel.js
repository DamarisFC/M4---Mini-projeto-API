//import unidades from '../data/unidades.json';

/*const ServicoModel = {
  getUnidades: () => unidades,
  getTiposServico: () => [...new Set(unidades.map(u => u.tipo))],
  getUnidadePorId: (id) => unidades.find(u => u.id === id)
};

export default ServicoModel;*/

import { readFileSync } from 'fs';

const unidades = JSON.parse(
  readFileSync(new URL('../data/unidades.json', import.meta.url))
);

const ServicoModel = {
  getUnidades: () => unidades,
  getTiposServico: () => [...new Set(unidades.map(u => u.tipo))],
  getUnidadePorId: (id) => unidades.find(u => u.id === id)
};

export default ServicoModel;
