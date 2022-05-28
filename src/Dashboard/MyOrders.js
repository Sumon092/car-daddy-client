import { signOut } from 'firebase/auth';
import React, { useState, useEffect } from 'react';
import { useAuthState } from 'react-firebase-hooks/auth';
import { useNavigate } from 'react-router-dom';
import auth from '../firebase.init';

const MyOrders = () => {
    const [user] = useAuthState(auth)
    const [order, setOrder] = useState([]);
    const navigate = useNavigate()
    useEffect(() => {
        if (user) {
            fetch(`https://car-daddy.web.app/order?email=${user.email}`, {
                method: 'GET',
                headers: {
                    'authorization': `Bearer ${localStorage.getItem('accessToken')}`
                }
            })
                .then(res => {
                    if (res.status === 401 || res.status === 403) {
                        signOut(auth);
                        localStorage.removeItem('accessToken');
                        navigate('/')
                    }
                    return res.json()
                })
                .then(data => {
                    setOrder(data);
                })
        }
    }, [user])
    return (
        <div>
            <h2 className='text-2xl text-center font-bold text-primary my-5'>I have ordered {order.length} parts</h2>
            <div className="overflow-x-auto">
                <table className="table table-zebra w-full">
                    <thead>
                        <tr>
                            <th></th>
                            <th>Parts Name</th>
                            <th>Description</th>
                            <th>Quantity</th>
                            <th>Price</th>
                            <th>Total Payable</th>
                        </tr>
                    </thead>
                    <tbody>
                        {order.map((a, index) => <tr>
                            <th>{index + 1}</th>
                            <td>{a.partsName}</td>
                            <td>{a.PartsDesc}</td>
                            <td>{a.minOrder}</td>
                            <td>$ {a.price}</td>
                            <td>$ {a.totalPrice}</td>
                            <button className='ml-5 btn btn-md btn-error text-white mr-5'>Cancel</button><button className='text-white btn btn-md btn-success'>Pay</button>
                        </tr>)}

                    </tbody>
                </table>
            </div>
        </div>
    );
};

export default MyOrders;