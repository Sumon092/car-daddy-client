import React from 'react';
import ProIcon1 from '../assets/icon/id-card.png'
import ProIcon2 from '../assets/icon/education.png'
import ProIcon3 from '../assets/icon/diploma.png'
import ProIcon5 from '../assets/icon/pencil.png'
import ProIcon4 from '../assets/icon/project.png'

const MyPortfolio = () => {
    return (
        <div style={{ width: '580px' }} className='bg-white border-2 mx-auto mt-24 border-blue-200'>
            <div style={{ width: '480px' }} className='py-10 mx-auto'>
                <div className='flex justify-between items-center mx-auto border-2 border-solid'>
                    <img style={{ width: '60px' }} src={ProIcon1} alt="" />
                    <div>
                        <p className='text-lg text-primary'>Hi this is</p>
                        <h2 className='text-4xl text-primary uppercase'>Md. Sumun Mia</h2>
                        <p className='text-neutral'>m.sumon@outlook.com</p>
                    </div>
                </div>
                <p className='text-2xl font-bold mt-8'>Education</p>
                <div className='flex justify-between items-center mx-auto border-2 border-solid'>
                    <img style={{ width: '60px' }} src={ProIcon2} alt="" />
                    <div className=''>
                        <h3 className='text-xl text-primary ml-10'>Bsc In Electrical and Electronics Engineering</h3>
                        <h4 className='text-lg'>Bangladesh University of Business and Technology</h4>
                    </div>
                </div>
                <div className='flex justify-between items-center'>
                    <img style={{ width: '60px' }} src={ProIcon3} alt="" />
                    <div className=''>
                        <h3 className='text-xl text-primary'>Diploma in Electronics Engineering</h3>
                        <h4 className='text-lg'>Sylhet Polytechnic Institute</h4>
                    </div>
                </div>
                <p className='text-2xl mt-8 font-semibold'>Skills</p>
                <div className='flex justify-between items-center mx-auto border-2 border-solid'>
                    <img style={{ width: '60px' }} src={ProIcon5} alt="" />
                    <div className=''>
                        <span className='text-xl text-primary ml-10'>React.js, </span>
                        <span className='text-xl text-primary ml-10'> Node.js</span>
                        <br />
                        <span className='text-xl text-primary ml-10'>Html, </span>
                        <span className='text-xl text-primary ml-10'> JavaScripts</span>
                        <br />
                        <span className='text-xl text-primary ml-10'>CSS, </span>
                        <span className='text-xl text-primary ml-10'> Tailwind</span>
                        <br />
                        <span className='text-xl text-primary ml-10'>Bootstrap, </span>
                        <span className='text-xl text-primary ml-10'> Firebase</span>
                    </div>
                </div>
                <p className='text-2xl font-semibold'>Projects Link</p>
                <div className='flex justify-between items-center mx-auto border-2 border-solid'>
                    <img style={{ width: '60px' }} src={ProIcon4} alt="" />
                    <div className='text-blue'>
                        <a title='Click the link to redirect the app' className='text-xl' href='https://monisha-s-kitchen.web.app/' className='text-lg text-primary ml-10'>Monisha's Kitchen</a>
                        <br />
                        <a title='Click the link to redirect the app' className='text-xl' href='https://royal-auto-95723.web.app/' className='text-lg text-primary ml-10'>Royal Auto</a>
                        <br />
                        <a title='Click the link to redirect the app' className='text-xl' href='https://gorgeous-kataifi-9738dd.netlify.app/' className='text-lg text-primary ml-10'>Reveal</a>

                    </div>
                </div>
            </div>
        </div>
    );
};

export default MyPortfolio;