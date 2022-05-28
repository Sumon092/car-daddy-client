import React, { useState } from 'react';
import { useQuery } from 'react-query';
import Loading from '../pages/Shared/Loading';
import DeleteModal from './DeleteModal';
import Product from './Product';

const ManageProduct = () => {
    const [deleteProduct, setDeleteProduct] = useState(null)
    const { data: products, isLoading, refetch } = useQuery('products', () => fetch('https://car-daddy.web.app/products', {
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
                    products.map(item => <Product
                        key={item._id}
                        item={item}
                        setDeleteProduct={setDeleteProduct}

                    ></Product>)
                }
            </div>
            {
                deleteProduct && <DeleteModal
                    deleteProduct={deleteProduct}
                    setDeleteProduct={setDeleteProduct}
                    refetch={refetch}
                ></DeleteModal>
            }
        </div>
    );
};

export default ManageProduct;