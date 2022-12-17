import React, { useEffect, useState } from 'react';
import { useAuthState } from 'react-firebase-hooks/auth';
import BannerImage from '../../assets/banner/Chromium_Banner3.jpg'
import auth from '../../firebase.init';
import Loading from '../Shared/Loading';
import Parts from './Parts';


const BodyParts = () => {
    const [loading] = useAuthState(auth);
    const [allParts, setAllParts] = useState([])
    console.log(allParts);
    const [setParts] = useState(null);

    useEffect(() => {
        const url = 'https://car-daddy-server.vercel.app/part'
        fetch(url, {
            method: 'GET',
            headers: {
                'content-type': 'application/json'
            }
        }).then(res => res.json()).then(data => {
            setAllParts(data);
        })
    }, [])
    // if (loading) {
    //     return <Loading></Loading>
    // }
    return (
        <div className='lg:px-24 mt-24'>

            <div className='grid lg:grid-cols-4 grid-cols-1 '>


                <div className="lg:col-span-1 card bg-base-100 h-screen rounded-none image-full">
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

                <div className='lg:col-span-3 bg-white'>
                    <div className='w-full border'>
                        <button class="btn btn-link">ALL</button>
                        <button class="btn btn-link">BUMPERS</button>
                        <button class="btn btn-link">DOORS</button>
                    </div>
                    <div className='grid lg:grid-cols-3 grid-cols-1'>

                        {allParts.map(parts => <Parts

                            key={parts._id}
                            parts={parts}
                            setParts={setParts}
                        ></Parts>)}
                    </div>
                </div>

            </div>
        </div>





    );
};

export default BodyParts;