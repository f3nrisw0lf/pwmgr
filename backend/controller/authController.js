import { hash as _hash } from 'argon2';
import User from '../model/User.js';

const signup = async (req, res) => {
  const { nickname, email, password } = req.body;

  // Transfrom to Hash
  const hash = await _hash(password);
  const secret = await _hash(hash);

  // Save to Database
  try {
    const isUserNotExisting = !(await User.exists({ email }));

    if (isUserNotExisting) {
      const query = new User({
        nickname,
        email,
        password: hash,
        secret,
      });

      await query.save();
      await res.json('Successful');
    } else res.json('Existing');
  } catch {
    res.json('Error');
  }
};

const logout = (req, res) => {
  // console.log(req.session.passport.user);
  req.logout();
  res.json({ code: 200, message: 'Logged Out' });
  // console.log(req.session.passport.user);
};

export { signup, logout };
