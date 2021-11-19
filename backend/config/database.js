import mongoose from 'mongoose';

const { connect, connection } = mongoose;
const { MONGO_URI = 'mongodb://localhost:27017/pwmgr' } = process.env;

connect(MONGO_URI, {
  useUnifiedTopology: true,
});

const DB_CONNECTION = connection.getClient();
DB_CONNECTION.on('error', console.error.bind(console, 'connection error:'));
DB_CONNECTION.once('open', () => {
  console.log('CONNECTED!');
});

export default DB_CONNECTION;
