import UserValidate from '../middlewares/UserValidate.js';
import { Router } from 'express';
import { postCarrinho, getCarrinho, checkout } from '../Controllers/checkoutController.js';

const router = Router();

router.get('/carrinho', UserValidate, getCarrinho);
router.post('/carrinho', UserValidate, postCarrinho);
router.post('/checkout', checkout);

export default router;