const { gql } = require('apollo-server-express');

const typeDefs = gql`
  type User {
  _id: ID
  username: String!
  email: String!
  password: String!
  dateOfBirth: String
  city: String
  state: String
  lookingFor: String
  songAnswers: [String]
  playlistAnswers: [String]
  }

  type Match {
    _id: ID
    sender: User
    receiver: User
    status: Int
    messages: [Message]
  }

  type Message {
    text: String
    sender: User,
    createdAt: String
    }

  type Auth {
    token: ID!
    user: User
  }

  type Query {
    users: [User]!
    user(id: ID!): User
    me: User
    matches: [Match]
  }

  type Mutation {
    addUser(
      email: String!, 
      username: String!, 
      password: String!,
      dateOfBirth: String,
      city: String,
      state: String,
      lookingFor: String,
      songAnswers: [String],
      playlistAnswers: [String],
      ): Auth
    login(username: String!, password: String!): Auth
    createMatch(userId: ID!): Match
    createMessage(matchId: ID!, text: String!): Message
  }
`;

module.exports = typeDefs;
