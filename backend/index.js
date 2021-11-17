import express, { json } from 'express';
import session from 'express-session';
import cors from 'cors';
import passport from './middleware/passport.js';

import { DB_CONNECTION } from './middleware/database.js';
import MongoStore from 'connect-mongo';

import auth from './routes/auth.js';
import crypto from './routes/crypto.js';

import dotenv from 'dotenv';
dotenv.config();
const { PORT = 5050, SECRET } = process.env;

const app = express();
app.use(cors());
app.use(json());
app.use(
	session({
		secret: SECRET,
		resave: false,
		saveUninitialized: false,
		store: MongoStore.create({
			client: DB_CONNECTION,
			mongoOptions: {
				useUnifiedTopology: true,
			},
		}),
	}),
);

app.use(passport.initialize());
app.use(passport.session());

app.get('/', (req, res) => {
	res.json({ asdasdasd: 'ASDASD' });
});
app.use('/crypto', crypto);
app.use('/auth', auth);

app.listen(PORT, () => {
	console.log(`Running in Port: http://localhost:${PORT}`);
});
