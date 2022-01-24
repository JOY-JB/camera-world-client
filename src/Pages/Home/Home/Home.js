import React from 'react';
import useAuth from '../../../Hooks/useAuth';
import Banner from '../Banner/Banner';
import FeaturedProducts from '../FeaturedProducts/FeaturedProducts';
import LatestCamera from '../LatestCamera/LatestCamera';
import Review from '../Review/Review';



const Home = () => {

    const { loading } = useAuth();

    if (loading) {
        return <div class=" flex justify-center items-center">
            <div class="animate-spin rounded-full h-32 w-32 border-b-2 border-gray-900"></div>
        </div>
    }

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