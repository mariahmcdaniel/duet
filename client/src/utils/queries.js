import { gql } from '@apollo/client';

export const QUERY_USER = gql`
  query User($userId: ID!) {
  user(id: $userId) {
    _id
    city
    age
    email
    gender
    interestedIn
    password
    photo
    playlistAnswers {
      one
      two
      three
    }
    pronouns
    songAnswers {
      one
      two
      three
      four
      five
      six
      seven
      eight
      nine
      ten
      eleven
      twelve
    }
    state
    username
  }
}
`;

export const QUERY_USERS = gql`
  query Users {
  users {
    _id
    city
    age
    email
    gender
    interestedIn
    password
    photo
    playlistAnswers {
      one
      two
      three
    }
    pronouns
    state
    username
    songAnswers {
      one
      two
      three
      four
      five
    six
      seven
      eight
      nine
      ten
      eleven
      twelve
    }
  }
}
`;

export const QUERY_ME = gql`
  query Me {
  me {
    _id
    city
    age
    email
    gender
    interestedIn
    password
    pronouns
    state
    username
    playlistAnswers {
      one
      two
      three
    }
    songAnswers {
      one
      two
      three
      four
      five
    six
      seven
      eight
      nine
      ten
      eleven
      twelve
    }
  }
}
`;

export const QUERY_MATCHES = gql`
  query Matches {
  matches {
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

export const searchDeezerApi = (query) => {
  return fetch(`https://api.deezer.com/search?q=track:"${query}"`);
};