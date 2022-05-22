import React from 'react';
import Header from '../Shared/Header';
import Banner from './Banner';
import BodyParts from './BodyParts';
import Opportunities from './Opportunities';

const Home = () => {
    return (
        <div>
            <Banner></Banner>
            <Opportunities></Opportunities>
            <BodyParts></BodyParts>
        </div>
    );
};

export default Home;