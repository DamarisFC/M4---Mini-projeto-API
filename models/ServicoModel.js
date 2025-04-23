import unidades from '../data/unidades.json' assert { type: "json" };

const ServicoModel = {
  getUnidades: () => unidades,
  getTiposServico: () => [...new Set(unidades.map(u => u.tipo))],
  getUnidadePorId: (id) => unidades.find(u => u.id === id)
};

export default ServicoModel;