import React from 'react';
import { useAuthState } from 'react-firebase-hooks/auth';
import { useQuery } from 'react-query';
import auth from '../firebase.init';
import Loading from '../pages/Shared/Loading';

const ManageOrders = () => {
    const [user] = useAuthState(auth)
    const { data: orders, isLoading, refetch } = useQuery('orders', () => fetch('https://car-daddy-server.vercel.app/orders', {
        headers: {
            authorization: `Bearer ${localStorage.getItem('accessToken')}`
        }
    }).then(res => res.json()));
    if (isLoading) {
        return <Loading></Loading>
    }
    return (
        <div>

            <div>
                <h2 className='text-2xl text-center font-bold text-primary my-5 uppercase'>total ordered {orders.length} parts</h2>
                <div className="overflow-x-auto">
                    <table className="table table-zebra w-full">
                        <thead>
                            <tr>
                                <th></th>
                                <th>Client Email</th>
                                <th>Parts Name</th>
                                <th>Ordered Quantity</th>
                                <th>Price</th>
                                <th>Total Payable</th>

                            </tr>
                        </thead>
                        <tbody>
                            {orders.map((a, index) => <tr>
                                <th>{index + 1}</th>
                                <td>{a.clientName}</td>
                                <td>{a.partsName}</td>
                                <td>{a.minOrder}</td>
                                <td>{a.price}</td>
                                <td>${a.totalPrice}</td>
                                <button className='ml-5 btn btn-sm btn-error text-white mr-5'>Cancel</button>
                            </tr>)}

                        </tbody>
                    </table>
                </div>
            </div>

        </div>
    );
};

export default ManageOrders;