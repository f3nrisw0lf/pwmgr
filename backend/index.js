import dotenv from 'dotenv';
import app from './config/app.js';

import auth from './routes/auth.js';
import user from './routes/user.js';

dotenv.config();
const { PORT = 5050 } = process.env;

app.get('/', (req, res) => {
  res.json({ asdasdasd: 'ASDASD' });
});
app.use('/user', user);
app.use('/auth', auth);

app.listen(PORT, () => {
  console.log(`Running in Port: http://localhost:${PORT}`);
});
