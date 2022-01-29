import React, { useEffect, useState } from 'react';
import Product from './Product/Product';

const Products = ({ name, limit }) => {
    const [products, setProducts] = useState([]);

    useEffect(() => {
        if (limit) {
            fetch(`https://damp-plateau-38093.herokuapp.com/allproduct?limit=${limit}`)
                .then(res => res.json())
                .then(data => setProducts(data));

        } else {
            fetch(`https://damp-plateau-38093.herokuapp.com/allproduct`)
                .then(res => res.json())
                .then(data => setProducts(data));
        }


    }, [])
    return (
        <div>

            <section className="text-gray-600 body-font pt-20">
                <h2 className="text-3xl font-bold leading-7 text-gray-900 sm:text-4xl sm:truncate">
                    {name}
                </h2>
                <div className="container px-5 py-14 mx-auto">
                    <div className="flex flex-wrap -m-4">
                        {
                            products.map(product => <Product key={product._id} product={product}></Product>)
                        }
                    </div>
                </div>
            </section>
        </div>
    );
};

export default Products;