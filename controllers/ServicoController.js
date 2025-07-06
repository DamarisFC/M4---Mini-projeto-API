import axios from 'axios';
import ServicoModel from '../models/ServicoModel.js';
import calcularDistancia from '../utils/calcularDistancia.js';

const obterCoordenadasPorCep = async (cep) => {
  const { data } = await axios.get(`https://viacep.com.br/ws/${cep}/json/`);
  const endereco = `${data.logradouro}, ${data.localidade} - ${data.uf}`;
  const response = await axios.get(
    `https://nominatim.openstreetmap.org/search?format=json&q=${encodeURIComponent(endereco)}`
  );
  const resultado = response.data[0];
  return {
    lat: parseFloat(resultado.lat),
    lon: parseFloat(resultado.lon)
  };
};

const ServicoController = {
  buscarServicosProximos: async (req, res) => {
    const { cep } = req.params;
    //if (!cep) return res.status(400).json({ erro: 'CEP é obrigatório' });

    try {
      const localUsuario = await obterCoordenadasPorCep(cep);
      const unidades = ServicoModel.getUnidades();
      const unidadesComDistancia = unidades.map(u => ({
        ...u,
        //distancia_km: calcularDistancia(localUsuario, u.coordenadas)

        distancia_km: calcularDistancia(localUsuario, {
          lat: u.latitude,
          lon: u.longitude
        })


      }));
      const proximas = unidadesComDistancia.sort((a, b) => a.distancia_km - b.distancia_km).slice(0, 5);
      res.json(proximas);
    } catch (err) {
      res.status(500).json({ erro: 'Erro ao buscar localização via CEP' });
    }
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