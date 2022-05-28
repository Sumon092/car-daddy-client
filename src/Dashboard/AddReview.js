import React, { useEffect, useState } from 'react';
import { useAuthState } from 'react-firebase-hooks/auth';
import { useForm } from 'react-hook-form';
import { toast } from 'react-toastify';
import auth from '../firebase.init';

const AddReview = () => {
    const { register, formState: { errors }, handleSubmit, reset } = useForm();
    const [user] = useAuthState(auth);
    console.log(user);
    let ratings;
    if (ratings > 0) {
        return ratings
    }
    // const email = user.email;
    // const [reviews,setReviews]=useState([])

    const handleReviews = async data => {

        const reviews = {
            email: user.email,
            name: user.displayName,
            ratings: data.ratings,
            reviewText: data.reviewText
        }

        fetch(`http://localhost:5000/reviews`, {
            method: 'POST',
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(reviews)
        })
            .then(res => res.json())
            .then(data => {
                console.log(data);
                if (data.success === true) {
                    toast.success('Review added successfully')
                }
            })
        reset()

    }

    return (
        <div className='flex justify-center items-center'>

            <form onSubmit={handleSubmit(handleReviews)} className='text-center leading-3 my-5 border-2 border-solid p-10 bg-slate-300'>
                <h2 className='text 3xl  text-center py-5 uppercase text-info font-bold'>Add Review</h2>
                <h2 className='text-2xl font-bold text-black py-5'>Hello {user.displayName}</h2>
                <p className='text-neutral ml-10'>Please give a review to improve our product quality best</p>
                <p className='text-neutral mt-3'>{user.email}</p>
                <div className="form-control  text-xl">

                    <textarea  {...register("ratings", {
                        required: {
                            value: true,
                            message: 'Stock Quantity Required'
                        },
                    })} class="textarea textarea-bordered w-full max-w-lg text-center mt-3" placeholder="add a review"></textarea>
                </div>
                <div className="form-control text-xl">
                    <input
                        type="text"
                        placeholder="Please give a review between 1 to 5"
                        className="input input-bordered mt-5 ml-6 w-full max-w-xs"
                        {...register("reviewText", {
                            required: {
                                value: true,
                                message: 'Description Required'
                            },
                        })}
                    />

                </div>





                <input className='btn btn-info btn-sm text-white mt-5' type="submit" value="Add Review" />
            </form>
        </div>
    );
};

export default AddReview;