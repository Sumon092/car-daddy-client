import React from 'react';
import { toast } from 'react-toastify';

const Product = ({ item, setDeleteProduct }) => {

    return (
        <div class="card card-compact bg-base-100 shadow-xl">
            <figure><img className='w-60' src={item.img} alt="Shoes" /></figure>
            <div class="card-body">
                <h2 class="card-title">{item.name}</h2>
                <p>{item.desc}</p>
                <p>Available Quantity :{item.aQuantity}</p>
                <p>Minimum Order: {item.minOrder}</p>
                <p>Price: {item.price}</p>
                <div class="card-actions justify-end">
                    <label onClick={() => setDeleteProduct(item)} for="my-modal-6" class="btn btn-error text-white btn-sm">Delete Product</label>

                </div>
            </div>
        </div>
    );
};

export default Product;