import React from 'react';
import { useParams } from 'react-router-dom';
import { useQuery } from '@apollo/client';
import { useMutation } from '@apollo/client';
import { QUERY_ME } from '../../utils/queries';
import { DELETE_USER } from '../../utils/mutations';
import questions from '../../utils/questions';
import pin from './assets/pin.png';
import './style.css';

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
                <div className='col-lg-6 col-sm-12 mt-3'>
                    <img src={user.photo} width={400} height={400}></img>
                </div>
                <div className='col-lg-6 col-sm-12'>
                    <h3 className='display-3 mt-3'>{user.firstName}</h3>
                    <h4>{user.age} | {user.pronouns}</h4>
                    <p>Interested in {user.interestedIn}.</p>
                    <div>
                        <h4><img src={pin} width={20} height={20}></img> {user.city}, {user.state}</h4>
                    </div>
                </div>
            </div>
            <hr></hr>
            <div className='d-flex justify-content-center'>
                <button id="deleteAccount" onClick={() => {handleDeleteUser(user)}} className='btn btn-primary'>Delete Account</button>
            </div>
        </div>
    )
};

export default MyPage;