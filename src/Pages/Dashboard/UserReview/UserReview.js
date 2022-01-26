import React, { useEffect, useState } from 'react';
import { useHistory } from "react-router-dom"
import useAuth from '../../../Hooks/useAuth';

const UserReview = () => {
    const { user, loading } = useAuth();
    const history = useHistory()

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
        return <div class=" flex justify-center items-center w-full">
            <div class="animate-spin rounded-full h-32 w-32 border-b-2 border-gray-900"></div>
        </div>
    }
    return (
        <div className='w-full'>
            <form class="text-gray-600 body-font relative" onSubmit={handleSubmit}>
                <div class="container px-5 py-6 mx-auto">
                    <div class="flex flex-col text-center w-full ">
                        <h1 class="sm:text-3xl text-2xl font-medium title-font mb-4 text-gray-900">Contact Us</h1>
                    </div>
                    <div class="lg:w-1/2 md:w-2/3 mx-auto">
                        <div class="flex flex-wrap -m-2">
                            <div class="p-2 w-1/2">
                                <div class="relative">
                                    <label for="name" class="leading-7 text-sm text-gray-600">Name</label>
                                    <input type="text" id="name" name="name" class="w-full bg-gray-100 bg-opacity-50 rounded border border-gray-300 focus:border-indigo-500 focus:bg-white focus:ring-2 focus:ring-indigo-200 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out" defaultValue={user?.displayName} onBlur={handleOnBlur} required />
                                </div>
                            </div>
                            <div class="p-2 w-1/2">
                                <div class="relative">
                                    <label for="email" class="leading-7 text-sm text-gray-600">Email</label>
                                    <input type="email" id="email" name="email" class="w-full bg-gray-100 bg-opacity-50 rounded border border-gray-300 focus:border-indigo-500 focus:bg-white focus:ring-2 focus:ring-indigo-200 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out" defaultValue={user?.email} onBlur={handleOnBlur} required />
                                </div>
                            </div>
                            <div class="p-2 w-full">
                                <div class="relative">
                                    <label for="review" class="leading-7 text-sm text-gray-600">Message</label>
                                    <textarea id="review" name="review" class="w-full bg-gray-100 bg-opacity-50 rounded border border-gray-300 focus:border-indigo-500 focus:bg-white focus:ring-2 focus:ring-indigo-200 h-32 text-base outline-none text-gray-700 py-1 px-3 resize-none leading-6 transition-colors duration-200 ease-in-out" onBlur={handleOnBlur} required></textarea>
                                </div>
                            </div>
                            <div class="p-2 w-full">
                                <button type='submit' class="flex mx-auto text-white bg-indigo-500 border-0 py-2 px-8 focus:outline-none hover:bg-indigo-600 rounded text-lg">Submit</button>
                            </div>
                        </div>
                    </div>
                </div>
            </form>
        </div>
    );
};

export default UserReview;