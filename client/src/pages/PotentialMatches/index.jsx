import React from 'react';
import { Link } from 'react-router-dom';
import { useQuery } from '@apollo/client';
import { QUERY_USERS } from '../../utils/queries';
import Questions from '../../utils/questions';
import Yes from './assets/yes.png';
import No from './assets/no.png';


const User = ({ _id, username }) => {
  return (
    <div key={_id}>
      <h4>
        <Link to={`/users/${_id}`}>
          {username}
        </Link>
      </h4>
    </div>
  );
};

const UserList = () => {

  const { loading, data } = useQuery(QUERY_USERS);
  const userList = data?.users || [];

  if (loading) {
    return <h2>Loading...</h2>
  }

  if (!userList.length) return <h3>No Users</h3>;
  return (
    <div className='container'>
      <h3>Find your Duet</h3>
      <div>
        {userList.map((user) => {
          const question = Questions[4]
          const song = user.songAnswers;
          return (
            <div className='card mb-3'>
              <img className='d-block user-select-none' src={user.photo} width='100%' height='200' role='img' />
              <p><strong>{user.username}</strong></p>
              <div className='card-body'>
                <p className='card-text'>{question}</p>
                <p className='card-text'>{song}</p>
                <button className='btn btn-info'>
                  <Link to={{ pathname: `/users/${user._id}` }}>View Full Profile</Link>
                </button>
              </div>
              <div className='card-body'>
                <button className='card-link'>
                  <img src={Yes} />
                </button>
                <button className='card-link'>
                  <img src={No} />
                </button>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
}

export default UserList;
