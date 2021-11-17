import { hash as _hash, verify } from 'argon2';
import crypto from 'crypto-js';
const { AES, enc } = crypto;

const saveEncryptedPasswords = async (req, res) => {
	const { passwords } = req.body;
	// Get User Secret or Salt

	const hash = await _hash(passwords[0].password);
	// // const response = passwords.map((password) => {
	// // 	// Save in database
	// // 	AES.encrypt(password, secret);
	// // });

	// await console.log(hash);
	const response = await verify(hash, passwords[0].password);
	await res.json(response);
};

const decrypt = (password, secret) => {
	const decrypted = AES.decrypt(password, secret);
	return JSON.parse(decrypted.toString(enc.Utf8));
};

export { saveEncryptedPasswords };
