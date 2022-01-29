import React, { useEffect, useState } from 'react';
import Orders from './Orders/Orders';

const ManageAllOrders = () => {
    const [orders, setOrders] = useState([]);

    useEffect(() => {
        fetch(`http://localhost:5000/allorders`)
            .then(res => res.json())
            .then(data => setOrders(data))
    }
        , [])

    // order delete function by id 
    const handleDelete = (id) => {
        const newOrders = orders.filter(order => order._id !== id);
        if (window.confirm("Are you sure you want to delete this Order")) {
            fetch(`http://localhost:5000/deleteorder/${id}`, {
                method: "DELETE",
            })
                .then(res => res.json())
                .then(data => {
                    if (data.deletedCount > 0) {
                        setOrders(newOrders);
                    }
                })
        } else {
            return
        }
    }

    return (
        // manage all orders table
        <div className="w-full">
            <h2 className="text-3xl py-4 leading-7 text-gray-900 sm:text-4xl sm:truncate">
                Manage all Orders
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
                                            Quantity
                                        </th>
                                        <th scope="col" className="text-center px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                                            Email
                                        </th>
                                        <th scope="col" className="text-center px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                                            Status
                                        </th>
                                        <th scope="col" className="text-center px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                                            Delete Order
                                        </th>
                                    </tr>
                                </thead>
                                <tbody className="bg-white divide-y divide-gray-200">
                                    {
                                        orders.map(order => <Orders key={order._id} order={order} handleDelete={handleDelete}></Orders>)
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

export default ManageAllOrders;