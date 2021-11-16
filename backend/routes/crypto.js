const { Router } = require('express');
const router = Router();

const { encryptPassword } = require('../controller/cryptoController.js');

router.post('/encrypt', encryptPassword);

module.exports = router;
