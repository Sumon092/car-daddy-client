import React from 'react';
import { useAuthState } from 'react-firebase-hooks/auth';
import { Link, Outlet } from 'react-router-dom';


import auth from '../firebase.init';
import useAdmin from '../hooks/useAdmin';

const Dashboard = () => {
    const [user] = useAuthState(auth)
    const [admin] = useAdmin(user);
    console.log(admin);
    return (
        <div className="drawer drawer-mobile lg:px-24">
            <input id="my-drawer-2" type="checkbox" className="drawer-toggle" />
            <div className="drawer-content">
                <h1 className='text-2xl text-pink-900 font-bold font-serif text-center'>Welcome to My Dashboard</h1>
                <Outlet></Outlet>
            </div>
            <div className="drawer-side">
                <label htmlFor="my-drawer-2" className="drawer-overlay"></label>
                <ul className="menu p-4 overflow-y-auto w-45 bg-base-200 text-base-content">


                    <li><Link to='/dashboard'>My Profile</Link></li>
                    {!admin &&
                        <>
                            <li><Link to='/dashboard/myOrder'>My Orders</Link></li>
                            <li><Link to='/dashboard/addReview'>Add A Review</Link></li>
                        </>
                    }
                    {admin &&
                        <>
                            <li><Link to='/dashboard/addProduct'>Add a Product</Link></li>
                            <li><Link to='/dashboard/manageProduct'>Manage Product</Link></li>
                            <li><Link to='/dashboard/manageOrder'>Manage Order</Link></li>
                            <li><Link to='/dashboard/users'>Make Admin</Link></li>
                        </>
                    }


                </ul>

            </div>
        </div>
    );
};

export default Dashboard;