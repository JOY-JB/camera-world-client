import React from 'react';

const ProductItem = ({ item, handleDelete }) => {
    const { _id, price, product_img_url, product_name } = item;


    return (
        // manage products table row
        <tr>
            <td className="px-6 py-4 whitespace-nowrap">
                <div className="flex items-center">
                    <div className="flex-shrink-0 h-10 w-10">
                        <img className="h-10 w-10 rounded-full" src={product_img_url} alt="" />
                    </div>
                </div>
            </td>
            <td className="px-6 py-4 whitespace-nowrap">
                <div className="flex items-center">
                    <div className="ml-4">
                        <div className="text-sm font-medium text-gray-900">
                            {product_name}
                        </div>
                    </div>
                </div>
            </td>
            <td className="px-6 py-4 whitespace-nowrap">
                <div className="flex items-center">
                    <div className="ml-4">
                        <div className="text-sm font-medium text-gray-900">
                            {price}
                        </div>
                    </div>
                </div>
            </td>
            <td className="px-6 py-4 whitespace-nowrap text-center text-sm font-medium">
                <button onClick={() => handleDelete(_id)} className="text-indigo-600 hover:text-indigo-900">Delete</button>
            </td>
        </tr>
    );
};

export default ProductItem;