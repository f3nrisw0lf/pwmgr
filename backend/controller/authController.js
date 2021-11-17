const argon2 = require('argon2');

const signup = async (req, res) => {
	const { fname, lname, nickname, email, password } = req.body;

	// Transfrom to Hash
	const hash = await argon2.hash(password);

	// Save to Database
	// const response = await argon2.verify(hash, passwords[0].password);
	await res.json({
		fname: fname,
		lname: lname,
		nickname: nickname,
		email: email,
		hash: hash,
	});
};

const login = async (req, res) => {
	// Check in the Database
	// Create SessionID then Save it in the Database
	// res.json(SessionID)
};

module.exports = {
	signup,
};
