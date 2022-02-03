import { Router } from 'express';

import {
  savePasswords,
  getUserData,
  deletePassword,
  updatePassword,
} from '../controller/userController.js';

const router = Router();

router.post('/add-password', savePasswords);

router.post('/update-password', updatePassword);

router.post('/delete-password', deletePassword);

router.get('/me', getUserData);

export default router;
