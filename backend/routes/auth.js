import { Router } from 'express';
import { signup, logout } from '../controller/authController';
import passport from '../config/passport';

const router = Router();

router.post('/signup', signup);

router.get('/login-failed', (req, res) => res.json('Login Failed'));

router.get('/login-success', (req, res) => res.json('Login Successful'));

router.get('/logout', logout);
router.post(
  '/login',
  passport.authenticate('local', {
    failureRedirect: '/auth/login-failed',
    successRedirect: '/auth/login-success',
  }),
);

export default router;
