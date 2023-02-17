import React from 'react';
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
                <ul className="list-group">
                    {matchList.map((match) => {
                        return (
                            <li className="list-group-item d-flex justify-content-between align-items-center display-5">
                                {match.sender.username}
                                <button className="btn btn-primary">Chat</button>
                            </li>
                        );
                    })}
                </ul>
            </div>
        </div>
    );
};

export default MatchPage;