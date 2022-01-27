const mongoose = require('mongoose')
const { Schema } = mongoose;

const userSignupSchema = new Schema({
  email: { type: String, required: true, unique: true },
  userName: { type: String, required: true},
  password: {type: String, required: true},
});

const USER = mongoose.model('users', userSignupSchema);

module.exports = USER;