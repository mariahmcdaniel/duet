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
    sender: ID
    receiver: ID
    status: Int
    messages: ID
  }

  type Message {
    text: String
    users: ID,
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
    messages: Message
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
    createMatch(userId: ID): Match
    createMessage(text: String!): Message
  }
`;

module.exports = typeDefs;
