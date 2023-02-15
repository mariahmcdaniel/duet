import { gql } from '@apollo/client';

export const QUERY_USER = gql`
  query User($userId: ID!) {
  user(id: $userId) {
    _id
    city
    dateOfBirth
    email
    gender
    interestedIn
    password
    playlistAnswers {
      playlistquestion1
      playlistquestion2
      playlistquestion3
    }
    pronouns
    songAnswers {
      songquestion1 {
        artist
        songClip
        track
      }
      songquestion2 {
        artist
        songClip
        track
      }
      songquestion3 {
        artist
        songClip
        track
      }
      songquestion4 {
        artist
        songClip
        track
      }
      songquestion5 {
        artist
        songClip
        track
      }
      songquestion6 {
        artist
        songClip
        track
      }
      songquestion7 {
        artist
        songClip
        track
      }
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
    dateOfBirth
    email
    gender
    interestedIn
    password
    playlistAnswers {
      playlistquestion1
      playlistquestion2
      playlistquestion3
    }
    pronouns
    state
    username
    songAnswers {
      songquestion1 {
        artist
        songClip
        track
      }
      songquestion2 {
        artist
        songClip
        track
      }
      songquestion3 {
        artist
        songClip
        track
      }
      songquestion4 {
        artist
        songClip
        track
      }
      songquestion5 {
        artist
        songClip
        track
      }
      songquestion6 {
        artist
        songClip
        track
      }
      songquestion7 {
        artist
        songClip
        track
      }
    }
  }
}
`;

export const QUERY_ME = gql`
  query Me {
  me {
    _id
    city
    dateOfBirth
    email
    gender
    interestedIn
    password
    pronouns
    state
    username
    playlistAnswers {
      playlistquestion1
      playlistquestion2
      playlistquestion3
    }
    songAnswers {
      songquestion1 {
        artist
        songClip
        track
      }
      songquestion2 {
        artist
        songClip
        track
      }
      songquestion3 {
        artist
        songClip
        track
      }
      songquestion4 {
        artist
        songClip
        track
      }
      songquestion5 {
        artist
        songClip
        track
      }
      songquestion6 {
        artist
        songClip
        track
      }
      songquestion7 {
        artist
        songClip
        track
      }
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
