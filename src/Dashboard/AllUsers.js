import React from 'react';
import { useQuery } from 'react-query';
import Loading from '../pages/Shared/Loading';
import MakeAdmin from './MakeAdmin';

const AllUsers = () => {
    const { data: users, isLoading } = useQuery('users', () => fetch('http://localhost:5000/users', {
        method: 'GET',
        headers: {
            authorization: `Bearer ${localStorage.getItem('accessToken')}`
        },

    }).then(req => req.json()));
    if (isLoading) {
        return <Loading></Loading>
    }

    return (
        <div>
            <h2 className='text-center text-primary text-2xl font-bold'>All User Information {users.length}</h2>

            <div class="overflow-x-auto w-full">
                <table class="table w-full">
                    {/* <!-- head --> */}
                    <thead>
                        <tr>
                            <th></th>
                            <th>Email</th>
                            <th>Make Admin</th>
                            <th></th>
                        </tr>
                    </thead>
                    <tbody>
                        {
                            users.map((user, index) => <MakeAdmin key={user._id} user={user} index={index}></MakeAdmin>

                            )
                        }


                    </tbody>


                </table>
            </div>
        </div>
    );
};

export default AllUsers;