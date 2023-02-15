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
    matches: async (_, args, context) => {
      if (context.user) {
        return await Match.find({ 
          $or: [{ sender: context.user._id },{ receiver: context.user._id }],
          status: 1
         })
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
      const match = await Match.findOne({ receiver: context.user._id, sender: userId })
      if (match) {

        Match.findOneAndUpdate(
          { receiver: context.user._id, sender: userId },
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
        if (context.user) {
          const message = await Message.create({ sender: context.user._id, text: args.text });
          const match = await Match.findOneAndUpdate({ _id: args.matchId }, { $push: { messages: message._id } });
          return message;
        } else {
          throw new AuthenticationError('You must be logged in to send messages');
        }
    }
  }
};

module.exports = resolvers;
