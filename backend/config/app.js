import express, { json } from 'express';
import cors from 'cors';
import MongoStore from 'connect-mongo';
import session from 'express-session';
import passport from './passport';

import DB_CONNECTION from './database';

const { SECRET = 'SECRET' } = process.env;
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
      collectionName: 'sessions',
      mongoOptions: {
        useUnifiedTopology: true,
      },
    }),
  }),
);

app.use(passport.initialize());
app.use(passport.session());

export default app;
