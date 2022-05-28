import React from 'react';
import { toast } from 'react-toastify';
import useAdmin from '../hooks/useAdmin';

const DeleteModal = ({ deleteProduct, setDeleteProduct, refetch }) => {

    const handleDelete = () => {
        fetch(`https://car-daddy.web.app/products/${deleteProduct.id}`, {
            method: 'DELETE',
        })
            .then(res => res.json())
            .then(data => {
                console.log(data);
                if (data.deletedCount === 1) {
                    toast.success(`delete successful`)
                    refetch()
                    setDeleteProduct(null)
                }
            })
    }
    return (
        // < !--The button to open modal-- >


        // <!--Put this part before </body > tag-- >
        <div>
            <input type="checkbox" id="my-modal-6" class="modal-toggle" />
            <div class="modal modal-bottom sm:modal-middle">
                <div class="modal-box">
                    <h3 class="font-bold text-lg">{deleteProduct.name}</h3>
                    <p class="py-4">If you delete this you will lost this product</p>
                    <div class="modal-action">
                        <button onClick={() => handleDelete(deleteProduct._id)} class="btn btn-error btn-sm text-white">Delete Product</button>
                        <label for="my-modal-6" class="btn btn-sm btn-primary">Cancel</label>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default DeleteModal;