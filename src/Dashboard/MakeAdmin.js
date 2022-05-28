import React from 'react';
import { toast } from 'react-toastify';
import Loading from '../pages/Shared/Loading';

const MakeAdmin = ({ user, index, refetch }) => {
    const { email, role } = user;
    const makeAdmin = () => {
        <Loading></Loading>
        fetch(`https://car-daddy.web.app/user/admin/${email}`, {
            method: 'PUT',
            headers: {
                authorization: `Bearer ${localStorage.getItem('accessToken')}`
            },
        }).then(res => {
            if (res.status === 403) {
                toast.error('Failed to make an admin');
            }
            return res.json()
        })
            .then(data => {
                if (data.modifiedCount > 0) {
                    refetch()
                    toast.success('Admin added successfully')
                }


            })
        // refetch()
    }
    return (
        <tr>
            <th>{index + 1}</th>
            <td>{user.email}</td>
            <td>{role === 'admin' ? <button className="text-black lg:w-36 btn btn-disabled btn-accent">Already Admin</button>
                : <button onClick={makeAdmin} className="lg:w-36 text-white btn btn-active btn-accent">Make Admin</button>}</td>
        </tr>
    );
};

export default MakeAdmin;