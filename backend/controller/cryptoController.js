import crypto from 'crypto-js';

const { AES, enc } = crypto;

const encryptPasswords = (passwords) => {
  // Get User Secret or Salt
  const userSecret = 'ASDASD'; // SUPPOSED TO BE USER SECRET AFTER LOGIN

  const ciphered = passwords.map(({
    name, username, password, urls,
  }) => {
    const cipher = AES.encrypt(password, userSecret);

    return {
      password: cipher.toString(),
      name,
      username,
      urls,
    };
  });

  return ciphered;
};

const decrypt = (req, res) => {
  const { passwords } = req.body;

  const decryptedPasswords = passwords.map(({ cipherText }) => {
    const decrypted = AES.decrypt(cipherText, 'ASDASD');
    return decrypted.toString(enc.Utf8);
  });

  res.json(decryptedPasswords);
};

export { encryptPasswords, decrypt };
