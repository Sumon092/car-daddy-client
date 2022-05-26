import React from 'react';
import NotFoundImage from '../assets/image/page-not-found.png'

const NotFound = () => {
    return (
        <div className='flex justify-center items-center'>
            <img src={NotFoundImage} alt="notFound" />
        </div>
    );
};

export default NotFound;