import React from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { useAuthState } from 'react-firebase-hooks/auth';
import auth from '../../firebase.init';

const Parts = ({ parts, setParts }) => {
    const { name, desc, img, price, minOrder, aQuantity, _id } = parts;
    const [user] = useAuthState(auth)
    return (
        <>
            <div class="card bg-base-100 h-auto my-auto rounded-none hover:shadow-xl">
                <figure><img src={img} alt="parts" /></figure>
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
                    {/* {user ? <label
                        onClick={() => setParts(parts)}
                        for="purchase-modal"
                        class="btn modal-button btn-info btn-sm text-white uppercase"
                    >order now</label> : <Link to='/login'><button className='btn btn-info btn-sm text-white uppercase'>order now</button></Link>
                    } */}
                    <Link to={`/purchase/${parts._id}`}>Order Now </Link>

                </div>

            </div>
        </>
    );
};

export default Parts;