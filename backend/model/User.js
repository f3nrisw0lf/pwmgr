const mongoose = require('mongoose');

const { Schema } = mongoose;

const requiredString = { type: String, required: true };

const userSchema = new Schema({
	name: String,
	username: requiredString,
	password: requiredString,
	secret: requiredString,
	dateOfCreation: Date,
});

const User = mongoose.model('User', userSchema);

module.exports = User;
