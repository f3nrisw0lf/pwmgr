import crypto from 'crypto-js';

import User from '../model/User.js';
import { encryptPasswords } from './cryptoController.js';

const { AES, enc } = crypto;

const savePasswords = async (req, res) => {
  const { user } = req.session.passport;
  const { passwords } = req.body;
  // GET THE PASSWORD
  // If there is User that's Logged
  if (req.isAuthenticated()) {
    const { secret, _id } = await User.findById(user);
    const ciphered = await encryptPasswords(passwords, secret);

    const query = await User.findByIdAndUpdate(
      { _id },
      { $push: { passwords: ciphered } }
    );

    return res.json(JSON.stringify(await query));
  }

  return res.json('NOT AUTH');
};

const deletePassword = async (req, res) => {
  const { passwordID } = req.body;
  const userID = req.session.passport.user;

  const query = await User.findOneAndUpdate(
    { _id: userID },
    { $pull: { passwords: { _id: passwordID } } }
  );

  return res.json(await query);
};

const updatePassword = async (req, res) => {
  const { password } = req.body;
  const query = await User.findOneAndUpdate(
    // eslint-disable-next-line no-underscore-dangle
    { 'passwords._id': password._id },
    { $set: { 'passwords.$': password } }
  );

  return res.json(query);
};

const decrypt = (req, res) => {
  const { passwords } = req.body;

  const decryptedPasswords = passwords.map(({ cipherText }) => {
    const decrypted = AES.decrypt(cipherText, 'ASDASD');
    return decrypted.toString(enc.Utf8);
  });

  res.json(decryptedPasswords);
};

const getUserData = async (req, res) => {
  if (req.isAuthenticated()) {
    const userID = req.session.passport.user;
    const { passwords, secret } = await User.findById(userID);

    const decryptedPasswords = passwords.map((password) => {
      const decrypted = AES.decrypt(password.password, secret);
      return {
        _id: password._id,
        name: password.name,
        urls: password.urls,
        username: password.username,
        password: decrypted.toString(enc.Utf8),
      };
    });

    return res.json({ passwords: decryptedPasswords });
  }

  return res.json(req.isAuthenticated());
};

export { savePasswords, decrypt, getUserData, deletePassword, updatePassword };
