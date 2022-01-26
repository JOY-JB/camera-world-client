import React, { useState } from 'react';
import { useHistory } from 'react-router-dom';
import useAuth from '../../../../../../Hooks/useAuth';

const PurchaseForm = ({ productId }) => {
    const { user } = useAuth();
    const history = useHistory();
    const initialInfo = {
        name: user.displayName,
        email: user.email,
        quantity: 1,
        productId
    }
    const [userInfo, setUserInfo] = useState(initialInfo);

    const handleOnBlur = e => {
        const field = e.target.name;
        const value = e.target.value;
        const newUserInfo = { ...userInfo };
        newUserInfo[field] = value;
        setUserInfo(newUserInfo);
    }

    const handleOnSubmit = e => {
        e.preventDefault();
        // send data to server
        fetch("http://localhost:5000/purchase", {
            method: "POST",
            headers: {
                "content-type": "application/json"
            },
            body: JSON.stringify(userInfo)
        })
            .then(res => res.json())
            .then(data => {
                if (data.acknowledged) {
                    alert("Product Purchased Successfully");
                    history.push("/");
                }
            })
    }

    return (
        <div className='w-1/2'>
            <form className="w-full" onSubmit={handleOnSubmit}>
                <h2 className="text-3xl font-bold leading-7 text-gray-900 sm:text-4xl sm:truncate">
                    Customer Details
                </h2>
                <div className="md:flex md:items-center my-6">
                    <div className="md:w-1/3">
                        <label className=" text-left block text-gray-500 font-bold md:text-right mb-1 md:mb-0 pr-4" style={{ textAlign: "left" }} for="full-name">
                            Full Name
                        </label>
                    </div>
                    <div className="md:w-2/3">
                        <input className="bg-gray-200 appearance-none border-2 border-gray-200 rounded w-full py-2 px-4 text-gray-700 leading-tight focus:outline-none focus:bg-white focus:border-purple-500" name="fullName" id="full-name" type="text" defaultValue={user?.displayName} placeholder='Enter Your Full Name' onBlur={handleOnBlur} required />
                    </div>
                </div>
                <div className="md:flex md:items-center mb-6">
                    <div className="md:w-1/3">
                        <label className="block text-gray-500 font-bold md:text-right mb-1 md:mb-0 pr-4" style={{ textAlign: "left" }} for="email">
                            Email
                        </label>
                    </div>
                    <div className="md:w-2/3">
                        <input className="bg-gray-200 appearance-none border-2 border-gray-200 rounded w-full py-2 px-4 text-gray-700 leading-tight focus:outline-none focus:bg-white focus:border-purple-500" id="email" type="email" placeholder="Enter Your Email" defaultValue={user?.email} name="email" onBlur={handleOnBlur} required disabled />
                    </div>
                </div>
                <div className="md:flex md:items-center mb-6">
                    <div className="md:w-1/3">
                        <label className="block text-gray-500 font-bold md:text-right mb-1 md:mb-0 pr-4" style={{ textAlign: "left" }} for="phone">
                            Phone
                        </label>
                    </div>
                    <div className="md:w-2/3">
                        <input className="bg-gray-200 appearance-none border-2 border-gray-200 rounded w-full py-2 px-4 text-gray-700 leading-tight focus:outline-none focus:bg-white focus:border-purple-500" id="phone" type="number" value={user?.phoneNumber} placeholder="Enter Your Phone Number" name="phone" onBlur={handleOnBlur} required />
                    </div>
                </div>
                <div className="md:flex md:items-center mb-6">
                    <div className="md:w-1/3">
                        <label className="block text-gray-500 font-bold md:text-right mb-1 md:mb-0 pr-4" style={{ textAlign: "left" }} for="address">
                            Address
                        </label>
                    </div>
                    <div className="md:w-2/3">
                        <input className="bg-gray-200 appearance-none border-2 border-gray-200 rounded w-full py-2 px-4 text-gray-700 leading-tight focus:outline-none focus:bg-white focus:border-purple-500" id="address" type="text" placeholder="Enter Your Address" name="address" onBlur={handleOnBlur} required />
                    </div>
                </div>
                <div className="md:flex md:items-center mb-6">
                    <div className="md:w-1/3">
                        <label className="block text-gray-500 font-bold md:text-right mb-1 md:mb-0 pr-4" style={{ textAlign: "left" }} for="quantity">
                            Quantity
                        </label>
                    </div>
                    <div className="md:w-2/3">
                        <input className="bg-gray-200 appearance-none border-2 border-gray-200 rounded w-full py-2 px-4 text-gray-700 leading-tight focus:outline-none focus:bg-white focus:border-purple-500" id="address" defaultValue="1" type="number" placeholder="Enter Product Quantity" name="quantity" onBlur={handleOnBlur} required />
                    </div>
                </div>
                <div className="md:flex md:items-center">
                    <div className="md:w-1/3"></div>
                    <div className="md:w-2/3">
                        <button type="submit" className=" bg-transparent text-indigo-500 font-semibold border border-indigo-500 rounded hover:bg-indigo-600 hover:text-white hover:border-transparent transition ease-in duration-200 transform hover:-translate-y-1 active:translate-y-0 px-10 py-1">
                            Purchase
                        </button>
                    </div>
                </div>
            </form>
        </div>
    );
};

export default PurchaseForm;