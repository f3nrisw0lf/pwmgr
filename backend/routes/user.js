import { Router } from 'express';
import { savePasswords, decrypt, getUserData } from '../controller/userController.js';

const router = Router();

router.post('/add-password', savePasswords);

router.get('/decrypt-password', decrypt);

router.get('/user-data', getUserData);

export default router;
