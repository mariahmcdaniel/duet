const { AuthenticationError } = require('apollo-server-express');
const { User, Match, Message } = require('../models');
const { signToken } = require('../utils/auth');

const resolvers = {
  Query: {
    users: async () => {
      return await User.find();
    },
    user: async (_, args) => {
      return await User.findOne({ _id: args.id });
    },
    me: async (_, _args, context) => {
      if (context.user) {
        return await User.findOne({ _id: context.user._id })
          // .populate('Match');
      }
      throw new AuthenticationError('You need to be logged in!');
    },
    messages: async (_, args, context) => {
      if (context.user) {
        return await Match.findOne({ _id: args.id })
          .populate('messages')
          .populate('sender')
          .populate('receiver')
      }
    }
  },

  Mutation: {
    addUser: async (_, args) => {
      const user = await User.create(args);
      const token = signToken(user);
      return { token, user };
    },
    login: async (_, { username, password }) => {
      const user = await User.findOne({ username });

      if (!user) {
        throw new AuthenticationError('This username does not exist!');
      }

      const correctPw = await user.isCorrectPassword(password);

      if (!correctPw) {
        throw new AuthenticationError('Incorrect credentials');
      }

      const token = signToken(user);

      return { token, user };
    },
    // userId is person you(user) has clicked check
    createMatch: async (_, { userId }, context) => {
      const match = await Match.findOne({ receiver: context.user._id })
      if (match) {

        Match.findOneAndUpdate(
          { receiver: context.user._id },
          { $set: { status: 1 } },
          { new: true })
      }
      return await Match.create({
        sender: context.user.id,
        receiver: userId,
        status: 0,
      });
    },
    createMessage: async (_, args, context) => {

    }
  }
};

module.exports = resolvers;
