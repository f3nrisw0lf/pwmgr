import { Router } from 'express';
import { signup, logout } from '../controller/authController.js';
import passport from '../config/passport.js';

const router = Router();

router.post('/signup', signup);

router.get('/login-failed', (_req, res) => res.json('Login Failed'));

router.get('/login-success', (_req, res) => res.json('Login Successful'));

router.get('/logout', logout);

router.post(
  '/login',
  passport.authenticate('local', {
    failureRedirect: '/auth/login-failed',
    successRedirect: '/auth/login-success',
  }),
);

export default router;
