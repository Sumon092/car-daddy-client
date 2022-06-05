import React from 'react';
import { Link } from 'react-router-dom';



const Parts = ({ parts }) => {
    const { name, desc, img, price, minOrder, aQuantity } = parts;

    return (
        <>

            <div class="card bg-base-100 max-h-screen my-auto rounded-none hover:shadow-xl mb-24 lg:mb-0">
                <figure><img className='w-64' src={img} alt="parts" /></figure>
                <div class="card-body">
                    <h2 class="card-title text-neutral">
                        {name}
                    </h2>
                    <p className='text-lg leading-4'><small>{desc}</small></p>

                    <p className='text-xl font-bold text-warning leading-5'>Price: ${price} <small className='font-bold text-black'>/qty</small></p>
                    <p className='leading-3 text-lg'><small>Minimum order: {minOrder} pcs</small></p>
                    <p className='leading-3 text-lg' ><small>Available Qty: {aQuantity} pcs</small></p>
                    <div class="rating rating-sm">
                        <input type="radio" name="rating-6" class="mask mask-star-2 bg-orange-400" />
                        <input type="radio" name="rating-6" class="mask mask-star-2 bg-orange-400" checked />
                        <input type="radio" name="rating-6" class="mask mask-star-2 bg-orange-400" />
                        <input type="radio" name="rating-6" class="mask mask-star-2 bg-orange-400" />
                        <input type="radio" name="rating-6" class="mask mask-star-2 bg-orange-400" />
                    </div>
                    <button className='btn btn-info btn-sm text-white'><Link to={`/purchase/${parts._id}`}>Order Now </Link></button>

                </div>

            </div>
        </>
    );
};

export default Parts;