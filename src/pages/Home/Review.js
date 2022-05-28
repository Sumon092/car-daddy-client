import React from 'react';
import { useAuthState } from 'react-firebase-hooks/auth';
import auth from '../../firebase.init';

const Review = ({ review }) => {
    const [user] = useAuthState(auth)
    const { ratings, reviewText, name, email } = review;
    return (
        <div class="card bg-primary lg:w-96 lg:max-w-lg mb-10 rounded-none text-neutral-content">
            <div class="card-body items-center text-center">
                <h2 class="card-title text-white">{name}</h2>
                <p className='text-center text-neutral'>{email}</p>
                <p className='text-center text-white'>{ratings}</p>
                <span className="text-white">rating : {reviewText}</span>
            </div>
        </div>
    );
};

export default Review;