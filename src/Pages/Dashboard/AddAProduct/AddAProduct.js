import React from 'react';
import { useForm } from "react-hook-form";

const AddAProduct = () => {
    const { register, handleSubmit, formState: { errors }, reset } = useForm();

    // add a product to database
    const onSubmit = data => {
        fetch("https://damp-plateau-38093.herokuapp.com/addproduct", {
            method: "POST",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify(data)
        })
            .then(res => res.json())
            .then(data => {
                if (data.acknowledged) {
                    alert("Product added successfully");
                    reset();
                }
            });

    };

    return (
        <div className='lg:w-4/12 mx-auto py-10 px-10'>
            <h2 className="text-3xl mb-4 leading-7 text-gray-900 sm:text-4xl sm:truncate">
                Add a product
            </h2>
            <form onSubmit={handleSubmit(onSubmit)}>
                <div className="mb-4">
                    <label htmlFor="name" className="text-left block mb-2 text-sm font-medium text-gray-900 dark:text-gray-300">Product name</label>
                    <input type="text" id="name" className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-1.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                        {...register("product_name", { required: true })} />
                    {errors.product_name &&
                        <div className="text-left mb-4 text-sm text-red-400 rounded-lg dark:bg-red-200 dark:text-red-800" role="alert">
                            <span className="font-medium">Product name </span> is required!!
                        </div>
                    }
                </div>
                <div className="mb-4">
                    <label htmlFor="imgurl" className="text-left block mb-2 text-sm font-medium text-gray-900 dark:text-gray-300">Product Image URL</label>
                    <input type="text" id="imgurl" className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-1.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                        {...register("product_img_url", { required: true })} />
                    {errors.product_img_url &&
                        <div className="text-left mb-4 text-sm text-red-400 rounded-lg dark:bg-red-200 dark:text-red-800" role="alert">
                            <span className="font-medium">Product Image URL </span> is required!!
                        </div>
                    }
                </div>
                <div className="mb-4">
                    <label htmlFor="price" className="text-left block mb-2 text-sm font-medium text-gray-900 dark:text-gray-300">Product Price</label>
                    <input type="number" id="price" className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-1.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                        {...register("price", { required: true })} />
                    {errors.price &&
                        <div className="text-left mb-4 text-sm text-red-400 rounded-lg dark:bg-red-200 dark:text-red-800" role="alert">
                            <span className="font-medium">Product Price</span> is required!!
                        </div>
                    }
                </div>
                <div className="mb-4">
                    <label htmlFor="description" className="text-left block mb-2 text-sm font-medium text-gray-900 dark:text-gray-300">Product Description</label>
                    <textarea type="text" id="description" className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-1.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                        {...register("description", { required: true })} />
                    {errors.description &&
                        <div className="text-left mb-4 text-sm text-red-400 rounded-lg dark:bg-red-200 dark:text-red-800" role="alert">
                            <span className="font-medium">Product Description</span> is required!!
                        </div>
                    }
                </div>
                <button type="submit" className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:ring-blue-300 font-medium rounded-lg text-sm w-full sm:w-auto px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">Submit</button>
            </form>

        </div>
    );
};

export default AddAProduct;