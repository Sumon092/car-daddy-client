import React from 'react';
import { Link } from 'react-router-dom';


const Header = () => {
    const navItems = <>
        <li><Link className='font-extrabold text-xl font-serif ' to='/parts'>Parts</Link ></li>
        <li><Link className='font-extrabold text-xl font-serif' to='/business'>Business Summery</Link ></li>
        <li><Link className='font-extrabold text-xl font-serif' to='/reviews'>Reviews</Link ></li>
    </>

    return (
        <div className='bg-base-100'>
            <div className="nav-top bg-primary max-w-full h-12">
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
        </div>
    );
};

export default Header;