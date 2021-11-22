import { Router } from 'express';

import {
  savePasswords,
  decrypt,
  getUserData,
  deletePassword,
} from '../controller/userController.js';

const router = Router();

router.post('/add-password', savePasswords);

router.post('/delete-password', deletePassword);

router.get('/decrypt-password', decrypt);

router.get('/user-data', getUserData);

export default router;
