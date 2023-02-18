const { gql } = require('apollo-server-express');

const typeDefs = gql`
  type User {
  _id: ID
  firstName: String!
  lastName: String!
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
    one: String!
    two: String!
    three: String!
    four: String!
    five: String!
    six: String!
    seven: String!
    eight: String!
  }

  type PlaylistAnswers {
    one: Int!
    two: Int!
    three: Int!
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

  type Artist {
    id: ID
    name: String
  }

  type Album {
    id: ID
    cover_medium: String
  }

  type Deezer {
    id: ID
    title: String
    preview: String
    artist: Artist
    album: Album
  }

  input AnswerInput {
    artist: String!
    track: String!
    songClip: String!
  }

  input SongAnswersInput {
    one: String!
    two: String!
    three: String!
    four: String!
    five: String!
    six: String!
    seven: String!
    eight: String!
  }

  input PlaylistAnswersInput {
    one: Int!
    two: Int!
    three: Int!
  }

  type Query {
    users: [User]!
    user(id: ID!): User
    me: User
    matches: [Match]
    searchDeezer(song: String!): Deezer
  }

  type Mutation {
    addUser(
      firstName: String!,
      lastName: String!,
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
    deleteUser: User
    updateAnswers(songAnswers: SongAnswersInput!): User
    updatePlaylist(playlistAnswers: PlaylistAnswersInput!): User
    updatePhoto(photo: String!): User
    login(username: String!, password: String!): Auth
    createMatch(userId: ID!): Match
    createMessage(matchId: ID!, text: String!): Message
  }
`;

module.exports = typeDefs;