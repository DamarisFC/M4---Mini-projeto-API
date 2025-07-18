import express from 'express';
import ServicoController from '../controllers/ServicoController.js';

const router = express.Router();

router.get('/servicos/:servico', ServicoController.unidadeServico);
router.get('/tipo/:tipo', ServicoController.listarTiposServico);
router.get('/unidade/:id', ServicoController.buscarUnidadePorId);

export default router;