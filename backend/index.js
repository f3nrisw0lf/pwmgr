import dotenv from 'dotenv';
import auth from './routes/auth';
import crypto from './routes/crypto';
import app from './config/app';

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
