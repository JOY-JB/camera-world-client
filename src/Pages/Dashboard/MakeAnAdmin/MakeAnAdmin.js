import React, { useState } from 'react';
import { useHistory } from 'react-router-dom';

const MakeAnAdmin = () => {
    const [email, setEmail] = useState({});
    const history = useHistory();

    // function for make a admin by email 
    const handleSubmit = e => {
        e.preventDefault();

        const adminEmail = { email }

        fetch("http://localhost:5000/addadmin", {
            method: "PUT",
            headers: {
                "content-type": "application/json"
            },
            body: JSON.stringify(adminEmail)
        })
            .then(res => res.json())
            .then(data => {
                if (data.modifiedCount > 0) {
                    window.alert("admin added Successfully!!");
                    history.push("/dashboard");
                }
            })
    }

    const handleOnChange = e => {
        setEmail(e.target.value);
    }
    return (
        <div className='lg:w-4/12 mx-auto py-10 px-10'>
            <h2 className="text-3xl mb-4 leading-7 text-gray-900 sm:text-4xl sm:truncate">
                Make a admin
            </h2>
            <form onSubmit={handleSubmit}>
                <div className="mb-4">
                    <label htmlFor="email" className="text-left block mb-2 text-sm font-medium text-gray-900 dark:text-gray-300">Email</label>
                    <input type="email" id="email" className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-1.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" onChange={handleOnChange} required />
                </div>

                <button type="submit" className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:ring-blue-300 font-medium rounded-lg text-sm w-full sm:w-auto px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">Submit</button>
            </form>

        </div>
    );
};

export default MakeAnAdmin;