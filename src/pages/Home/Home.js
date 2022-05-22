import React from 'react';
import Banner from './Banner';
import BodyParts from './BodyParts';
import Opportunities from './Opportunities';
import PopularCat from './PopularCat';

const Home = () => {
    return (
        <div>
            <Banner></Banner>
            <Opportunities></Opportunities>
            <BodyParts></BodyParts>
            <PopularCat></PopularCat>
        </div>
    );
};

export default Home;