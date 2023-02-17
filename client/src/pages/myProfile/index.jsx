import React from 'react';
import { useParams } from 'react-router-dom';
import { useQuery } from '@apollo/client';
import { useMutation } from '@apollo/client';
import { QUERY_ME } from '../../utils/queries';
import { DELETE_USER } from '../../utils/mutations';
import questions from '../../utils/questions';
import Yes from './assets/yes.png';
import No from './assets/no.png';
import pin from './assets/pin.png';
import profileImage from '../../assets/profileImages/image2.png';

const MyPage = () => {
    const { userId } = useParams();
    
    const [deleteUser, { error }] = useMutation(DELETE_USER);

    const handleDeleteUser = async (user) => {
        try {
            const { data } = await deleteUser({
                variables: { user }
            });
            window.location.replace('/accountDeleted');
        } catch (err) {
            console.log(err);
        }
    }
    
    const { loading, data } = useQuery(QUERY_ME, {
        variables: { _id: userId }
    });

    const user = data?.me || {};

    if (loading) {
        return <h2>Loading...</h2>
    }

    if (!user) {
        return <h3>No User</h3>
    }

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
            <div className='d-flex justify-content-center'>
                <button onClick={() => {handleDeleteUser(user)}} className='btn btn-primary'>Delete Account</button>
            </div>
        </div>
    )
};

export default MyPage;