import passport from 'passport';
import { Strategy as LocalStrategy } from 'passport-local';

import User from '../model/User.js';

passport.use(
	new LocalStrategy(async (email, password, cb) => {
		try {
			const query = User.findOne({ email: email });

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

export default passport;
