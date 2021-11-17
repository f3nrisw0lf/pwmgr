const argon2 = require('argon2');
const User = require('../model/User.js');

const signup = async (req, res) => {
	const { fname, lname, nickname, email, password } = req.body;

	// Transfrom to Hash
	const hash = await argon2.hash(password);
	const secret = await argon2.hash(hash);

	// Save to Database
	try {
		const isNotExisting = !(await User.exists({ email: email }));

		if (isNotExisting) {
			const query = new User({
				fname: fname,
				lname: lname,
				nickname: nickname,
				email: email,
				password: hash,
				secret: secret,
			});

			const save = await query.save();
			// const response = await argon2.verify(hash, passwords[0].password);
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
		const query = await User.findOne({ email: email });

		if (!query) return res.json('Email not Found');

		if (await argon2.verify(query.password, password)) return res.json('AUTH SUCCESSFUL');

		return res.json('Incorrect Password');
	} catch {
		res.json('ERROR');
	}
};

module.exports = {
	signup,
	login,
};
