import React from 'react';
import Icon1 from '../../assets/icon/delivery-truck-1.png'
import Icon2 from '../../assets/icon/reload-1.png'
import Icon3 from '../../assets/icon/wallet-1.png'
import Icon4 from '../../assets/icon/gift-1.png'

const Opportunities = () => {

    return (
        <div className="px-24 bg-#f0f0f0 h-32 my-8">
            <div className='grid grid-cols-1 lg:grid-cols-4 md:grid-cols-3 gap-5 h-screen lg:h-28 bg-white px-16'>
                <div className='flex justify-start items-center'>
                    <img className='mx-5' style={{ width: '57px' }} src={Icon1} alt="" />
                    <div >
                        <h4 className='font-bold uppercase'>Free Delivery</h4>
                        <p><small className='text-xs'>World wide from $ 89</small></p>
                    </div>
                </div>
                <div className='flex justify-start items-center'>
                    <img className='mx-5' style={{ width: '57px' }} src={Icon2} alt="" />
                    <div>
                        <h4 className='font-bold uppercase'>Easy Return</h4>
                        <p><small className='text-xs'>365 Days Free Return</small></p>
                    </div>
                </div>
                <div className='flex justify-start items-center'>
                    <img className='mx-2' style={{ width: '57px' }} src={Icon3} alt="" />
                    <div>
                        <h4 className='font-bold'>COMFORT PAYMENTS</h4>
                        <p><small className='text-xs'>Credit cards available</small></p>
                    </div>
                </div>
                <div className='flex justify-start items-center'>
                    <img className='mx-5' style={{ width: '57px' }} src={Icon4} alt="" />
                    <div>
                        <h4 className='font-bold uppercase'>Free gifts</h4>
                        <p className='text-xs'><small>Get gift and discounts</small></p>
                    </div>
                </div>

            </div>
        </div>
    );
};

export default Opportunities;