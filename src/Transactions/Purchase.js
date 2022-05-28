import React, { useEffect, useRef, useState } from 'react';
import { useAuthState } from 'react-firebase-hooks/auth';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import auth from '../firebase.init';
import Loading from '../pages/Shared/Loading';
import PurchaseNow from './PurchaseNow';


const Purchase = ({ parts, setParts }) => {
    // console.log(parts);
    // const [setMinOrder] = useState('')
    // const { _id, name, price, minOrder, desc, aQuantity } = parts;
    // const [user, loading, error] = useAuthState(auth);

    // const handlePurchase = (event) => {
    //     event.preventDefault();
    //     const minOrder = event.target.minOrder.value;
    //     // setMinOrder(minOrder)

    //     const order = {
    //         partsId: _id,
    //         partsName: name,
    //         PartsDesc: desc,
    //         price: price,
    //         quantity: aQuantity,
    //         minOrder: event.target.minOrder.value,
    //         clientName: user.displayName,
    //         email: user.email,
    //         address: event.target.address.value,
    //         phone: event.target.phone.value
    //     }
    //     console.log(order);
    //     fetch('https://car-daddy.web.app/order', {
    //         method: 'POST',
    //         headers: {
    //             'content-Type': 'application/json'
    //         },
    //         body: JSON.stringify(order)

    //     })
    //         .then(res => res.json())
    //         .then(data => {
    //             if (data.success) {
    //                 // alert('purchase successful');
    //                 toast.success(`you have ordered ${name} for $${price}`)
    //             }
    //             else {
    //                 toast.error('order cancel')
    //                 alert('order cancel')
    //             }
    //             setParts(null)
    //         })

    // }



    // if (loading) {
    //     return <Loading></Loading>
    // }
    return (
        // <div>
        //     <input type="checkbox" id="purchase-modal" className="modal-toggle" />
        //     <div className="modal modal-bottom sm:modal-middle">
        //         <div className="modal-box w-full">
        //             <label htmlFor="purchase-modal" className="btn btn-sm btn-circle absolute right-2 top-2">✕</label>
        //             <h3 className="font-bold text-lg text-info text-center">Purchase: {name}</h3>
        //             <p className="font-bold text-sm text-black text-center">Price: ${price} </p>
        //             <p className="font-bold text-sm text-neutral text-center"><small>{desc}</small></p>
        //             <p className="font-bold text-sm text-neutral text-center">Minimum Order: {minOrder}<small> pcs</small></p>
        //             <p className="font-bold text-sm text-neutral text-center">Minimum Order: {aQuantity}<small> pcs</small></p>
        //             <form onSubmit={handlePurchase} className='grid grid-cols-1 gap-3 justify-items-center mt-2'>
        //                 <input type="text" name="name" disabled value={user?.displayName || ''} className="input input-bordered w-full max-w-xs" />
        //                 <input type="email" name="email" disabled value={user?.email || ''} className="input input-bordered w-full max-w-xs" />
        //                 <input type="text"
        //                     value={minOrder}
        //                     // onChange={this.handleChange}
        //                     name='minOrder' className="input input-bordered w-full max-w-xs" />
        //                 <input type="text" name='address' placeholder='Address' className="input input-bordered w-full max-w-xs" />
        //                 <input type="text" name="phone" placeholder="Phone Number" className="input input-bordered w-full max-w-xs" />
        //                 <input type="submit" value="Submit" className="btn btn-secondary w-full max-w-xs" />
        //             </form>
        //         </div>
        //     </div>
        //     <ToastContainer></ToastContainer>
        // </div>

        <>
            {
                <PurchaseNow></PurchaseNow>
            }
        </>
    );
};

export default Purchase;