import crypto from 'crypto-js';
import mongoose from 'mongoose';

const { AES } = crypto;

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

const encryptPassword = async (password, secret) => {
  // Get User Secret or Salt
  const cipher = AES.encrypt(password, secret);

  return cipher;
};
export { encryptPasswords, encryptPassword };
