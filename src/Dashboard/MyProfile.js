import React from 'react';
import { useAuthState } from 'react-firebase-hooks/auth';
import { useForm } from 'react-hook-form';
import { useQuery } from 'react-query';
import { toast } from 'react-toastify';
import auth from '../firebase.init';
import Loading from '../pages/Shared/Loading';

const MyProfile = () => {
    const { register, formState: { errors }, handleSubmit, reset } = useForm();
    const [user] = useAuthState(auth)
    const email = user.email;



    const onSubmit = async data => {
        const profile = {
            name: user.displayName,
            email: user.email,
            location: data.location,
            education: data.education,
            phone: data.phone,
            linkedIn: data.linkedIn
        }
        fetch(`https://cryptic-shelf-32962.herokuapp.com/profile/${email}`, {
            method: 'PUT',
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(profile)
        }).then(res => res.json().then(data => {
            console.log(data);
            if (data.upsertedCount > 0) {
                toast.success('Your profile saved successfully')
            }
            else {
                toast.success('Data updated successfully')
            }
            reset()
        }))

    }
    return (
        <div className='flex justify-center items-center bg-cyan-400 leading-3'>

            <form onSubmit={handleSubmit(onSubmit)} className='leading-3 my-5 border-2 border-solid p-10 bg-slate-300'>
                <h2 className='text 3xl font-bold text-center py-5 uppercase text-primary'>Add a product</h2>
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
                    <label className="label">
                        {errors.name?.type === 'required' && <span className="label-text-alt text-red-500">{errors.name.message}</span>}
                    </label>
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
                        {...register("education", {
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
                        placeholder="Your Location"
                        className="input input-bordered w-full max-w-xs"
                        {...register("location", {
                            required: {
                                value: true,
                                message: 'Stock Quantity Required'
                            }
                        })}
                    />

                </div>
                <div className="form-control  w-full max-w-lg border-2 border-solid">

                    <input
                        type="text"
                        placeholder="Your LinkedIn profile"
                        className="input input-bordered w-full max-w-xs"
                        {...register("linkedIn", {
                            required: {
                                value: true,
                                message: 'Minimum Order Quantity Required'
                            }
                        })}
                    />

                </div>
                <div className="form-control w-full max-w-xs">
                    <input
                        type="phone"
                        placeholder="Your Phone No."
                        className="input input-bordered w-full max-w-xs"
                        {...register("phone", {
                            required: {
                                value: true,
                                message: 'Image Required'
                            }
                        })}
                    />
                </div>


                <input className='btn w-full max-w-xs text-white mt-5' type="submit" value="Add Profile" />
            </form>
        </div>
    );
};

export default MyProfile;