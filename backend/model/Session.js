const mongoose = require('mongoose');

const { Schema } = mongoose;

const requiredString = { type: String, required: true };

const sessionSchema = new Schema({
	UserID: String,
});

const Session = mongoose.model('Session', sessionSchema);

module.exports = Session;
