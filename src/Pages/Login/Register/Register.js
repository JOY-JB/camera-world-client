import React from 'react';
import { useForm } from "react-hook-form";
import { Link, useHistory } from 'react-router-dom';
import useAuth from '../../../Hooks/useAuth';


const Register = () => {
    const { register, handleSubmit, formState: { errors } } = useForm();
    const { registerUser, loading } = useAuth();

    const history = useHistory();

    const onSubmit = data => {
        if (data.password !== data.confirmPassword) {
            alert("Password does not matched!");
            return;
        } else {
            registerUser(data.email, data.password, data.fullname, history);

        }

    }

    if (loading) {
        return <div className=" flex justify-center items-center">
            <div className="animate-spin rounded-full h-32 w-32 border-b-2 border-gray-900"></div>
        </div>
    }

    return (
        // this is register page
        <div>
            <div className="bg-grey-lighter min-h-screen flex flex-col">
                <div className="container max-w-sm mx-auto flex-1 flex flex-col items-center justify-center px-2">
                    <form className="bg-white px-6 py-8 rounded shadow-md text-black w-full" onSubmit={handleSubmit(onSubmit)} >
                        <h1 className="mb-8 text-3xl text-center">Sign up</h1>
                        <input
                            type="text"
                            className="block border border-grey-light w-full p-3 rounded mb-4"
                            name="fullname"
                            {...register("fullname", { required: true })}
                            placeholder="Full Name" />

                        {errors.fullname &&
                            <div className=" mb-4 text-sm text-red-400 rounded-lg dark:bg-red-200 dark:text-red-800" role="alert">
                                <span className="font-medium">Name </span> field is required!!
                            </div>
                        }

                        <input
                            type="email"
                            className="block border border-grey-light w-full p-3 rounded mb-4"
                            name="email"
                            {...register("email", { required: true })}
                            placeholder="Email" />

                        {errors.email &&
                            <div className=" mb-4 text-sm text-red-400 rounded-lg dark:bg-red-200 dark:text-red-800" role="alert">
                                <span className="font-medium">Email </span> field is required!!
                            </div>
                        }

                        <input
                            type="password"
                            className="block border border-grey-light w-full p-3 rounded mb-4"
                            name="password"
                            minLength="5"
                            {...register("password", { required: true })}
                            placeholder="Password" />

                        {errors.password &&
                            <div className=" mb-4 text-sm text-red-400 rounded-lg dark:bg-red-200 dark:text-red-800" role="alert">
                                <span className="font-medium">Password </span> field is required!!
                            </div>
                        }

                        <input
                            type="password"
                            className="block border border-grey-light w-full p-3 rounded mb-4"
                            name="confirm_password"
                            minLength="5"
                            {...register("confirmPassword", { required: true })}
                            placeholder="Confirm Password" />

                        {errors.confirmPassword &&
                            <div className=" mb-4 text-sm text-red-400 rounded-lg dark:bg-red-200 dark:text-red-800" role="alert">
                                <span className="font-medium">Confirm password </span> field is required!!
                            </div>
                        }

                        <button
                            type="submit"
                            className="w-full text-center py-3 rounded bg-green-400 text-white hover:bg-green-500 focus:outline-none my-1"
                        >Create Account</button>

                    </form>

                    <div className="text-grey-dark mt-6">
                        Already have an account? &nbsp;
                        <Link className="no-underline border-b border-blue text-blue" to="/login">
                            Login Here!
                        </Link>
                    </div>
                </div>
            </div>

        </div>
    );
};

export default Register;