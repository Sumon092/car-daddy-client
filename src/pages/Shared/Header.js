import { signOut } from 'firebase/auth';
import React from 'react';
import { useAuthState } from 'react-firebase-hooks/auth';
import { Link, NavLink } from 'react-router-dom';
import auth from '../../firebase.init';


const Header = () => {
    const [user, loading, error] = useAuthState(auth);
    const logout = () => {
        signOut(auth);
        localStorage.removeItem('accessToken');
    }
    const navItems = <>
        <li><Link className='font-extrabold text-xl font-serif ' to='/parts'>Parts</Link ></li>
        <li><Link className='font-extrabold text-xl font-serif' to='/business'>Business Summery</Link ></li>
        <li><Link className='font-extrabold text-xl font-serif' to='/reviews'>Reviews</Link ></li>
        <li><Link className='font-extrabold text-xl font-serif' to='/blogs'>Blogs</Link ></li>
        {user && <li><Link className='font-extrabold text-xl font-serif' to='/dashboard'>Dashboard</Link ></li>}
    </>


    return (
        <div className='bg-base-100'>
            <div className="nav-top bg-primary max-w-full h-12">
                {user && <p className='text-white text-right mr-12 text-lg'><small className='text-white mt-2'>Welcome &#128525; {user.displayName}&#128151;</small></p>}
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
                    <Link to='/' className="btn btn-ghost normal-case text-xl font-bold lg:text-3xl font-extrabold font-serif">Car Daddy</Link>
                </div>
                <div className="navbar-center hidden lg:flex">
                    <ul className="menu menu-horizontal p-0">
                        {navItems}
                    </ul>
                </div>
                <div className="navbar-end">
                    {user ?
                        <Link onClick={logout} to='/login' className="btn btn-primary font-serif">Sign Out</Link>
                        :
                        <Link to='/login' className="btn btn-primary font-serif">Login</Link>
                    }
                </div>
            </div>
        </div>
    );
};

export default Header;