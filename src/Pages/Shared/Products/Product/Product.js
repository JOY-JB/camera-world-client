import React from 'react';
import { Link } from 'react-router-dom';

const Product = ({ product }) => {
    const { _id, product_img_url, product_name, description, price } = product;
    return (
        <div className="p-4 md:w-1/3">
            <div className="h-full border-2 border-gray-200 border-opacity-60 rounded-lg overflow-hidden">
                <img className="lg:h-48 md:h-36 w-full object-contain object-center" src={product_img_url}
                    alt={product_img_url} />
                <div className="p-6">
                    <h1 className="title-font text-lg font-medium text-gray-900 mb-3">{product_name}</h1>
                    <p className="leading-relaxed mb-6">{description}</p>
                    <div className="flex items-center flex-wrap">
                        <Link to={`/purchase/${_id}`} className="bg-transparent text-indigo-500 font-semibold border border-indigo-500 rounded hover:bg-indigo-600 hover:text-white hover:border-transparent transition ease-in duration-200 transform hover:-translate-y-1 active:translate-y-0 px-5 py-1">Buy Now
                        </Link>
                        <span className="text-black mr-3 inline-flex items-center lg:ml-auto md:ml-0 ml-auto leading-none text-2xl pr-3 py-1 ">
                            {price} <span className="font-bold text-3xl">৳</span>
                        </span>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Product;