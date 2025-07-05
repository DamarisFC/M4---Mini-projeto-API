import express from 'express';
//import cors from 'cors';
import servicoRoutes from './routes/servicoRoutes.js';

const app = express();
const PORT = 3000;

//app.use(cors());
app.use(express.json());

app.use('/api', servicoRoutes);

app.listen(PORT, () => {
  console.log(`Servidor rodando na porta ${PORT}`);
});