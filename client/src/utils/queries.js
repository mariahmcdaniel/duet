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
    }
    state
    username
    firstName
    lastName
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
    firstName
    lastName
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
    photo
    state
    username
    firstName
    lastName
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

export const SEARCH_DEEZER = gql`
  query searchDeezer($song: String!) {
  searchDeezer(song: $song) {
    id
    title
    preview
    artist {
      id
      name
    }
    album {
      id
      cover_medium
    }
  }
}
`;
