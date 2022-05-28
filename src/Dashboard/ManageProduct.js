import React from 'react';
import { useQuery } from 'react-query';
import Loading from '../pages/Shared/Loading';
import Product from './Product';

const ManageProduct = () => {
    const { data: products, isLoading, refetch } = useQuery('products', () => fetch('http://localhost:5000/products', {
        headers: {
            authorization: `Bearer ${localStorage.getItem('accessToken')}`
        }
    }).then(res => res.json()));
    if (isLoading) {
        return <Loading></Loading>
    }
    console.log(products);
    // const items = products[0];
    // item.map(item=>)
    return (
        <div>
            <h2>products quantity {products.length}</h2>

            <div className='grid grid-cols-1 lg:grid-cols-3 gap-5'>

                {
                    products.map(item => <Product key={item._id} item={item}></Product>)
                }
            </div>
        </div>
    );
};

export default ManageProduct;