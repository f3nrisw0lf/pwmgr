const express = require('express');
const cors = require('cors');

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
