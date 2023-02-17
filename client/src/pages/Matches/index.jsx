import React from 'react';
import { useParams } from 'react-router-dom';
import { useQuery } from '@apollo/client';
import { QUERY_MATCHES } from '../../utils/queries';

const MatchPage = () => {
    const { loading, data } = useQuery(QUERY_MATCHES);
    const matchList = data?.matches || [];

    if (loading) {
        return <h2>Loading...</h2>
    }

    if (!matchList.length) return <h3>No matches yet!</h3>;

    return (
        <div className='container'>
            <div className='m-5 row'>
                {matchList.map((match) => {
                    return (
                        <div className='card mb-3 col-sm-12'>
                            <div className='d-flex justify-content-start'>
                                <h4>{match.sender.username}</h4>
                            </div>
                            <div className='d-flex justify-content-end'>
                                <button className='btn btn-primary'>Chat</button>
                            </div>
                        </div>
                    );
                })}
            </div>
        </div>
    );
};

export default MatchPage;