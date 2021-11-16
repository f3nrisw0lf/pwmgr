const { AES, enc } = require('crypto-js');

const saveEncryptedPasswords = (req, res) => {
	const { passwords } = res.data;

	// Get User Secret or Salt

	const response = passwords.map((password) => {
		// Save in database
		AES.encrypt(password, secret);
	});

	res.json(response);
};

const decrypt = (password, secret) => {
	const decrypted = AES.decrypt(password, secret);
	return JSON.parse(decrypted.toString(enc.Utf8));
};

module.exports = {
	saveEncryptedPasswords,
};
