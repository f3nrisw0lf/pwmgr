const { AES } = require('crypto-js');

const saveEncryptedPasswords = (req, res) => {
	const { passwords } = res.data;

	// Get User Secret or Salt

	passwords.forEach((password) => {
		// Save in database
		AES.encrypt(password, secret);
	});
};

module.exports = {
	saveEncryptedPasswords,
};
