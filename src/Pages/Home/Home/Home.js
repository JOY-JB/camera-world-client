import React from 'react';
import Banner from '../Banner/Banner';
import FeaturedProducts from '../FeaturedProducts/FeaturedProducts';
import LatestCamera from '../LatestCamera/LatestCamera';
import Review from '../Review/Review';


const Home = () => {
    return (
        <div className='container px-5  mx-auto'>
            <Banner></Banner>
            <FeaturedProducts></FeaturedProducts>
            <LatestCamera></LatestCamera>
            <Review></Review>
        </div>
    );
};

export default Home;