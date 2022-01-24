import React from 'react';
import { useForm } from "react-hook-form";
import { Link, useHistory, useLocation } from 'react-router-dom';
import useAuth from '../../Hooks/useAuth';


const Login = () => {
    const { loginUser, error, loading } = useAuth();
    const { register, handleSubmit, formState: { errors } } = useForm();
    const location = useLocation();
    const history = useHistory();

    const onSubmit = data => {
        loginUser(data.email, data.password, location, history);
    }

    if (loading) {
        return <div class=" flex justify-center items-center">
            <div class="animate-spin rounded-full h-32 w-32 border-b-2 border-gray-900"></div>
        </div>
    }

    return (
        <div>
            <div className="bg-grey-lighter min-h-screen flex flex-col">
                <div className="container max-w-sm mx-auto flex-1 flex flex-col items-center justify-center px-2">
                    <form className="bg-white px-6 py-8 rounded shadow-md text-black w-full" onSubmit={handleSubmit(onSubmit)} >
                        <h1 className="mb-8 text-3xl text-center">Log In</h1>

                        <input
                            type="email"
                            className="block border border-grey-light w-full p-3 rounded mb-4"
                            name="email"
                            {...register("email", { required: true })}
                            placeholder="Email" />

                        {errors.email &&
                            <div class=" mb-4 text-sm text-red-400 rounded-lg dark:bg-red-200 dark:text-red-800" role="alert">
                                <span class="font-medium">Email </span> field is required!!
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
                            <div class=" mb-4 text-sm text-red-400 rounded-lg dark:bg-red-200 dark:text-red-800" role="alert">
                                <span class="font-medium">Password </span> field is required!!
                            </div>
                        }

                        {
                            error &&
                            <div class="bg-red-200 relative text-red-500 py-2 px-3 rounded-lg mb-4">
                                {error}
                            </div>
                        }
                        <button
                            type="submit"
                            className="w-full text-center py-3 rounded bg-green-400 text-white hover:bg-green-500 focus:outline-none my-1"
                        >Create Account</button>

                    </form>

                    <div className="text-grey-dark mt-6">
                        Don't have an account?&nbsp;
                        <Link className="no-underline border-b border-blue text-blue" to="/register">
                            Sign Up Here!
                        </Link>
                    </div>
                </div>
            </div>

        </div>
    );
};

export default Login;