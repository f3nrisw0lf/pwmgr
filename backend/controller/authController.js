import { hash as _hash } from 'argon2';
import User from '../model/User.js';

const signup = async (req, res) => {
  const { fname, lname, nickname, email, password } = req.body;

  // Transfrom to Hash
  const hash = await _hash(password);
  const secret = await _hash(hash);

  // Save to Database
  try {
    const isUserNotExisting = !(await User.exists({ email }));

    if (isUserNotExisting) {
      const query = new User({
        fname,
        lname,
        nickname,
        email,
        password: hash,
        secret,
      });

      const save = await query.save();
      await res.json(save);
    } else res.json('Existing');
  } catch {
    res.json('Error');
  }
};

const logout = (req, res) => {
  // console.log(req.session.passport.user);
  req.logout();
  res.json({ message: 'Logged Out' });
  // console.log(req.session.passport.user);
};

export { signup, logout };
