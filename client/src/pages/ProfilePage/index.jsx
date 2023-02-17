import React from 'react';
import { useParams } from 'react-router-dom';
import { useQuery, useMutation } from '@apollo/client';
import { QUERY_USER, searchDeezerApi } from '../../utils/queries';
import { CREATE_MATCH } from '../../utils/mutations';
import questions from '../../utils/questions';
import Yes from './assets/yes.png';
import No from './assets/no.png';
import pin from './assets/pin.png';
import profileImage from '../../assets/profileImages/image2.png';

const UserPage = () => {
    const { userId } = useParams();
    const { loading, data } = useQuery(QUERY_USER, {
        variables: { userId: userId },
    });

    const user = data?.user || [];

    if (loading) {
        return <h2>Loading...</h2>
    }

    if (!user) {
        return <h3>No User</h3>
    }

    const [ initiateMatch, { error } ] = useMutation(CREATE_MATCH, {
        update(cache, { data: { initiateMatch } }) {
            try {
                cache.writeQuery({
                    query: QUERY_USER,
                    data: { user: initiateMatch },
                });
            } catch (err) {
                console.log(err);
            }
        }
    });

    const handleCreateMatch = async (user) => {
        try {
            const { data } = await initiateMatch({
                variables: { user }
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
                    <img src={profileImage} width={400} height={400}></img>
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
                            <img src={No}></img>
                        </a>
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
                        <p className='me-3'>{songQuestion[0].text}</p>
                        <audio controls src='https:\/\/cdns-preview-d.dzcdn.net\/stream\/c-deda7fa9316d9e9e880d2c6207e92260-10.mp3'></audio>
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