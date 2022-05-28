import React, { useEffect, useState } from 'react';
import { useAuthState } from 'react-firebase-hooks/auth';
import auth from '../../firebase.init';
import Loading from '../Shared/Loading';
import Product from './Product';
import Products from './Products';

const HomeProduct = () => {
    const [loading] = useAuthState(auth)
    const [items, setItem] = useState([])
    useEffect(() => {
        fetch('https://car-daddy.web.app/products', {
            method: 'GET',
            headers: {
                'content-type': 'application/json',
                authorization: `Bearer ${localStorage.getItem('accessToken')}`
            }
        })
            .then(res => res.json())
            .then(data => {
                console.log(data);
                setItem(data);
            })

    }, [])
    return (
        <>
            <div className='px-24 grid grid-cols-1 lg:grid-cols-3 gap-5 rounded-none'>
                {
                    items.map(item => <Products item={item} key={item._id}></Products>)
                }
            </div>

        </>

    );
};

export default HomeProduct;