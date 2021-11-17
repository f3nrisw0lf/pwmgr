const express = require('express');
const cors = require('cors');
const mongoose = require('mongoose');

require('dotenv').config();
const { MONGO_URI } = process.env;

mongoose.connect('mongodb://localhost:27017/pwmgr', {
	useUnifiedTopology: true,
});

const db = mongoose.connection;
db.on('error', console.error.bind(console, 'connection error:'));
db.once('open', () => {
	console.log('CONNECTED!');
});

const app = express();
const PORT = process.env.port || 5050;

const crypto = require('./routes/crypto.js');
const auth = require('./routes/auth.js');

app.use(cors());
app.use(express.json());

app.get('/', (req, res) => {
	res.json({ asdasdasd: 'ASDASD' });
});
app.use('/crypto', crypto);
app.use('/auth', auth);

app.listen(PORT, () => {
	console.log(`Running in Port: https://localhost:${PORT}`);
});
