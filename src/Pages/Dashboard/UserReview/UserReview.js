import React, { useEffect, useState } from 'react';
import { useHistory } from "react-router-dom"
import useAuth from '../../../Hooks/useAuth';

const UserReview = () => {
    const { user, loading } = useAuth();
    const history = useHistory();

    const initialReview = {
        name: "",
        email: "",
    }
    const [review, setReview] = useState(initialReview);

    const handleOnBlur = e => {
        const field = e.target.name;
        const value = e.target.value;
        const newReview = { ...review };
        newReview[field] = value;
        setReview(newReview);
    }

    useEffect(() => {
        const newReview = {
            ...initialReview,
            name: user.displayName,
            email: user.email,
        }
        setReview(newReview);
    }, [user])

    const handleSubmit = e => {
        e.preventDefault();
        fetch("http://localhost:5000/addreview", {
            method: "POST",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify(review)
        })
            .then(res => res.json())
            .then(data => {
                if (data.insertedId) {
                    alert("Review Added Successfully")
                    history.push("/dashboard");
                }
            })
    }
    if (loading) {
        return <div className=" flex justify-center items-center w-full">
            <div className="animate-spin rounded-full h-32 w-32 border-b-2 border-gray-900"></div>
        </div>
    }
    return (
        // this is user review page
        <div className='w-full'>
            <form className="text-gray-600 body-font" onSubmit={handleSubmit}>
                <div className="container px-5 py-6 mx-auto">
                    <h2 className="text-3xl leading-7 mb-4 text-gray-900 sm:text-4xl sm:truncate">
                        Review
                    </h2>
                    <div className="lg:w-1/2 md:w-2/3 mx-auto">
                        <div className="flex flex-wrap -m-2">
                            <div className="p-2 w-1/3">
                                <div>
                                    <label htmlFor="name" className="leading-7 text-sm text-gray-600">Name</label>
                                    <input type="text" id="name" name="name" className="w-full bg-gray-100 bg-opacity-50 rounded border border-gray-300 focus:border-indigo-500 focus:bg-white focus:ring-2 focus:ring-indigo-200 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out" defaultValue={user?.displayName} onBlur={handleOnBlur} required />
                                </div>
                            </div>
                            <div className="p-2 w-1/3">
                                <div>
                                    <label htmlFor="email" className="leading-7 text-sm text-gray-600">Email</label>
                                    <input type="email" id="email" name="email" className="w-full bg-gray-100 bg-opacity-50 rounded border border-gray-300 focus:border-indigo-500 focus:bg-white focus:ring-2 focus:ring-indigo-200 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out" defaultValue={user?.email} onBlur={handleOnBlur} required />
                                </div>
                            </div>
                            <div className="p-2 w-1/3">
                                <div>
                                    <label htmlFor="ratings" className="leading-7 text-sm text-gray-600">Ratings</label>
                                    <input type="number" id="ratings" name="ratings" className="w-full bg-gray-100 bg-opacity-50 rounded border border-gray-300 focus:border-indigo-500 focus:bg-white focus:ring-2 focus:ring-indigo-200 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out" min="0" max="5" onBlur={handleOnBlur} required />
                                </div>
                            </div>
                            <div className="p-2 w-full">
                                <div>
                                    <label htmlFor="review" className="leading-7 text-sm text-gray-600">Message</label>
                                    <textarea id="review" name="review" className="w-full bg-gray-100 bg-opacity-50 rounded border border-gray-300 focus:border-indigo-500 focus:bg-white focus:ring-2 focus:ring-indigo-200 h-32 text-base outline-none text-gray-700 py-1 px-3 resize-none leading-6 transition-colors duration-200 ease-in-out" onBlur={handleOnBlur} required></textarea>
                                </div>
                            </div>
                            <div className="p-2 w-full">
                                <button type='submit' className="flex mx-auto text-white bg-indigo-500 border-0 py-2 px-8 focus:outline-none hover:bg-indigo-600 rounded text-lg">Submit</button>
                            </div>
                        </div>
                    </div>
                </div>
            </form>
        </div>
    );
};

export default UserReview;