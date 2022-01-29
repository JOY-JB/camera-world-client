import React, { useEffect, useState } from 'react';
import useAuth from '../../../../Hooks/useAuth';
import OrderItem from './OrderItem/OrderItem';

const OrderList = () => {
    const { user } = useAuth();
    const [myOrders, setMyOrders] = useState([]);

    useEffect(() => {
        if (user?.email) {
            fetch(`https://damp-plateau-38093.herokuapp.com/orders?email=${user?.email}`)
                .then(res => res.json())
                .then(data => setMyOrders(data))
        }
    }, [user?.email])


    const handleDelete = (id) => {
        const newOrders = myOrders.filter(order => order._id !== id);
        if (window.confirm("Are you sure you want to delete this Product")) {
            fetch(`https://damp-plateau-38093.herokuapp.com/deleteorder/${id}`, {
                method: "DELETE",
            })
                .then(res => res.json())
                .then(data => {
                    if (data.deletedCount > 0) {
                        setMyOrders(newOrders);
                    }
                })
        } else {
            return
        }
    }


    return (
        // My orders list table
        <div className="flex flex-col justify-center py-6 lg:px-20 sm:px-10 md:px-10">
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
                                    myOrders.map(order => <OrderItem key={order._id} order={order} handleDelete={handleDelete}></OrderItem>)
                                }

                            </tbody>
                        </table>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default OrderList;