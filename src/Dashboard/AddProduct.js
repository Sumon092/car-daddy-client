import React from 'react';
import { useForm } from 'react-hook-form';
import { useQuery } from 'react-query';
import Loading from '../pages/Shared/Loading'
import { toast } from 'react-toastify';

const AddProduct = () => {
    const { register, formState: { errors }, handleSubmit, reset } = useForm();
    const url = 'https://cryptic-shelf-32962.herokuapp.com/parts';

    const { data: products, isLoading } = useQuery('products', () => fetch(url).then(res => res.json()));
    const imageStorageKey = 'f3617440862cc8ff199fcf0303527ab8';



    const onSubmit = async data => {
        console.log('data', data);

        const image = data.img[0];
        const formData = new FormData();
        formData.append('image', image);
        const url = `https://api.imgbb.com/1/upload?key=${imageStorageKey}`
        console.log(url);
        fetch(url, {
            method: 'POST',
            body: formData
        })
            .then(res => res.json())
            .then(results => {
                const img = results.data.url;
                const product = {
                    name: data.name,
                    id: products._id,
                    desc: data.desc,
                    price: data.price,
                    minOrder: data.minOrder,
                    aQuantity: data.aQuantity,
                    img: img
                }
                console.log(product);
                fetch('https://cryptic-shelf-32962.herokuapp.com/products', {
                    method: 'POST',
                    headers: {
                        'content-type': 'application/json',
                        authorization: `Bearer ${localStorage.getItem('accessToken')}`
                    },
                    body: JSON.stringify(product)
                })
                    .then(res => res.json())
                    .then(insert => {
                        if (insert.insertedId) {
                            toast.success('product added successfully');
                            reset()
                        }
                        else {
                            toast.error('Failed to add a product')
                        }
                    })
            })
    }
    if (isLoading) {
        return <Loading></Loading>
    }
    return (
        <div className='flex justify-center items-center bg-cyan-400 leading-3'>

            <form onSubmit={handleSubmit(onSubmit)} className='leading-3 my-5 border-2 border-solid p-10 bg-slate-300'>
                <h2 className='text 3xl font-bold text-center py-5 uppercase text-primary'>Add a product</h2>
                <div className="form-control  w-full max-w-lg border-2 border-solid">

                    <input
                        type="text"
                        placeholder="product Name"
                        className="input input-bordered w-full max-w-xs"
                        {...register("name", {
                            required: {
                                value: true,
                                message: 'Name is Required'
                            }
                        })}
                    />
                    <label className="label">
                        {errors.name?.type === 'required' && <span className="label-text-alt text-red-500">{errors.name.message}</span>}
                    </label>
                </div>

                <div className="form-control  w-full max-w-lg border-2 border-solid">

                    <input
                        type="text"
                        placeholder="product Price"
                        className="input input-bordered w-full max-w-xs"
                        {...register("price", {
                            required: {
                                value: true,
                                message: 'Price Required'
                            }
                        })}
                    />
                    <label className="label">
                        {errors.price?.type === 'required' && <span className="label-text-alt text-red-500">{errors.price.message}</span>}
                    </label>
                </div>
                <div className="form-control  w-full max-w-lg border-2 border-solid">

                    <input
                        type="text"
                        placeholder="product Description"
                        className="input input-bordered w-full max-w-xs"
                        {...register("desc", {
                            required: {
                                value: true,
                                message: 'Description Required'
                            }
                        })}
                    />
                    <label className="label">
                        {errors?.desc?.type === 'required' && <span className="label-text-alt text-red-500">{errors.desc.message}</span>}
                    </label>
                </div>
                <div className="form-control  w-full max-w-lg border-2 border-solid">

                    <input
                        type="text"
                        placeholder="Stock Quantity"
                        className="input input-bordered w-full max-w-xs"
                        {...register("aQuantity", {
                            required: {
                                value: true,
                                message: 'Stock Quantity Required'
                            }
                        })}
                    />
                    <label className="label">
                        {errors.aQuantity?.type === 'required' && <span className="label-text-alt text-red-500">{errors.aQuantity.message}</span>}
                    </label>
                </div>
                <div className="form-control  w-full max-w-lg border-2 border-solid">

                    <input
                        type="text"
                        placeholder="Minimum Order"
                        className="input input-bordered w-full max-w-xs"
                        {...register("minOrder", {
                            required: {
                                value: true,
                                message: 'Minimum Order Quantity Required'
                            }
                        })}
                    />
                    <label className="label">
                        {errors.minOrder?.type === 'required' && <span className="label-text-alt text-red-500">{errors.minOrder.message}</span>}
                    </label>
                </div>
                <div className="form-control w-full max-w-xs">
                    <input
                        type="file"
                        placeholder="product Image"
                        className="input input-bordered w-full max-w-xs"
                        {...register("img", {
                            required: {
                                value: true,
                                message: 'Image Required'
                            }
                        })}
                    />
                    <label className="label">
                        {errors.img?.type === 'required' && <span className="label-text-alt text-red-500">{errors.img.message}</span>}
                    </label>
                </div>


                <input className='btn w-full max-w-xs text-white mt-5' type="submit" value="Add product" />
            </form>
        </div>
    );
};

export default AddProduct;