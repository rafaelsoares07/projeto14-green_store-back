import { Router } from 'express'; 
import { login, cadastro } from '../Controllers/authController';

const router = Router();

router.post('/login', login);
router.post('/cadastro', cadastro);

export default router;