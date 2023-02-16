import React from 'react';
import { Link } from 'react-router-dom';
import { useQuery } from '@apollo/client';
import { QUERY_USER } from '../../utils/queries';
import questions from '../../utils/questions';
import Yes from './assets/yes.png';
import No from './assets/no.png';
import pin from './assets/pin.png';

const UserPage = () => {
    const { loading, data } = useQuery(QUERY_USER);
    const user = data?.user || [];

    if (loading) {
        return <h2>Loading...</h2>
    }

    if (!user) {
        return <h3>No User</h3>
    }

    const songQuestion = questions.songQuestions;
    const playlistQuestion = questions.playlistQuestion;
    const song = user.songAnswers;
    return (

        <div className='container'>
            <div className='row'>
                <div className='col-6'>
                    <img src={user.photo}></img>
                </div>
                <div className='col-6'>
                    <h3>{user.username}</h3>
                    <h4>{user.age} | {user.pronouns}</h4>
                    <p>Interested in {user.interestedIn}.</p>
                    <div>
                        <img src={pin}></img>
                        <h4>{user.city}, {user.state}</h4>
                    </div>
                    <div>
                        <a href='#'>
                            <img src={Yes}></img>
                        </a>
                        <a href='#'>
                            <img src={No}></img>
                        </a>
                    </div>
                </div>
            </div>
            <hr></hr>
            <div className='row'>
                <div className='col'>
                    <div className='d-flex justify-content-start'>
                        <p>{playlistQuestion[0]}</p>
                        <img src={user.playlistAnswers.one}></img>
                    </div>
                    <div className='d-flex justify-content-end'>
                        <p>{songQuestion[0]}</p>
                        <audio controls src={song.one.preview}></audio>
                    </div>
                    <div className='d-flex justify-content-start'>
                        <p>{playlistQuestion[1]}</p>
                        <img src={user.playlistAnswers.two}></img>
                    </div>
                    <div className='d-flex justify-content-end'>
                        <p>{songQuestion[1]}</p>
                        <audio controls src={song.two.preview}></audio>
                    </div>
                    <div className='d-flex justify-content-start'>
                        <p>{songQuestion[2]}</p>
                        <audio controls src={song.three.preview}></audio>
                    </div>
                    <div className='d-flex justify-content-end'>
                        <p>{playlistQuestion[2]}</p>
                        <img src={user.playlistAnswers.three}></img>
                    </div>
                    <div className='d-flex justify-content-start'>
                        <p>{songQuestion[3]}</p>
                        <audio controls src={song.four.preview}></audio>
                    </div>
                    <div className='d-flex justify-content-end'>
                        <p>{songQuestion[4]}</p>
                        <audio controls src={song.five.preview}></audio>
                    </div>
                    <div className='d-flex justify-content-start'>
                        <p>{songQuestion[5]}</p>
                        <audio controls src={song.six.preview}></audio>
                    </div>
                    <div className='d-flex justify-content-end'>
                        <p>{songQuestion[6]}</p>
                        <audio controls src={song.seven.preview}></audio>
                    </div>
                    <div className='d-flex justify-content-start'>
                        <p>{songQuestion[7]}</p>
                        <audio controls src={song.eight.preview}></audio>
                    </div>
                    <div className='d-flex justify-content-end'>
                        <p>{songQuestion[8]}</p>
                        <audio controls src={song.nine.preview}></audio>
                    </div>
                    <div className='d-flex justify-content-start'>
                        <p>{songQuestion[9]}</p>
                        <audio controls src={song.ten.preview}></audio>
                    </div>
                    <div className='d-flex justify-content-end'>
                        <p>{songQuestion[10]}</p>
                        <audio controls src={song.eleven.preview}></audio>
                    </div>
                    <div className='d-flex justify-content-start'>
                        <p>{songQuestion[11]}</p>
                        <audio controls src={song.twelve.preview}></audio>
                    </div>
                </div>
            </div>
        </div>
    )
};

export default UserPage;