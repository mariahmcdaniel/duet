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
    searchUsers(term: String!): [User]!
    me: User
  }

  type Mutation {
    addUser(email:String!, username:String!, password:String!): Auth
    login(email:String!, password:String!): Auth
  }
`;

module.exports = typeDefs;
