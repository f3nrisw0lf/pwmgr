import crypto from 'crypto-js';

import User from '../model/User.js';
import { encryptPasswords } from './cryptoController.js';

const { AES, enc } = crypto;

const savePasswords = async (req, res) => {
  const { passwords } = req.body;
  // Get User Secret or Salt
  const userSecret = 'ASDASD'; // SUPPOSED TO BE USER SECRET AFTER LOGIN
  const userID = '6198f379f4707d001e9cee51'; // SUPOSSED TO BE USER ID THAT'S LOGGED IN
  const ciphered = encryptPasswords(passwords, userSecret);

  const query = await User.findByIdAndUpdate(
    { _id: userID },
    { $push: { passwords: ciphered } }
  );

  res.json(JSON.stringify(await query));
};

const decrypt = (req, res) => {
  const { passwords } = req.body;

  const decryptedPasswords = passwords.map(({ cipherText }) => {
    const decrypted = AES.decrypt(cipherText, 'ASDASD');
    return decrypted.toString(enc.Utf8);
  });

  res.json(decryptedPasswords);
};

export { savePasswords, decrypt };
