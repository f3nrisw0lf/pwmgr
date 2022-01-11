import mongoose from 'mongoose';

const { Schema } = mongoose;

const requiredString = { type: String, required: true };

const userSchema = new Schema({
  nickname: String,
  email: requiredString,
  password: requiredString,
  secret: requiredString,
  dateOfCreation: Date,
  passwords: [
    {
      _id: String,
      name: String,
      urls: [String],
      username: String,
      password: String,
      dateCreated: Date,
    },
  ],
});

const User = mongoose.model('User', userSchema);

export default User;
