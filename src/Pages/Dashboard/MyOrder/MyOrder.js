import React from 'react';
import OrderList from './OrderList/OrderList';

const MyOrder = () => {
    return (
        // my orders page
        <div className='w-full mt-6 sm:text-xs'>
            <h2 className="text-3xl leading-7 text-gray-900 sm:text-4xl sm:truncate">
                My Orders
            </h2>
            <OrderList />
        </div>
    );
};

export default MyOrder;