import React from 'react';
import { Link } from 'react-router-dom';
import BannerImage from '../../assets/image/demo2_sld_2_opt.jpg'

const Header = () => {
    const navItems = <>
        <li><Link className='font-extrabold text-xl font-serif ' to='/parts'>Parts</Link ></li>
        <li><Link className='font-extrabold text-xl font-serif' to='/business'>Business Summery</Link ></li>
        <li><Link className='font-extrabold text-xl font-serif' to='/reviews'>Reviews</Link ></li>
    </>

    return (
        <div>
            <div className="nav-top bg-primary max-w-full h-16">
            </div>

            <div className="navbar bg-base-100 px-24">
                <div className="navbar-start">
                    <div className="dropdown">
                        <label tabIndex="0" className="btn btn-ghost lg:hidden">
                            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
                        </label>
                        <ul tabIndex="0" className="menu menu-compact dropdown-content mt-3 p-2 shadow bg-base-100 rounded-box w-52">

                            {navItems}
                        </ul>
                    </div>
                    <a className="btn btn-ghost normal-case text-xl font-bold lg:text-3xl font-extrabold font-serif">Car Daddy</a>
                </div>
                <div className="navbar-center hidden lg:flex">
                    <ul className="menu menu-horizontal p-0">
                        {navItems}
                    </ul>
                </div>
                <div className="navbar-end">
                    <a className="btn btn-primary font-serif">Login</a>
                </div>
            </div>
            <div className=''>
                <div class="bg-warning w-full h-12 flex justify-center items-center px-16">
                    <div className='text-center '>
                        <input type="text" placeholder="Search by brand, categories, title" class=" border p-1  lg:w-96 mx-w-xs mx-auto" /><button className='btn rounded-none btn-primary btn-sm'>search</button>
                    </div>

                </div>

            </div>
            <div className='flex justify-items-start items-center h-screen px-24;'>
                <div className='mx-auto lg:mt-[-195px] '>
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
                    <div className='m-0 hidden lg:block'>
                        <h3 className='text-xl font-sans'>Get your</h3>
                        <h2 className='my- text-5xl text-warning  font-sans'>Shock <br /> Absorber</h2>
                        <h2 className='text-primary font-bold text-5xl'>Low Rider</h2>
                        <p className='text-gray-500 my-12'>Bigfoot signature detail. This is our most
                            <br />comprehensive vehicle treatment.
                        </p>
                        <button className='btn btn-warning text-white'>Order Now</button>
                    </div>
                    <div className='mt-16 hidden lg:block'>
                        <img style={{ width: '632px' }} src={BannerImage} alt="" />
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Header;