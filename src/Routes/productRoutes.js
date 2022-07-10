import { Router } from 'express';
import { produtos, cadastrarProdutos, cadastrarProduto } from '../Controllers/productController.js';

const router = Router();

router.get('/', produtos);
router.post('/cadastrarProdutos', cadastrarProdutos);
router.post('/cadastrarProduto', cadastrarProduto);

export default router;