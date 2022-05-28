import React, { useEffect, useState } from 'react';
import { useAuthState } from 'react-firebase-hooks/auth';
import { useForm } from 'react-hook-form';
import { toast } from 'react-toastify';
import auth from '../firebase.init';

const AddReview = () => {
    const { register, formState: { errors }, handleSubmit, reset } = useForm();
    const [user] = useAuthState(auth);
    console.log(user);
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
                if (data.acknowledged === true) {
                    toast.success('Review added successfully')
                }
            })

    }

    return (
        <div className='flex justify-center items-center bg-cyan-400 leading-3'>

            <form onSubmit={handleSubmit(handleReviews)} className='leading-3 my-5 border-2 border-solid p-10 bg-slate-300'>
                <h2 className='text 3xl font-bold text-center py-5 uppercase text-primary'>Add Review</h2>
                <div className="form-control w-full max-w-xs">
                    <input
                        type="text"
                        placeholder="Your Phone No."
                        className="input input-bordered w-full max-w-xs"
                        {...register("avatar", {
                            required: {
                                value: true,
                                message: 'Image Required'
                            }
                        })}
                    />
                </div>
                <div className="form-control  w-full max-w-lg border-2 border-solid">

                    <input
                        type="email"
                        placeholder="Profile Name"
                        className="input input-bordered w-full max-w-xs"
                        {...register("email", {
                            required: {
                                value: true,
                                message: 'Name is Required'
                            }
                        })}
                        value={user.email}
                    />

                </div>

                <div className="form-control  w-full max-w-lg border-2 border-solid">

                    <input
                        type="text"
                        placeholder="Profile Price"
                        className="input input-bordered w-full max-w-xs"
                        {...register("name", {
                            required: {
                                value: true,
                                message: 'Price Required'
                            }
                        })}
                        value={user.displayName}
                    />

                </div>
                <div className="form-control  w-full max-w-lg border-2 border-solid">

                    <input
                        type="text"
                        placeholder="Your Education"
                        className="input input-bordered w-full max-w-xs"
                        {...register("reviewText", {
                            required: {
                                value: true,
                                message: 'Description Required'
                            }
                        })}
                    />

                </div>
                <div className="form-control  w-full max-w-lg border-2 border-solid">

                    <input
                        type="text"
                        placeholder="Review here"
                        className="input input-bordered w-full max-w-xs"
                        {...register("ratings", {
                            required: {
                                value: true,
                                message: 'Stock Quantity Required'
                            }
                        })}
                    />

                </div>




                <input className='btn w-full max-w-xs text-white mt-5' type="submit" value="Add Profile" />
            </form>
        </div>
    );
};

export default AddReview;