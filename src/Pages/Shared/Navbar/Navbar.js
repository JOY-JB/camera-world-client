import React from 'react';
import { Link } from 'react-router-dom';
import useAuth from '../../../Hooks/useAuth';

const Navbar = () => {
    const { user, logoutUser } = useAuth();


    return (
        // this is header nav bar
        <div>
            <header className="text-gray-600 body-font ">
                <div className="container mx-auto flex flex-wrap p-5 flex-col md:flex-row items-center">
                    <Link to="/" className="flex title-font font-medium items-center text-gray-900 mb-4 md:mb-0">
                        <span className="ml-3 text-xl">Camera World</span>
                    </Link>
                    <nav className="md:ml-auto md:mr-auto flex flex-wrap items-center text-base justify-center">
                        <Link className='mr-5 hover:text-gray-900' to="/home">
                            Home
                        </Link>
                        <Link className='mr-5 hover:text-gray-900' to="/products">
                            Products
                        </Link>
                        {
                            user?.email ?
                                <Link className='mr-5 hover:text-gray-900' to="/dashboard">
                                    Dashboard
                                </Link> : ""
                        }
                    </nav>

                    {
                        user.email ?
                            <button onClick={logoutUser} className="inline-flex items-center bg-gray-100 border-0 py-1 px-3 focus:outline-none hover:bg-gray-200 rounded text-base mt-4 md:mt-0">Logout
                            </button> :
                            <Link to="/login">
                                <button className="inline-flex items-center bg-gray-100 border-0 py-1 px-3 focus:outline-none hover:bg-gray-200 rounded text-base mt-4 md:mt-0">Login
                                </button>
                            </Link>

                    }
                </div>
            </header>
        </div>
    );
};

export default Navbar;