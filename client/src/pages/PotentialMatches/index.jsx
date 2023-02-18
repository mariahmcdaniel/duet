import React from 'react';
import { Link } from 'react-router-dom';
import { useQuery, useMutation } from '@apollo/client';
import { QUERY_USERS, QUERY_USER } from '../../utils/queries';
import { CREATE_MATCH } from '../../utils/mutations';
import questions from '../../utils/questions';
import Yes from './assets/yes.png';
import No from './assets/no.png';
import './style.css';


const UserList = () => {

  const { loading, data } = useQuery(QUERY_USERS);
  const userList = data?.users || [];

  const [createMatch, { error }] = useMutation(CREATE_MATCH, {
    update(cache, { data: { createMatch } }) {
      try {
        cache.writeQuery({
          query: QUERY_USER,
          data: { user: createMatch },
        });
      } catch (err) {
        console.log(err);
      }
    }
  });

  const handleCreateMatch = async (user) => {
    try {
      const { data } = await createMatch({
        variables: { userId }
      });
    } catch (err) {
      console.log(err);
    }
  };

  if (loading) {
    return <h2>Loading...</h2>
  }

  if (!userList.length) return <h3>No Users</h3>;
  return (
    <div className='container potentials'>
      <div className='m-5 row'>
        {userList.map((user) => {
          const question = questions.songQuestions[3].text;
          const song = user.songAnswers;
          return (
            <div key={user._id} className='card mb-3 col-sm-12 potCard'>
              <img className='potImg d-block user-select-none' src={user.photo} width='80%' role='img' />
              <div className='card-body d-flex justify-content-center'>
                <h4 className='display-4'>{user.firstName}</h4>
              </div>
              <div className='d-flex justify-content-center'>
                <p className='card-text m-3 justify-content-center'>If {user.firstName}'s life was a movie, "{song.four}" would be the theme song.</p>
              </div>
              <div className= 'd-flex justify-content-center mt-4'>
                <button className='btn btn-info'>
                  <Link to={{ pathname: `/users/${user._id}` }}>View Full Profile</Link>
                </button>
              </div>
              <div className='card-body d-flex justify-content-center'>
                <a href='#' onClick={handleCreateMatch}>
                  <img src={Yes}></img>
                </a>
                <a href='#'>
                  <img src={No}></img>
                </a>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
}

export default UserList;
