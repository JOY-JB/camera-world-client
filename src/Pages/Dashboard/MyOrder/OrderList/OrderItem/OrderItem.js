import React, { useState, useEffect } from 'react';

const OrderItem = ({ order, handleDelete }) => {
    const { _id, email, quantity, productId, status } = order;
    const [product, setProduct] = useState({});

    // get product by product id
    useEffect(() => {
        fetch(`https://damp-plateau-38093.herokuapp.com/product/${productId}`)
            .then(res => res.json())
            .then(data => setProduct(data));
    }, [productId]);

    let orderclass;
    if (status === "shipped") {
        orderclass = "bg-green-100 text-green-800";
    } else {
        orderclass = "bg-orange-200 text-orange-800";
    }


    return (
        // my orders table row
        <tr>
            <td className="px-6 py-4 whitespace-nowrap">
                <div className="flex items-center">
                    <div className="flex-shrink-0 h-10 w-10">
                        <img className="h-10 w-10 rounded-full" src={product.product_img_url} alt="" />
                    </div>
                </div>
            </td>
            <td className="px-6 py-4 whitespace-nowrap">
                <div className="flex items-center">
                    <div>
                        <div className="text-sm font-medium text-gray-900">
                            {product.product_name}
                        </div>
                    </div>
                </div>
            </td>
            <td className="px-6 py-4 whitespace-nowrap">
                <div className="flex items-center">
                    <div className="ml-4">
                        <div className="text-sm font-medium text-gray-900">
                            {quantity}
                        </div>
                    </div>
                </div>
            </td>
            <td className="px-6 py-4 whitespace-nowrap">
                <div className="text-sm text-gray-900">{email}</div>
            </td>
            <td className="px-6 py-4 whitespace-nowrap">
                <span className={`px-2 inline-flex text-xs leading-5 font-semibold rounded-full ${orderclass}`}>
                    {status}
                </span>
            </td>
            <td className="px-6 py-4 whitespace-nowrap text-center text-sm font-medium">
                <button onClick={() => handleDelete(_id)} className="text-indigo-600 hover:text-indigo-900">Delete</button>
            </td>
        </tr>
    );
};

export default OrderItem;