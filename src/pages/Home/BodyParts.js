import React from 'react';
import { Link } from 'react-router-dom';
import BannerImage from '../../assets/banner/Chromium_Banner3.jpg'
import BodyPart1 from '../../assets/bodyparts/speakers-300x300.jpg'
import BodyPart2 from '../../assets/bodyparts/prod7_deposit_opt-350x350.jpg'
import BodyPart3 from '../../assets/bodyparts/prod1_deposit_opt-350x350.jpg'


const BodyParts = () => {
    return (
        <div className='mb-96'>
            <div className='bg-#F0F0F0 px-24 grid mb-72'>
                <div className='h-64 bg-white grid grid-cols-1 lg:grid-cols-4'>
                    <div className='h-60'>
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
                        <div className='h-10 w-full border-y-2 border px-10'>
                            <button class="btn btn-link">ALL</button>
                            <button class="btn btn-link">BUMPERS</button>
                            <button class="btn btn-link">DOORS</button>
                        </div>
                        <div className='grid grid-cols-1 lg:grid-cols-3 gap-3 lg:mt-24 px-10'>
                            <div class="card bg-base-100 h-auto my-auto rounded-none hover:shadow-xl">
                                <figure><img src={BodyPart1} alt="Shoes" /></figure>
                                <div class="card-body">
                                    <h2 class="card-title text-neutral">
                                        APPLIFIERS
                                    </h2>
                                    <p className=''>Combo Sport Stereos for coupe Models</p>
                                    <div class="rating rating-sm">
                                        <input type="radio" name="rating-6" class="mask mask-star-2 bg-orange-400" />
                                        <input type="radio" name="rating-6" class="mask mask-star-2 bg-orange-400" checked />
                                        <input type="radio" name="rating-6" class="mask mask-star-2 bg-orange-400" />
                                        <input type="radio" name="rating-6" class="mask mask-star-2 bg-orange-400" />
                                        <input type="radio" name="rating-6" class="mask mask-star-2 bg-orange-400" />
                                    </div>
                                    <p className='text-xl font-bold text-warning'>$ 30 - $ 45</p>
                                </div>
                            </div>
                            <div class="card bg-base-100 rounded-none hover:shadow-xl">
                                <figure><img src={BodyPart2} alt="Shoes" /></figure>
                                <div class="card-body">
                                    <h2 class="card-title text-neutral">
                                        BODY PARTS
                                    </h2>
                                    <p className=''>
                                        Sport body part of chevrolet
                                        <br />2015-2017
                                    </p>

                                    <div class="rating rating-sm">
                                        <input type="radio" name="rating-6" class="mask mask-star-2 bg-orange-400" />
                                        <input type="radio" name="rating-6" class="mask mask-star-2 bg-orange-400" checked />
                                        <input type="radio" name="rating-6" class="mask mask-star-2 bg-orange-400" />
                                        <input type="radio" name="rating-6" class="mask mask-star-2 bg-orange-400" />
                                        <input type="radio" name="rating-6" class="mask mask-star-2 bg-orange-400" />
                                    </div>
                                    <p className='text-xl font-bold text-warning'>$ 130 - $ 345</p>
                                </div>
                            </div>
                            <div class="card bg-base-100 rounded-none hover:shadow-xl">
                                <figure><img src={BodyPart3} alt="Shoes" /></figure>
                                <div class="card-body">
                                    <h2 class="card-title text-neutral">
                                        BREAK PARTS
                                        <div class="badge badge-secondary">NEW</div>
                                    </h2>
                                    <p>Breaking block (maintenance kit for SUV)</p>

                                    <div class="rating rating-sm">
                                        <input type="radio" name="rating-6" class="mask mask-star-2 bg-orange-400" />
                                        <input type="radio" name="rating-6" class="mask mask-star-2 bg-orange-400" checked />
                                        <input type="radio" name="rating-6" class="mask mask-star-2 bg-orange-400" />
                                        <input type="radio" name="rating-6" class="mask mask-star-2 bg-orange-400" />
                                        <input type="radio" name="rating-6" class="mask mask-star-2 bg-orange-400" />
                                    </div>
                                    <p className='text-xl font-bold text-warning'>$ 430 - $ 945</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default BodyParts;