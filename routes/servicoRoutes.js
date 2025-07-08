import express from 'express';
import ServicoController from '../controllers/ServicoController.js';

const router = express.Router();

router.get('/servicos/:cep', ServicoController.unidadeServico);
router.get('/tipos-servico', ServicoController.listarTiposServico);
router.get('/unidade/:id', ServicoController.buscarUnidadePorId);

export default router;