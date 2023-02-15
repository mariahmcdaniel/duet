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
        .populate('Match');
      }
      throw new AuthenticationError('You need to be logged in!');
    },
    messages: async (_, args, context) => {
      if (context.user) {
        return await Match.findOne({_id: args.id})
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
    }
  }
};

module.exports = resolvers;
