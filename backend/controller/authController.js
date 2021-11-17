import { hash as _hash } from 'argon2';
import User from '../model/User.js';

const signup = async (req, res) => {
	const { fname, lname, nickname, email, password } = req.body;

	// Transfrom to Hash
	const hash = await _hash(password);
	const secret = await _hash(hash);

	// Save to Database
	try {
		const isUserNotExisting = !(await User.exists({ email: email }));

		if (isUserNotExisting) {
			const query = new User({
				fname: fname,
				lname: lname,
				nickname: nickname,
				email: email,
				password: hash,
				secret: secret,
			});

			const save = await query.save();
			await res.json(save);
		} else res.json('Existing');
	} catch {
		res.json('Error');
	}
};

const login = async (req, res) => {
	// Check in the Database
	const { email, password } = req.body;

	try {
	} catch {
		res.json('ERROR');
	}
};

export { signup, login };