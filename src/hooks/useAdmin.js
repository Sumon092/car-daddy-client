import React, { useEffect, useState } from 'react';

const useAdmin = (user) => {
    const [admin, setAdmin] = useState(false);
    const [adminLoading, setAdminLoading] = useState(true);
    const email = user.email;
    useEffect(() => {
        fetch(`https://car-daddy-server.vercel.app/admin/${email}`, {
            method: 'GET',
            headers: {
                'content-type': 'application/json',
                authorization: `Bearer ${localStorage.getItem('accessToken')}`
            }
        })
            .then(res => res.json())
            .then(data => {
                console.log(data);
                setAdmin(data.admin)
                setAdminLoading(false)
            })
    }, [user])
    return [admin, adminLoading]
};

export default useAdmin;