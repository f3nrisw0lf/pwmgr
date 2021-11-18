import auth from './routes/auth.js';
import crypto from './routes/crypto.js';
import app from './config/app.js';

import dotenv from 'dotenv';
dotenv.config();
const { PORT = 5050 } = process.env;

app.get('/', (req, res) => {
	res.json({ asdasdasd: 'ASDASD' });
});
app.use('/crypto', crypto);
app.use('/auth', auth);

app.listen(PORT, () => {
	console.log(`Running in Port: http://localhost:${PORT}`);
});
