import React from 'react';
import { useAuthState } from 'react-firebase-hooks/auth';
import { Link, Outlet } from 'react-router-dom';

// import useAdmin from '../../hooks/useAdmin';
import auth from '../firebase.init';

const Dashboard = () => {
    const [user] = useAuthState(auth)
    // const [admin] = useAdmin(user);
    // console.log(admin);
    return (
        <div className="drawer drawer-mobile">
            <input id="my-drawer-2" type="checkbox" className="drawer-toggle" />
            <div className="drawer-content">
                <h1 className='text-2xl text-pink-900 font-bold font-serif text-center'>Welcome to My Dashboard</h1>
                <Outlet></Outlet>



            </div>
            <div className="drawer-side">
                <label htmlFor="my-drawer-2" className="drawer-overlay"></label>
                <ul className="menu p-4 overflow-y-auto w-45 bg-base-100 text-base-content">


                    <li><Link to='/dashboard'>My Orders</Link></li>
                    <li><Link to='/dashboard/addReview'>Add A Review</Link></li>
                    <li><Link to='/dashboard/myProfile'>My Profile</Link></li>


                </ul>

            </div>
        </div>
    );
};

export default Dashboard;