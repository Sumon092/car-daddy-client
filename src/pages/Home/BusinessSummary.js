import React from 'react';
import icon1 from '../../assets/icon/flag.png'
import icon2 from '../../assets/icon/target.png'
import icon3 from '../../assets/icon/money.png'
import icon4 from '../../assets/icon/brake.png'

const BusinessSummary = () => {
    return (
        <div className='lg:px-24 lg:mb-12 '>
            <h2 className='text:xl lg:text-4xl font-bold text-info uppercase bg-white text-center lg:py-8'>We provide quality parts world wide</h2>
            <div className='grid grid-cols-1 lg:grid-cols-4 gap-5 bg-white'>
                <div className='lg:ml-20'>
                    <img className='w-32' src={icon1} alt="" />
                    <h2 className='text-5xl font-bold'>120 <span className='text-4xl font-semibold'>+</span></h2>
                    <small className='font-bold text-info text-lg'>Countries</small>
                </div>
                <div className='lg:ml-20'>
                    <img className='w-32' src={icon2} alt="" />
                    <h2 className='text-5xl font-bold'>31300 <span className='text-4xl font-semibold'>+</span></h2>
                    <small className='font-bold text-info text-lg'>Clients</small>
                </div>
                <div className='lg:ml-20'>
                    <img className='w-32' src={icon3} alt="" />
                    <h2 className='text-5xl font-bold'>$ 10 <span className='text-4xl font-semibold'>M+</span></h2>
                    <small className='font-bold text-info text-lg'>Revenue</small>
                </div>
                <div className='lg:ml-20'>
                    <img className='w-32' src={icon4} alt="" />
                    <h2 className='text-5xl font-bold'>240K <span className='text-4xl font-semibold'>+</span></h2>
                    <small className='font-bold text-info text-lg'>Tools</small>
                </div>

            </div>
            <div class="card lg:w-full rounded-none  hover:shadow-xl bg-white py-16">
                <div class="grid grid-cols-1 lg:grid-cols-2">
                    <div className='lg:ml-36'>
                        <h2 className='text-3xl text-info font-bold gap-5'>Do you have any question ?</h2>
                        <p className='text-2xl text-black'>Feel free to ask us</p>
                    </div>
                    <div className='lg:ml-36'>
                        <button className='btn btn-sm btn-info text-white'>Request for message</button ><button className='text-white btn btn-sm btn-primary ml-3'>Contact us</button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default BusinessSummary;