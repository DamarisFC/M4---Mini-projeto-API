//import unidades from '../data/unidades.json';

/*const ServicoModel = {
  getUnidades: () => unidades,
  getTiposServico: () => [...new Set(unidades.map(u => u.tipo))],
  getUnidadePorId: (id) => unidades.find(u => u.id === id)
};

export default ServicoModel;*/

import { readFileSync } from 'fs';


try {
  const unidades = JSON.parse(
    readFileSync(new URL('../data/unidades.json', import.meta.url))
  );
  console.log('Unidades carregadas com sucesso!');
} catch (error) {
  console.error('Erro ao carregar unidades:', error);
}


/*const unidades = JSON.parse(
  readFileSync(new URL('../data/unidades.json', import.meta.url))
);*/

const ServicoModel = {
  getUnidades: () => unidades,
  getTiposServico: () => [...new Set(unidades.map(u => u.tipo))],
  getUnidadePorId: (id) => unidades.find(u => u.id === id)
};

export default ServicoModel;
