import React, { useState, useEffect } from 'react';
import { useAuthState } from 'react-firebase-hooks/auth';
import auth from '../firebase.init';

const MyOrders = () => {
    const [user] = useAuthState(auth)
    const [order, setOrder] = useState([]);
    useEffect(() => {
        if (user) {
            fetch(`http://localhost:5000/order?email=${user.email}`)
                .then(res => res.json())
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
                        </tr>
                    </thead>
                    <tbody>
                        {order.map((a, index) => <tr>
                            <th>{index + 1}</th>
                            <td>{a.partsName}</td>
                            <td>{a.PartsDesc}</td>
                            <td>{a.quantity}</td>
                            <td>$ {a.price}</td>
                            <button className='ml-5 btn btn-md btn-error text-white mr-5'>Cancel</button><button className='text-white btn btn-md btn-success'>Pay</button>
                        </tr>)}

                    </tbody>
                </table>
            </div>
        </div>
    );
};

export default MyOrders;