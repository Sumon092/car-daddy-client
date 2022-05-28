import React, { useEffect, useState } from 'react';
import { useAuthState } from 'react-firebase-hooks/auth';
import BannerImage from '../../assets/banner/Chromium_Banner3.jpg'
import auth from '../../firebase.init';
import Loading from '../Shared/Loading';
import Parts from './Parts';


const BodyParts = () => {
    const [user, loading, error] = useAuthState(auth);
    const [allParts, setAllParts] = useState([])
    const [parts, setParts] = useState(null);

    useEffect(() => {
        const url = 'https://cryptic-shelf-32962.herokuapp.com/part'
        fetch(url, {
            method: 'GET',
            headers: {
                'content-type': 'application/json'
            }
        }).then(res => res.json()).then(data => {
            setAllParts(data);
        })
    }, [])
    if (loading) {
        return <Loading></Loading>
    }
    return (
        <div className='mb-36 h-screen'>
            <div className='bg-#F0F0F0 px-0 lg:px-24 grid mb-72 h-screen'>
                <div className=' bg-white grid grid-cols-1 lg:grid-cols-4 mt-24'>
                    <div className=''>
                        <div className=" card bg-base-100 h-screen rounded-none image-full">
                            <figure><img className='rounded-none' src={BannerImage} alt="Car" /></figure>
                            <div class="card-body">
                                <h2 class="card-title uppercase text-white font-bold">Body <span className='font-semibold '>Parts</span></h2>
                                <p className='text-white'>Low price. price match <br />
                                    Guarantee</p>
                                <div class="card-actions justify-end">
                                    <button class="btn btn-warning text-white">Buy Now</button>
                                </div>
                            </div>
                        </div>
                    </div>

                    <div className='bg-white h-screen col-span-3'>
                        <div className='h-10 w-full border px-0 lg:px-10'>
                            <button class="btn btn-link">ALL</button>
                            <button class="btn btn-link">BUMPERS</button>
                            <button class="btn btn-link">DOORS</button>
                        </div>
                        <div className='grid grid-cols-1 lg:grid-cols-3 gap-3  lg:px-10'>
                            {allParts.map(parts => <Parts
                                key={parts._id}
                                parts={parts}
                                setParts={setParts}
                            ></Parts>)}

                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default BodyParts;