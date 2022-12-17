import React, { useEffect, useState } from 'react';
import { useAuthState } from 'react-firebase-hooks/auth';
import { useForm } from 'react-hook-form';
import { useQuery } from 'react-query';
import { useParams } from 'react-router-dom';
import { toast } from 'react-toastify';
import auth from '../firebase.init';
import Loading from '../pages/Shared/Loading';

const PurchaseNow = () => {
    const { id } = useParams();
    const [products, setParts] = useState([]);
    // const { minOrder } = parts;
    const [user] = useAuthState(auth);
    // let items = [];

    const { register, formState: { errors, reset }, handleSubmit } = useForm();

    const { data: parts, isLoading, refetch } = useQuery('parts', () => fetch('https://car-daddy-server.vercel.app/part', {
        method: 'GET',
        headers: {
            authorization: `Bearer ${localStorage.getItem('accessToken')}`
        },

    }).then(req => req.json()));
    if (isLoading) {
        return <Loading></Loading>
    }

    const item = parts?.filter(it => it._id === id);
    const it = item[0]

    // console.log("parst ", item)
    const handlePurchase = (event) => {
        // event.preventDefault();
        const order = {
            partsId: it._id,
            partsName: it.name,
            PartsDesc: it.desc,
            price: it.price,
            quantity: it.Quantity,

            totalPrice: event.minOrder * it.price,
            minOrder: event.minOrder,
            clientName: user.displayName,
            email: user.email,
            address: event.address,
            phone: event.phone
        }
        console.log(order);
        fetch('https://car-daddy-server.vercel.app/order', {
            method: 'POST',
            headers: {
                'content-Type': 'application/json'
            },
            body: JSON.stringify(order)

        })
            .then(res => res.json())
            .then(data => {
                if (data.success) {

                    toast.success(`you have ordered ${it.name} successfully`)
                    reset()
                }
                else {
                    toast.error('order cancel')

                }

            })

    }



    // 
    return (

        <>
            <div className='px-24 lg:h-96 mt-5'>
                <div class="w-full bg-base-100">
                    <div class="hero-content flex-col lg:flex-row">
                        <img className='w-72' src={it.img} />
                        <div className='leading'>
                            <h1 class="text-5xl font-bold">{it.name}</h1>
                            <p class="">{it.desc}</p>
                            <p class="">Available Quantity: {it.aQuantity}</p>
                            <p class="">Minimum Order: {it.minOrder}</p>
                            <p class="">Price: ${it.price}</p>

                        </div>
                    </div>
                </div>
            </div>

            <div className='bg-white py-10'>
                <form onSubmit={handleSubmit(handlePurchase)} className='grid grid-cols-1 gap-3 justify-items-center mt-2'>
                    <input type="text" name="name" disabled value={user?.displayName || ''} className="input input-bordered w-full max-w-xs" />
                    <input type="email" name="email" disabled value={user?.email || ''} className="input input-bordered w-full max-w-xs" />

                    <div className="form-control w-full max-w-xs">
                        <label className="label">
                        </label>
                        <input
                            type="number"
                            defaultValue={it.minOrder}
                            // placeholder="Your Email"
                            className="input input-bordered w-full max-w-xs"
                            {...register("minOrder", {
                                required: {

                                    value: true,
                                    message: 'Email is Required'
                                },
                                min: {
                                    value: it.minOrder,
                                    message: `Your order is less than minimum order`
                                },
                                max: {
                                    value: it.aQuantity,
                                    message: 'Quantity not available'
                                }
                            })}
                            defaultValue={it.minOrder}
                        />
                        <label className="label">
                            {errors?.minOrder?.type === 'min' && <span className="label-text-alt text-red-500">{errors.minOrder.message}</span>}
                            {errors?.minOrder?.type === 'max' && <span className="label-text-alt text-red-500">{errors.minOrder.message}</span>}
                        </label>
                    </div>
                    <div className="form-control w-full max-w-xs">
                        <input
                            type="text"
                            placeholder="Your Address"
                            className="input input-bordered w-full max-w-xs"
                            {...register("address", {
                                required: {
                                    value: true,
                                    message: 'Address Required'
                                }
                            })}
                        />
                        <label className="label">
                            {errors.address?.type === 'required' && <span className="label-text-alt text-red-500">{errors.address.message}</span>}
                        </label>
                    </div>
                    <div className="form-control w-full max-w-xs">

                        <input
                            type="text"
                            placeholder="Your phone"
                            className="input input-bordered w-full max-w-xs"
                            {...register("phone", {
                                required: {
                                    value: true,
                                    message: 'Phone no is Required'
                                }
                            })}
                        />
                        <label className="label">
                            {errors.phone?.type === 'required' && <span className="label-text-alt text-red-500">{errors.phone.message}</span>}
                        </label>
                    </div>

                    {
                        <input type="submit" value="Confirm order" className="btn btn-info text-white w-full max-w-xs" />
                    }
                </form>
            </div>
        </>



    );
};

export default PurchaseNow;