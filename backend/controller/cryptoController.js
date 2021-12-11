import crypto from 'crypto-js';
import mongoose from 'mongoose';
import User from '../model/User.js';

const { AES, enc } = crypto;

const encryptPasswords = async (passwords, secret) => {
  // Get User Secret or Salt
  const ciphered = passwords.map(({ name, username, password, urls }) => {
    const cipher = AES.encrypt(password, secret);

    return {
      _id: mongoose.Types.ObjectId(),
      password: cipher.toString(),
      name,
      username,
      urls,
    };
  });

  return ciphered;
};

const decrypt = async (req, res) => {
  const { user } = req.session.passport;

  const { passwords } = await User.findById(user);

  const decryptedPasswords = passwords.map(async (password) => {
    const decrypted = AES.decrypt(password.cipher, 'ASDASD');
    return decrypted.toString(enc.Utf8);
  });

  res.json(decryptedPasswords);
};

export { encryptPasswords, decrypt };
