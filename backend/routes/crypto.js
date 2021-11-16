const { Router } = require('express');
const router = Router();

const { saveEncryptedPasswords } = require('../controller/cryptoController.js');

router.post('/encrypt', saveEncryptedPasswords);

module.exports = router;
