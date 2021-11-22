import crypto from 'crypto-js';

import User from '../model/User.js';
import { encryptPasswords } from './cryptoController.js';

const { AES, enc } = crypto;

const savePasswords = async (req, res) => {
  const { passwords } = req.body;
  // Get User Secret or Salt
  // const userSecret = 'ASDASD'; // SUPPOSED TO BE USER SECRET AFTER LOGIN
  // const userID = '6198f379f4707d001e9cee51'; // SUPOSSED TO BE USER ID THAT'S LOGGED IN

  const userID = req.session.passport.user;

  // If there is User that's Logged
  if (userID) {
    const { secret } = await User.findById(userID);
    const ciphered = encryptPasswords(passwords, secret);

    const query = await User.findByIdAndUpdate(
      { _id: userID },
      { $push: { passwords: ciphered } },
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
    { $pull: { passwords: { _id: passwordID } } },
  );

  return res.json(await query);
};

const updatePassword = async (req, res) => {
  const { password } = req.body;
  const query = await User.findOneAndUpdate(
    // eslint-disable-next-line no-underscore-dangle
    { 'passwords._id': password._id },
    { $set: { 'passwords.$': password } },
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
    return res.json(await User.findById(userID));
  }
  return res.json('NOT AUTH');
};

export {
  savePasswords,
  decrypt,
  getUserData,
  deletePassword,
  updatePassword,
};
