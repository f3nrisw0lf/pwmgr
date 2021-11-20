import { Router } from 'express';
import { savePasswords, decrypt } from '../controller/userController.js';

const router = Router();

router.post('/add-password', savePasswords);
router.get('/decrypt-password', decrypt);

export default router;
