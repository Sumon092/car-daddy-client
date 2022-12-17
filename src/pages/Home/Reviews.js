import React from 'react';
import { useQuery } from 'react-query';
import Loading from '../Shared/Loading';
import Review from './Review';

const Reviews = () => {
    const { data: reviews, isLoading, refetch } = useQuery('reviews', () => fetch('https://car-daddy-server.vercel.app/reviews', {
    }).then(res => res.json()));
    if (isLoading) {
        return <Loading></Loading>
    }
    console.log(reviews);
    return (
        <div>
            <h2 className='text-3xl lg:px-24 font-bold'>Reviews</h2>
            <div className='mt-5 grid grid-cols-1 lg:grid-cols-3 lg:px-24'>

                {
                    reviews.slice(0, 3).map(review => <Review key={review._id} review={review}></Review>)
                }

            </div>
        </div>
    );
};

export default Reviews;