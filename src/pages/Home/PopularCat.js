import React from 'react';
import PopularImage from '../../assets/popular/performance-150x150.png'
import PopularImage1 from '../../assets/popular/autobodyparts-150x150.png'
import PopularImage2 from '../../assets/popular/fuel_filter-150x150.jpg'
import PopularImage3 from '../../assets/popular/lighting-150x150 (1).png'
import PopularImage4 from '../../assets/popular/speakers-1-150x150.png'
import PopularImage5 from '../../assets/popular/wheel-set.png'

const PopularCat = () => {
    return (
        <div className='lg:px-24 mb-32'>
            <h2 className='text:xl lg:text-3xl font-bold lg:font-extrabold uppercase my-16 text-black'>Popular <span className='font-semibold'>categories</span></h2>
            <div>
                <div className='grid grid-cols-1 lg:grid-cols-3 gap-8'>
                    <div class="card lg:card-side rounded-none bg-base-100 shadow-xl">
                        <figure><img src={PopularImage1} alt="Album" /></figure>
                        <div class="card-body">
                            <h2 class="card-title text-sm">BODY PARTS</h2>
                            <div className="text-neutral">
                                <p>Bumpers</p>
                                <p>Dors</p>
                                <p>Fenders</p>
                                <p>Mirror</p>
                                <button class="btn btn-info mt-3 text-white uppercase">show all</button>
                            </div>
                        </div>
                    </div>
                    <div class="card lg:card-side rounded-none bg-base-100 shadow-xl">
                        <figure><img src={PopularImage} alt="Album" /></figure>
                        <div class="card-body">
                            <h2 class="card-title text-sm  uppercase mx-0">performance parts</h2>
                            <div className="text-neutral">
                                <p>Air intake systems</p>
                                <p>Engine components</p>
                                <p>Exhaust System</p>
                                <p>Fuel System</p>
                                <button class="btn btn-info mt-3 text-white uppercase">show all</button>
                            </div>
                        </div>
                    </div>
                    <div class="card lg:card-side rounded-none bg-base-100 shadow-xl">
                        <figure><img src={PopularImage4} alt="Album" /></figure>
                        <div class="card-body">
                            <h2 class="card-title text-sm w-full uppercase">Electronics</h2>
                            <div className="text-neutral">
                                <p>Amplifiers</p>
                                <p>Installation parts</p>
                                <p>Speakers</p>
                                <p>Stereos</p>
                                <button class="btn btn-info mt-3 text-white uppercase">show all</button>
                            </div>
                        </div>
                    </div>
                    <div class="card lg:card-side rounded-none bg-base-100 shadow-xl">
                        <figure><img src={PopularImage2} alt="Album" /></figure>
                        <div class="card-body">
                            <h2 class="card-title text-sm w-full uppercase">repair parts</h2>
                            <div className="text-neutral">
                                <p>Break Parts</p>
                                <p>Engine parts</p>
                                <p>Exhaust Parts</p>
                                <p>Fuel Delivery</p>
                                <button class="btn btn-info mt-3 text-white uppercase">show all</button>
                            </div>
                        </div>
                    </div>
                    <div class="card lg:card-side rounded-none bg-base-100 shadow-xl">
                        <figure><img src={PopularImage3} alt="Album" /></figure>
                        <div class="card-body">
                            <h2 class="card-title text-sm w-full uppercase">Lighting</h2>
                            <div className="text-neutral">
                                <p>Fog Lights</p>
                                <p>Head Lights</p>
                                <p>Led Lights</p>
                                <p>Replacement Bulbs</p>
                                <button class="btn btn-info mt-3 text-white uppercase">show all</button>
                            </div>
                        </div>
                    </div>
                    <div class="card lg:card-side rounded-none bg-base-100 shadow-xl">
                        <figure><img className='w-40' src={PopularImage5} alt="Album" /></figure>
                        <div class="card-body">
                            <h2 class="card-title text-sm w-full uppercase mx-0">wheel & tires</h2>
                            <div className="text-neutral w-full">
                                <p>Custom Wheel</p>
                                <p>Factory Wheel</p>
                                <p>Nug Nuts & Wheel</p>
                                <p>Tire Chains</p>
                                <button class="btn btn-info mt-3 text-white uppercase">show all</button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default PopularCat;