import React from 'react';
import { Link } from 'react-router-dom';
import BannerImage from '../../assets/image/demo2_sld_2_opt.jpg'


const Banner = () => {

    return (
        <>
            <div class="bg-warning w-full h-12 flex justify-center items-center px-16">
                <div className='text-center '>
                    <input type="text" placeholder="Search by brand, categories, title" class=" border p-1  lg:w-96 mx-w-xs mx-auto" /><button className='btn rounded-none btn-primary btn-sm'>search</button>
                </div>
            </div>
            <div className='flex justify-items-start items-center h-screen px-24 bg-base-100 bg-white;'>
                <div className='mx-auto lg:mt-[-195px]'>
                    <ul class="menu  bg-base-100 w-96 mt-5 lg:w-72 lg:mt-24 rounded-none border-solid border-2 border-yellow-300 h-screen">
                        <li class="bg-primary uppercase text-white "><a>Shop Departments</a></li>
                        <hr />
                        <li class="border-black-200"><a>Car & Motor Bike Care</a></li>
                        <hr />
                        <li class="border-black-200"><a>Car & Vehicle Electronics</a></li>
                        <hr />
                        <li class="border-black-200"><a>Car Accessories</a></li>
                        <hr />
                        <li class="border-black-200"><a>Car Parts</a></li>
                        <hr />
                        <li class="border-black-200"><a>Navigation Devices</a></li>
                        <hr />
                        <li class="border-black-200"><a>Oil & Fluids</a></li>
                        <hr />
                        <li class="border-black-200"><a>Paint Work</a></li>
                        <hr />
                        <li class="border-black-200"><a>Tools & Equipments</a></li>
                        <hr />
                        <li class="border-black-200"><a>Tyres & Rims</a></li>
                        <hr />
                    </ul>
                </div>
                <div className='flex justify-between items-center'>
                    <div className='m-0 hidden lg:block bg-white'>
                        <h3 className='text-xl font-sans'>Get your</h3>
                        <h2 className='my- text-5xl text-warning  font-sans'>Shock <br /> Absorber</h2>
                        <h2 className='text-primary font-bold text-5xl'>Low Rider</h2>
                        <p className='text-gray-500 my-12'>Bigfoot signature detail. This is our most
                            <br />comprehensive vehicle treatment.
                        </p>
                        <button className='btn btn-warning text-white'>Order Now</button>
                    </div>
                    <div className='mt-16 hidden lg:block mb-12'>
                        <img style={{ width: '550px' }} src={BannerImage} alt="" />
                    </div>
                </div>
            </div>
        </>

    );
};

export default Banner;