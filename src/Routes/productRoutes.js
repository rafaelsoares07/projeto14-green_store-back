import { Router } from 'express';
import { produtos } from '../Controllers/productController.js';

const router = Router();

router.get('/', produtos);

export default router;