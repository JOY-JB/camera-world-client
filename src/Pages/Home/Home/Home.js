import React from 'react';
import useAuth from '../../../Hooks/useAuth';
import Banner from '../Banner/Banner';
import FeaturedProducts from '../FeaturedProducts/FeaturedProducts';
import LatestCamera from '../LatestCamera/LatestCamera';
import Reviews from '../Reviews/Reviews';



const Home = () => {

    const { loading } = useAuth();

    if (loading) {
        return <div className=" flex justify-center items-center">
            <div className="animate-spin rounded-full h-32 w-32 border-b-2 border-gray-900"></div>
        </div>
    }

    return (
        // this is home page
        <div className='container px-5  mx-auto'>
            <Banner></Banner>
            <FeaturedProducts></FeaturedProducts>
            <LatestCamera></LatestCamera>
            <Reviews></Reviews>
        </div>
    );
};

export default Home;