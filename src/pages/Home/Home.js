import React from 'react';
import Banner from './Banner';
import BodyParts from './BodyParts';
import BusinessSummary from './BusinessSummary';
import HomeProduct from './HomeProduct';
import Opportunities from './Opportunities';
import PopularCat from './PopularCat';
import Reviews from './Reviews';

const Home = () => {
    return (
        <div>
            <Banner></Banner>
            <Opportunities></Opportunities>
            <BodyParts></BodyParts>
            <HomeProduct></HomeProduct>
            <PopularCat></PopularCat>
            <BusinessSummary></BusinessSummary>
            <Reviews></Reviews>
        </div>
    );
};

export default Home;