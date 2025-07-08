
import { readFileSync } from 'fs';

let unidades = [];

try {
  unidades = JSON.parse(
    readFileSync(new URL('../data/unidades.json', import.meta.url))
  );
  console.log('Unidades carregadas com sucesso!');
} catch (error) {
  console.error('Erro ao carregar unidades:', error);
}

const ServicoModel = {
  getUnidades: () => unidades,
  getTiposServico: () => [...new Set(unidades.map(u => u.servico))],
  getUnidadePorId: (id) => unidades.find(u => u.id === id)
};

export default ServicoModel;

console.log (ServicoModel.getTiposServico());
