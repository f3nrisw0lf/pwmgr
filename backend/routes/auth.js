const { Router } = require('express');
const router = Router();

const { signup, login } = require('../controller/authController.js');

router.post('/signup', signup);
router.post('/login', login);

module.exports = router;
