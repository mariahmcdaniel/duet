const { gql } = require('apollo-server-express');

const typeDefs = gql`
  type User {
  _id: ID
  username: String!
  email: String!
  password: String!
  dateOfBirth: Date
  city: String
  state: String
  lookingFor: String
  songAnswers: [String]
  playlistAnswers: [String]
  }

  type Match {
    _id: ID
    sender: ID
    receiver: ID
    messages: String
  }

  type Message {
    text: String
    users: ID,
    createdAt: Date
    }

  type Auth {
    token: ID!
    user: User
  }

  type Query {
    users: [User]!
    user(id: ID!): User
    me: User
    messages: Message
  }

  type Mutation {
    addUser(
      email: String!, 
      username: String!, 
      password: String!,
      dateOfBirth: Date,
      city: String,
      state: String,
      lookingFor: String,
      songAnswers: [String],
      playlistAnswers: [String],
      ): Auth
    login(username: String!, password: String!): Auth
    createMatch(userId: ID, status: Number, messageId: ID): Match
    createMessage(text: String!, userId: ID): Message
  }
`;

module.exports = typeDefs;
