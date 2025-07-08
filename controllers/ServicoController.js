import ServicoModel from '../models/ServicoModel.js';
import calcularDistancia from '../utils/calcularDistancia.js';
import { filterByProperty } from '../utils/filtrarPropriedade.js';

const ServicoController = {

  unidadeServico:(req,res) =>{
  const {servico} = req.params;
  const unidadeServicos = filterByProperty("servico", servico)
  res.json(unidadeServicos);
  },

  listarTiposServico: (req, res) => {
    const tipos = ServicoModel.getTiposServico();
    res.json(tipos);
  },

  buscarUnidadePorId: (req, res) => {
    const id = parseInt(req.params.id);
    const unidade = ServicoModel.getUnidadePorId(id);
    if (!unidade) return res.status(404).json({ erro: 'Unidade não encontrada' });
    res.json(unidade);
  }
};

export default ServicoController;