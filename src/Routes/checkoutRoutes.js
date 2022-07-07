import { Router } from 'express';
import { carrinho, checkout } from '../Controllers/checkoutController.js';

const router = Router();

router.get('/carrinho', carrinho);
router.post('/checkout', checkout);

export default router;