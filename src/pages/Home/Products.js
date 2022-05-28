import React from 'react';

const Products = ({ item }) => {
    return (
        <div class="card card-compact bg-base-100 shadow-xl">
            <figure><img className='w-48' src={item.img} alt="Shoes" /></figure>
            <div class="card-body">
                <h2 class="card-title">{item.name}</h2>
                <p>{item.desc}</p>
                <p>Available Quantity :{item.aQuantity}</p>
                <p>Minimum Order: {item.minOrder}</p>
                <p>Price: {item.price}</p>
            </div>
        </div>
    );
};

export default Products;