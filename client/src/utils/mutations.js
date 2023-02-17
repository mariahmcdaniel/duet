import { gql } from '@apollo/client';

export const LOGIN_USER = gql`
  mutation login($username: String!, $password: String!) {
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
  mutation addUser($email: String!, $username: String!, $password: String!, $age: String, $city: String, $state: String, $interestedIn: String, $gender: String, $pronouns: String, $firstName: String!, $lastName: String!) {
  addUser(email: $email, firstName: $firstName, lastName: $lastName, username: $username, password: $password, age: $age, city: $city, state: $state, interestedIn: $interestedIn, gender: $gender, pronouns: $pronouns) {
    token
    user {
      _id
      username
    }
  }
}
`;

export const DELETE_USER = gql`
  mutation deleteUser {
  deleteUser {
    _id
    username
  }
}
`;

export const UPDATE_ANSWERS = gql`
mutation updateAnswers($songAnswers: SongAnswersInput!) {
  updateAnswers(songAnswers: $songAnswers) {
    _id
    username
  }
}
`;

export const UPDATE_PLAYLIST = gql`
  mutation updatePlaylist($playlistAnswers: PlaylistAnswersInput!) {
  updatePlaylist(playlistAnswers: $playlistAnswers) {
    _id
    username
  }
}
`;

export const CREATE_MATCH = gql`
  mutation createMatch($userId: ID!) {
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
mutation createMessage($matchId: ID!, $text: String!) {
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

export const UPDATE_PHOTO = gql`
  mutation addPhoto($photo: String!) {
  updatePhoto(photo: $photo) {
    _id
    username
  }
}
`