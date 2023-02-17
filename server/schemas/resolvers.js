const { AuthenticationError, ApolloError } = require('apollo-server-express');
const { User, Match, Message } = require('../models');
const { signToken } = require('../utils/auth');
const axios = require('axios');

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
          $or: [{ sender: context.user._id }, { receiver: context.user._id }],
          status: 1
        })
          .populate('messages')
          .populate('sender')
          .populate('receiver')
      }
    },
    searchDeezer: async (_parent, args) => {
      const {data} = await axios.get(
        `https://api.deezer.com/search/track/?q="${args.song}"&index=0&limit=2&output=json"`,
        {
          mode: "no-cors",
        });
      return data.data[0]
    }
  },

  Mutation: {
    addUser: async (_, args) => {
      const user = await User.create(args);
      const token = signToken(user);
      return { token, user };
    },
    deleteUser: async (_parent, _args, context) => {
      if (context.user) {
        return User.findOneAndDelete({ _id: context.user._id });
      }
      throw new AuthenticationError('You need to be logged in!');
    },
    updateAnswers: async (_, args, context) => {
      console.log(args)
      if (context.user) {
        return await User.findOneAndUpdate(
          { _id: context.user._id }, 
          { songAnswers: args.songAnswers }, 
          { new: true })
          
      } else {
        throw new AuthenticationError('You must be logged in to send messages');
      }
    },
    updatePlaylist: async (_, args, context) => {
      console.log(args)
      if (context.user) {
        return await User.findOneAndUpdate(
          { _id: context.user._id }, 
          { playlistAnswers: args.playlistAnswers }, 
          { new: true })
      } else {
        throw new AuthenticationError('You must be logged in to send messages');
      }
    },
    updatePhoto: async (_, args, context) => {
      if (context.user) {
        return await User.findOneAndUpdate(
          { _id: context.user._id }, 
          { $set: args },
          { new: true })
      } else {
        throw new AuthenticationError('You must be logged in to send messages');
      }
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
      if (userId === context.user._id) return new ApolloError("You can't match with yourself!");

      const checkMatch = await Match.findOne({ sender: context.user._id, receiver: userId });
      if (checkMatch) return new ApolloError("You've already matched with this user");

      let match = await Match.findOneAndUpdate(
        { receiver: context.user._id, sender: userId },
        { $set: { status: 1 } },
        { new: true })
      if (match) {
        match = await match.populate('sender');
        match = await match.populate('receiver');
        console.log(match)
        return match;
      }
      return await Match.create({
        sender: context.user._id,
        receiver: userId,
        status: 0,
      });
    },
    createMessage: async (_, args, context) => {
      if (context.user) {
        const message = await Message.create(
          { sender: context.user._id, text: args.text });
        const match = await Match.findOneAndUpdate(
          { _id: args.matchId },
          { $push: { messages: message._id } });
        return message.populate('sender');
      } else {
        throw new AuthenticationError('You must be logged in to send messages');
      }
    }
  }
};

module.exports = resolvers;
