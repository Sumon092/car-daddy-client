import React from 'react';
import { toast } from 'react-toastify';

const Product = ({ item }) => {
    const handleDelete = id => {
        fetch(`http://localhost:5000/products/${id}`, {
            method: 'DELETE',
        })
            .then(res => res.json())
            .then(data => {
                console.log(data);
                if (data.deletedCount === 1) {
                    toast.success(`delete successful`)
                }
            })
    }
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
                    <button onClick={() => handleDelete(item._id)} class="btn btn-error text-white">Delete Product</button>
                </div>
            </div>
        </div>
    );
};

export default Product;