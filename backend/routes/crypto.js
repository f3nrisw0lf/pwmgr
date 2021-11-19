import { Router } from 'express';
import { saveEncryptedPasswords, decrypt } from '../controller/cryptoController';

const router = Router();

router.post('/encrypt', saveEncryptedPasswords);
router.get('/decrypt', decrypt);

export default router;
