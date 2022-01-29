import React from 'react';
import { Link } from 'react-router-dom';

const Banner = () => {
    return (
        // this is website main banner
        <div className="bg-cover bg-center  h-auto text-white py-36 px-10 object-fill" style={{ backgroundImage: "url(https://template.hasthemes.com/garcia/assets/img/hero-bg.jpg" }}>
            <div className="md:w-1/2">
                <p className="lg:text-3xl sm:text-3xl md:text-3xl font-bold">Purchase Your Camera</p>
                <p className="lg:text-2xl sm:text-2xl md:text-2xl mb-10 leading-none">Attractive pricing with attractive service</p>
                <Link to="/products" className="bg-indigo-500 py-3 px-8 text-white font-bold uppercase text-base rounded hover:bg-gray-200 hover:text-gray-800">Explore</Link>
            </div>
        </div>


    );
};

export default Banner;