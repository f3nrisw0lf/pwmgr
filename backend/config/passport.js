import passport from 'passport';
import argon2 from 'argon2';
import { Strategy as LocalStrategy } from 'passport-local';

import User from '../model/User';

passport.use(
  new LocalStrategy(async (username, password, cb) => {
    try {
      const query = await User.findOne({ email: username });

      // If User is not found
      if (!query) return cb(null, false);

      // Password Auth
      if (await argon2.verify(query.password, password)) return cb(null, query);

      return cb(null, false);
    } catch (error) {
      return cb(error);
    }
  }),
);

passport.serializeUser(({ _id: userID }, cb) => {
  cb(null, userID);
});

passport.deserializeUser((userID, cb) => {
  User.findById(userID, (err, user) => {
    if (err) return cb(err);

    return cb(null, user);
  });
});

export default passport;
