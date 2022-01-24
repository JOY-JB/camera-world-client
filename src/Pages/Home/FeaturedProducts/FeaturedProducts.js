import React from 'react';
import Products from '../../Shared/Products/Products';

const FeaturedProducts = () => {
    return (
        <div>
            <Products
                name={"Featured Products"}
                limit={6}
            ></Products>
        </div>
    );
};

export default FeaturedProducts;