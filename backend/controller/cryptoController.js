const { AES, enc } = require('crypto-js');

const encryptPassword = (req, res) => {
	const password = '123';
	const ciphertext = AES.encrypt(password, 'SECRET');
	const decrypt = AES.decrypt(ciphertext, 'SECRET');
	const decryptString = JSON.parse(decrypt.toString(enc.Utf8));
	res.json({
		password: password,
		encrypted: ciphertext.toString(),
		decrypted: decryptString,
	});
};

module.exports = {
	encryptPassword,
};
