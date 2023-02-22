import React, { useState } from 'react';
import { useParams, Link } from 'react-router-dom';
import { useQuery, useLazyQuery, useMutation } from '@apollo/client';
import { QUERY_USER, SEARCH_DEEZER } from '../../utils/queries';
import { CREATE_MATCH } from '../../utils/mutations';
import questions from '../../utils/questions';
import Yes from './assets/yes.png';
import No from './assets/no.png';
import pin from './assets/pin.png';
import play from './assets/play-icon.png';
import './style.css';

const UserPage = () => {
  const { userId } = useParams();
  const { loading, data } = useQuery(QUERY_USER, {
    variables: { userId: userId },
  });
  const [searchDeezer, { dataS }] = useLazyQuery(SEARCH_DEEZER);

  const songs = dataS?.searchDeezer || {};

  const [selectedSong, setSelectedSong] = useState('')
  const [songTitle, setSongTitle] = useState('')
  
  const findSong = async (event) => {
    event.preventDefault();
    try {
      const { data } = await searchDeezer({
        variables: {
          song: event.target.id
        }
      })
      await setSelectedSong(data.searchDeezer.preview);
      await setSongTitle(data.searchDeezer.title);

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

  const styles = {
    qText: {
      fontSize: "130%",
      fontWeight: 500,
    },
  };


  return (

    <div className='container' >
      <div className='row'>
        <div className='col-lg-6 col-sm-12 mt-3'>
          <img src={user.photo} width={400} height={400}></img>
        </div>
        <div className='col-lg-6 col-sm-12'>
          <h3 className='display-3 mt-3'>{user.firstName}</h3>
          <h4>{user.age} | {user.pronouns}</h4>
          <p>Interested in {user.interestedIn}.</p>
          <div className='d-flex justify-content-start'>
            <img src={pin} width={20} height={20}></img>
            <h4 className='ms-1'>{user.city}, {user.state}</h4>
          </div>
          <div>
            <a href='#' onClick={handleCreateMatch}>
              <img src={Yes}></img>
            </a>
            <a href='#'>
                <img src={No}></img>
            </a>
          </div>
          <div>

            <button className='btn btn-secondary mt-2'>
              <Link to={"/feed"} className='text-light'>
                Back to feed
                </Link>
            </button>
          </div>
        </div>
      </div>
      <hr></hr>
      <div className='row d-flex justify-content-between' style={styles.qText}>
        <div className='col-lg-8 col-sm-10'>
          <div className='p-2 songDiv'>
            <p className='me-3 songText'>{songQuestion[0].text}</p>
            <h4>{song.one}</h4>
            <img className='playBtn' src={play} onClick={findSong} id={song.one} alt="play button"/>
          </div>         
          <div className='p-2 songDiv'>
            <p className='me-3 songText'>{songQuestion[1].text}</p>
            <h4>{song.two}</h4>
            <img className='playBtn' src={play} onClick={findSong} id={song.two} alt="play button"/>
          </div>         
          <div className='p-2 songDiv'>
            <p className='me-3 songText'>{songQuestion[2].text}</p>
            <h4>{song.three}</h4>
            <img className='playBtn' src={play} onClick={findSong} id={song.three} alt="play button"/>
          </div>         
          <div className='p-2 songDiv'>
            <p className='me-3 songText'>{songQuestion[3].text}</p>
            <h4>{song.four}</h4>
            <img className='playBtn' src={play} onClick={findSong} id={song.four} alt="play button"/>
          </div>         
          <div className='p-2 songDiv'>
            <p className='me-3 songText'>{songQuestion[4].text}</p>
            <h4>{song.five}</h4>
            <img className='playBtn' src={play} onClick={findSong} id={song.five} alt="play button"/>
          </div>         
          <div className='p-2 songDiv'>
            <p className='me-3 songText'>{songQuestion[5].text}</p>
            <h4>{song.six}</h4>
            <img className='playBtn' src={play} onClick={findSong} id={song.six} alt="play button"/>
          </div>         
          <div className='p-2 songDiv'>
            <p className='me-3 songText'>{songQuestion[6].text}</p>
            <h4>{song.seven}</h4>
            <img className='playBtn' src={play} onClick={findSong} id={song.seven} alt="play button"/>
          </div>         
          <div className='p-2 songDiv'>
            <p className='me-3 songText'>{songQuestion[7].text}</p>
            <h4>{song.eight}</h4>
            <img className='playBtn' src={play} onClick={findSong} id={song.eight} alt="play button"/>
          </div>         
        </div>
        <div id="audioDiv" className='col-lg-5'>
            <p>{songTitle}</p>
            <br/>
            <audio controls src={
              selectedSong
            }></audio>
          </div>
      </div>
    </div>
  )
};

export default UserPage;