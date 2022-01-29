import React, { useState, useEffect } from 'react';
import StatusButton from './StatusButton/StatusButton';

// row of manage all orders table 
const Orders = ({ order, handleDelete }) => {
    const { _id, email, quantity, productId, status } = order;
    const [product, setProduct] = useState({});
    useEffect(() => {
        fetch(`http://localhost:5000/product/${productId}`)
            .then(res => res.json())
            .then(data => setProduct(data));
    }, []);

    return (
        <tr>
            <td className="px-5 py-4 whitespace-nowrap">
                <div className="flex items-center">
                    <div className="flex-shrink-0 h-10 w-10">
                        <img className="h-10 w-10 rounded-full" src={product.product_img_url} alt="" />
                    </div>
                </div>
            </td>
            <td className="px-5 py-4 whitespace-nowrap">
                <div className="flex items-center">
                    <div>
                        <div className="text-sm font-medium text-gray-900">
                            {product.product_name}
                        </div>
                    </div>
                </div>
            </td>
            <td className="px-5 py-4 whitespace-nowrap">
                <div className="flex items-center">
                    <div className="ml-4">
                        <div className="text-sm font-medium text-gray-900">
                            {quantity}
                        </div>
                    </div>
                </div>
            </td>
            <td className="px-5 py-4 whitespace-nowrap">
                <div className="text-sm text-gray-900">{email}</div>
            </td>
            <td className="px-5 py-4 whitespace-nowrap">

                <StatusButton key={_id} status={status} id={_id} ></StatusButton>

            </td>
            <td className="px-6 py-4 whitespace-nowrap text-center text-sm font-medium">
                <button onClick={() => handleDelete(_id)} className="text-indigo-600 hover:text-indigo-900">Delete</button>
            </td>
        </tr>
    );
};

export default Orders;