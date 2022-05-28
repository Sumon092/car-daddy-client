import React from 'react';

const Product = ({ item }) => {
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
                    <button class="btn btn-error text-white">Delete Product</button>
                </div>
            </div>
        </div>
    );
};

export default Product;