import React from 'react';
import { Link } from 'react-router-dom';
import { useQuery } from '@apollo/client';
import { QUERY_USERS } from '../../utils/queries';
import questions from '../../utils/questions';
import Yes from './assets/yes.png';
import No from './assets/no.png';
// import './style.css';


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

const findSong = async (song) => {
  try{
    const response = await searchDeezerApi(song)
    const { items } = await response.json()
    const songInfo = items.map((song) => ({
      title: song.title,
      album: song.album,
      artist: song.artist,
      filename: song.preview,
      art: song.album.picture
    }))
    console.log(songInfo)
    return songInfo
  }catch (err) {
    console.error(err);
  }

}

const UserList = () => {

  const { loading, data } = useQuery(QUERY_USERS);
  const userList = data?.users || [];

  if (loading) {
    return <h2>Loading...</h2>
  }

  if (!userList.length) return <h3>No Users</h3>;
  return (
    <div className='container potentials'>
      <div className='m-5 row'>
        {userList.map((user) => {
          const question = questions.songQuestions[4].text;
          const song = user.songAnswers;
          console.log(song)
          return (
            <div key={user._id} className='card mb-3 col-sm-12'>
              <img className='d-block user-select-none' src={user.photo} width='100%' height='200' role='img' />
              <div className='card-body d-flex justify-content-center'>
                <h4>{user.username}</h4>
              </div>
              <div className='d-flex justify-content-center'>
                <p className='card-text'>Question: {question}</p>
              </div>
              <div className='d-flex justify-content-center mt-3'>
                {/* <p className='card-text'>Answer Goes Here {song.four}</p> */}
              </div>
              <div className= 'd-flex justify-content-center mt-4'>
                <button className='btn btn-info'>
                  <Link to={{ pathname: `/users/${user._id}` }}>View Full Profile</Link>
                </button>
              </div>
              <div className='card-body d-flex justify-content-center'>
                <a href='#'>
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
