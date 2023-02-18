const { Schema, model, Questions } = require('mongoose');
const bcrypt = require('bcrypt');
const { playlistQuestionSchema, songQuestionSchema } = require('./Questions');


const userSchema = new Schema({
  firstName: {
    type: String,
    required: true,
    trim: true,
  },
  lastName: {
    type: String,
    required: true,
    trim: true,
  },
  username: {
    type: String,
    required: true,
    unique: true,
    trim: true,
  },
  email: {
    type: String,
    required: true,
    unique: true,
    match: [/.+@.+\..+/, 'Must match an email address!'],
  },
  password: {
    type: String,
    required: true,
    minlength: 5,
  },
  age: {
    type: Number,
  },
  city: {
    type: String,
    required: true,
  },
  state: {
    type: String,
    required: true,
  },
  interestedIn: {
    type: String,
  },
  gender: {
    type: String
  },
  pronouns: {
    type: String
  },
  photo: {
    type: String
  },
  songAnswers: songQuestionSchema,

  playlistAnswers: playlistQuestionSchema,

  // matches: [{
  //   type: Schema.Types.ObjectId,
  //   ref: 'Match',
  // }]

});

userSchema.pre('save', async function (next) {
  if (this.isNew || this.isModified('password')) {
    const saltRounds = 10;
    this.password = await bcrypt.hash(this.password, saltRounds);
  }
  next();
});

userSchema.methods.isCorrectPassword = async function (password) {
  return bcrypt.compare(password, this.password);
};

const User = model('User', userSchema);

module.exports = User;
