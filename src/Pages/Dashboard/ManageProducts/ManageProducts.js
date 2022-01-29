import React, { useEffect, useState } from 'react';
import ProductItem from './ProductItem/ProductItem';

const ManageProducts = () => {
    const [products, setProducts] = useState([])

    useEffect(() => {
        fetch("http://localhost:5000/allproduct")
            .then(res => res.json())
            .then(data => setProducts(data));
    }, []);

    const handleDelete = (id) => {
        const newProducts = products.filter(product => product._id !== id);

        if (window.confirm("Are you sure you want to delete this product?")) {
            fetch(`http://localhost:5000/deleteproduct/${id}`, {
                method: "DELETE",
            })
                .then(res => res.json())
                .then(data => {
                    if (data.deletedCount > 0) {
                        alert("Deleted Successfully!!!");
                        setProducts(newProducts);
                    }
                }
                );
        }
    }

    return (
        // manage products table
        <div className="lg:w-10/12 sm:w-full">
            <h2 className="text-3xl my-4 leading-7 text-gray-900 sm:text-4xl sm:truncate">
                Manage all products
            </h2>

            <div className="flex flex-col justify-center py-6 px-10">
                <div className="-my-2 overflow-x-auto sm:-mx-6 lg:-mx-8">
                    <div className="py-2 align-middle inline-block min-w-full sm:px-6 lg:px-8">
                        <div className="shadow overflow-hidden border-b border-gray-200 sm:rounded-lg">
                            <table className="min-w-full divide-y divide-gray-200">
                                <thead className="bg-gray-50">
                                    <tr>
                                        <th scope="col" className="text-center px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                                            Image
                                        </th>
                                        <th scope="col" className="text-center px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                                            Product Name
                                        </th>
                                        <th scope="col" className="text-center px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                                            Price
                                        </th>
                                        <th scope="col" className="text-center px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                                            Delete Order
                                        </th>
                                    </tr>
                                </thead>
                                <tbody className="bg-white divide-y divide-gray-200">
                                    {
                                        products.map(product => <ProductItem key={product._id} handleDelete={handleDelete} item={product}></ProductItem>)
                                    }

                                </tbody>
                            </table>
                        </div>
                    </div>
                </div>
            </div>

        </div>
    );
};

export default ManageProducts;