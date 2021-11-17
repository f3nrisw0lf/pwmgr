const mongoose = require('mongoose');

const { Schema } = mongoose;

const requiredString = { type: String, required: true };

const userSchema = new Schema({
	fname: String,
	lname: String,
	nickname: String,
	email: requiredString,
	password: requiredString,
	secret: requiredString,
	dateOfCreation: Date,
	passwords: [
		{
			_id: String,
			name: String,
			urls: [
				{
					host: String,
				},
			],
			username: String,
			password: String,
			dateCreated: Date,
		},
	],
});

const User = mongoose.model('User', userSchema);

module.exports = User;
