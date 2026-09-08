import { Router } from 'express';
import { getProducts } from '../controllers/users.controller.js';

const router = Router();

router.get('/products', getProducts);

export default router;
