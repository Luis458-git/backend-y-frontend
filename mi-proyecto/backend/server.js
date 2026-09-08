import express from 'express';
import cors from 'cors';
import productsRoutes from './src/routes/products.routes.js';

const app = express();
const PORT = 5000;

app.use(cors());
app.use(express.json());
app.use('/api', productsRoutes);

app.listen(PORT, () => {
  console.log(`Servidor disponible en http://localhost:${PORT}`);
});
