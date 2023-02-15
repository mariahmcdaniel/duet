import { gql } from '@apollo/client';

export const LOGIN_USER = gql`
  mutation Login($username: String!, $password: String!) {
  login(username: $username, password: $password) {
    token
    user {
      _id
      username
    }
  }
}
`;

export const ADD_USER = gql`
  mutation AddUser($email: String!, $username: String!, $password: String!, $dateOfBirth: String, $city: String, $state: String, $interestedIn: String) {
  addUser(email: $email, username: $username, password: $password, dateOfBirth: $dateOfBirth, city: $city, state: $state, interestedIn: $interestedIn) {
    token
    user {
      _id
      username
    }
  }
}
`;

export const UPDATE_ANSWERS = gql`
mutation UpdateAnswers($songAnswers: SongAnswersInput!) {
  updateAnswers(songAnswers: $songAnswers) {
    _id
    username
  }
}
`;

export const UPDATE_PLAYLIST = gql`
  mutation UpdatePlaylist($playlistAnswers: PlaylistAnswersInput!) {
  updatePlaylist(playlistAnswers: $playlistAnswers) {
    _id
    username
  }
}
`;

export const CREATE_MATCH = gql`
  mutation CreateMatch($userId: ID!) {
  createMatch(userId: $userId) {
    _id
    status
    receiver {
      _id
      username
    }
    sender {
      _id
      username
    }
    messages {
      createdAt
      sender {
        _id
        username
      }
      text
    }
  }
}
`;

export const CREATE_MESSAGE = gql`
mutation CreateMessage($matchId: ID!, $text: String!) {
  createMessage(matchId: $matchId, text: $text) {
    createdAt
    sender {
      _id
      username
    }
    text
  }
}
`;