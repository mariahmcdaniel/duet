import React, { useState } from 'react';
import { useParams, Link } from 'react-router-dom';
import { useQuery, useLazyQuery, useMutation } from '@apollo/client';
import { QUERY_USER, SEARCH_DEEZER } from '../../utils/queries';
import { CREATE_MATCH } from '../../utils/mutations';
import questions from '../../utils/questions';
import Yes from './assets/yes.png';
import No from './assets/no.png';
import pin from './assets/pin.png';
import './style.css';

const UserPage = () => {
  const { userId } = useParams();
  const { loading, data } = useQuery(QUERY_USER, {
    variables: { userId: userId },
  });
  const [searchDeezer, { dataS }] = useLazyQuery(SEARCH_DEEZER);

  const songs = dataS?.searchDeezer || {};

  const [selectedSong, setSelectedSong] = useState('')
  
  const findSong = async (event) => {
    event.preventDefault();
    try {
      // not destructuring
      // const mySearchDeezerData = await searchDeezer({ ...})
      // const data = mySearchDeezerData.data;
      const { data } = await searchDeezer({
        variables: {
          song: event.target.id
        }
      })
      console.log("API SEARCH",data)
      console.log("SONGS",songs)


      await setSelectedSong(data.searchDeezer.preview);

    } catch (e) {
      console.error(e);
    }
  }

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

  const user = data?.user || [];

  if (loading) {
    return <h2>Loading...</h2>
  }

  if (!user) {
    return <h3>No User</h3>
  }


  const handleCreateMatch = async (user) => {
    try {
      const { data } = await createMatch({
        variables: { userId }
      });
    } catch (err) {
      console.log(err);
    }
  };

  const songQuestion = questions.songQuestions;
  const playlistQuestion = questions.playlistQuestions;
  const song = user.songAnswers;

  return (

    <div className='container'>
      <div className='row'>
        <div className='col-6 mt-3'>
          <img src={user.photo} width={400} height={400}></img>
        </div>
        <div className='col-6'>
          <h3 className='display-3 mt-3'>{user.username}</h3>
          <h4>{user.age} | {user.pronouns}</h4>
          <p>Interested in {user.interestedIn}.</p>
          <div>
            <img src={pin} width={20} height={20}></img>
            <h4>{user.city}, {user.state}</h4>
          </div>
          <div>
            <a href='#' onClick={handleCreateMatch}>
              <img src={Yes}></img>
            </a>
            <a href='#'>
              {/* <Link to={"/feed"}> */}
                <img src={No}></img>
              {/* </Link> */}
            </a>
          </div>
          <div>

            <button className='btn btn-primary'>
              <Link to={"/feed"}>
                Back to feed
                </Link>
            </button>
          </div>
        </div>
      </div>
      <hr></hr>
      <div className='row'>
        <div className='col'>
          {/* <div className='d-flex justify-content-center'>
                        <p>{playlistQuestion[0]}</p>
                        <img src={user.playlistAnswers.one}></img>
                    </div> */}
          <div className='d-flex justify-content-center'>
            <p className='me-3' id={song.four.preview} onClick={findSong}>{songQuestion[0].text}</p>
            <p>{selectedSong}</p>
            <audio controls src={
              selectedSong
            }></audio>
          </div>
          {/* <div className='d-flex justify-content-center'>
                        <p>{playlistQuestion[1]}</p>
                        <img src={user.playlistAnswers.two}></img>
                    </div> */}
          {/* <div className='d-flex justify-content-center'>
                        <p>{songQuestion[1].text}</p>
                        <audio controls src={song.two.preview}></audio>
                    </div>
                    <div className='d-flex justify-content-center'>
                        <p>{songQuestion[2].text}</p>
                        <audio controls src={song.three.preview}></audio>
                    </div>
                    <div className='d-flex justify-content-center'>
                        <p>{playlistQuestion[2]}</p>
                        <img src={user.playlistAnswers.three}></img>
                    </div>
                    <div className='d-flex justify-content-start'>
                        <p>{songQuestion[3].text}</p>
                        <audio controls src={song.four.preview}></audio>
                    </div>
                    <div className='d-flex justify-content-end'>
                        <p>{songQuestion[4].text}</p>
                        <audio controls src={song.five.preview}></audio>
                    </div>
                    <div className='d-flex justify-content-start'>
                        <p>{songQuestion[5].text}</p>
                        <audio controls src={song.six.preview}></audio>
                    </div>
                    <div className='d-flex justify-content-end'>
                        <p>{songQuestion[6].text}</p>
                        <audio controls src={song.seven.preview}></audio>
                    </div>
                    <div className='d-flex justify-content-start'>
                        <p>{songQuestion[7].text}</p>
                        <audio controls src={song.eight.preview}></audio>
                    </div>
                    <div className='d-flex justify-content-end'>
                        <p>{songQuestion[8].text}</p>
                        <audio controls src={song.nine.preview}></audio>
                    </div>
                    <div className='d-flex justify-content-start'>
                        <p>{songQuestion[9].text}</p>
                        <audio controls src={song.ten.preview}></audio>
                    </div>
                    <div className='d-flex justify-content-end'>
                        <p>{songQuestion[10].text}</p>
                        <audio controls src={song.eleven.preview}></audio>
                    </div>
                    <div className='d-flex justify-content-start'>
                        <p>{songQuestion[11].text}</p>
                        <audio controls src={song.twelve.preview}></audio>
                    </div> */}
        </div>
      </div>
    </div>
  )
};

export default UserPage;