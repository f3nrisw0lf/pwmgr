import crypto from 'crypto-js';

const { AES, enc } = crypto;

const saveEncryptedPasswords = async (req, res) => {
  const { passwords } = req.body;
  // Get User Secret or Salt
  const userSecret = 'ASDASD'; // SUPPOSED TO BE USER SECRET AFTER LOGIN

  const ciphered = passwords.map(({
    name, username, password, urls,
  }) => {
    const cipher = AES.encrypt(password, userSecret);

    return {
      cipherText: cipher.toString(),
      name,
      username,
      urls,
    };
  });

  await res.json(ciphered);
};

const decrypt = (req, res) => {
  const { passwords } = req.body;

  const decryptedPasswords = passwords.map(({ cipherText }) => {
    const decrypted = AES.decrypt(cipherText, 'ASDASD');
    return decrypted.toString(enc.Utf8);
  });

  res.json(decryptedPasswords);
};

export { saveEncryptedPasswords, decrypt };
