import React from 'react';
import Banner from './Banner';
import BodyParts from './BodyParts';
import BusinessSummary from './BusinessSummary';
import Opportunities from './Opportunities';
import PopularCat from './PopularCat';

const Home = () => {
    return (
        <div>
            <Banner></Banner>
            <Opportunities></Opportunities>
            <BodyParts></BodyParts>
            <PopularCat></PopularCat>
            <BusinessSummary></BusinessSummary>
        </div>
    );
};

export default Home;