const { Router } = require('express');
const router = Router();

const { signup } = require('../controller/authController.js');

router.post('/signup', signup);

module.exports = router;
