import React from 'react';

const MakeAdmin = ({ user, index }) => {
    const { email } = user;
    const makeAdmin = () => {
        fetch(`http://localhost:5000/user/admin/${email}`, {
            method: 'PUT',
            headers: {
                authorization: `Bearer ${localStorage.getItem('accessToken')}`
            },
        }).then(res => res.json())
            .then(data => {
                console.log(data);
            })
    }
    return (
        <tr>
            <th>{index + 1}</th>
            <td>{user.email}</td>
            <td><button onClick={makeAdmin} className="text-white btn btn-active btn-accent">Make Admin</button></td>
        </tr>
    );
};

export default MakeAdmin;