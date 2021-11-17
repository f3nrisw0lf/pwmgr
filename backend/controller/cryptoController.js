const { AES, enc } = require('crypto-js');
const argon2 = require('argon2');

const saveEncryptedPasswords = async (req, res) => {
	const { passwords } = req.body;
	// Get User Secret or Salt

	const hash = await argon2.hash(passwords[0].password);
	// // const response = passwords.map((password) => {
	// // 	// Save in database
	// // 	AES.encrypt(password, secret);
	// // });

	// await console.log(hash);
	const response = await argon2.verify(hash, passwords[0].password);
	await res.json(response);
};

const decrypt = (password, secret) => {
	const decrypted = AES.decrypt(password, secret);
	return JSON.parse(decrypted.toString(enc.Utf8));
};

module.exports = {
	saveEncryptedPasswords,
};
