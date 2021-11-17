import { Router } from 'express';
const router = Router();

import { saveEncryptedPasswords } from '../controller/cryptoController.js';

router.post('/encrypt', saveEncryptedPasswords);

export default router;
