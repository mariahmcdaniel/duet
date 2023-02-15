const { gql } = require('apollo-server-express');

const typeDefs = gql`
  type User {
  _id: ID
  username: String!
  email: String!
  password: String!
  age: String
  city: String
  state: String
  interestedIn: String
  gender: String
  pronouns: String
  photo: String
  songAnswers: SongAnswers
  playlistAnswers: PlaylistAnswers
  }

  type Answer {
    artist: String!
    track: String!
    songClip: String!
  }

  type SongAnswers {
    songquestion1: Answer!
    songquestion2: Answer!
    songquestion3: Answer!
    songquestion4: Answer!
    songquestion5: Answer!
    songquestion6: Answer!
    songquestion7: Answer!
    songquestion8: Answer!
    songquestion9: Answer!
    songquestion10: Answer!
    songquestion11: Answer!
    songquestion12: Answer!
  }

  type PlaylistAnswers {
    playlistquestion1: Int!
    playlistquestion2: Int!
    playlistquestion3: Int!
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

  input AnswerInput {
    artist: String!
    track: String!
    songClip: String!
  }

  input SongAnswersInput {
    songquestion1: AnswerInput!
    songquestion2: AnswerInput!
    songquestion3: AnswerInput!
    songquestion4: AnswerInput!
    songquestion5: AnswerInput!
    songquestion6: AnswerInput!
    songquestion7: AnswerInput!
    songquestion8: AnswerInput!
    songquestion9: AnswerInput!
    songquestion10: AnswerInput!
    songquestion11: AnswerInput!
    songquestion12: AnswerInput!
  }

  input PlaylistAnswersInput {
    playlistquestion1: Int!
    playlistquestion2: Int!
    playlistquestion3: Int!
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
      age: String,
      city: String,
      state: String,
      interestedIn: String,
      gender: String,
      pronouns: String
      ): Auth
    updateAnswers(songAnswers: SongAnswersInput!): User
    updatePlaylist(playlistAnswers: PlaylistAnswersInput!): User
    updatePhoto(photo: String!): User
    login(username: String!, password: String!): Auth
    createMatch(userId: ID!): Match
    createMessage(matchId: ID!, text: String!): Message
  }
`;

module.exports = typeDefs;
