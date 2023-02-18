import React from 'react';
import { Link } from 'react-router-dom';

const DeletedAcctMessage = () => {
    return (
        <div>
            <div className='row'>
                <div className='d-flex justify-content-center mt-3'>
                    <h4>Your account has been deleted!</h4>
                </div>
            </div>
            <div className='row'>
                <div className='d-flex justify-content-center'>
                    <button id="deletedAcct" className='btn btn-primary'><Link to={{ pathname: '/'}} className='text-light'>Back to Home</Link></button>
                </div>
            </div>
        </div>
    );
};

export default DeletedAcctMessage;