import React from "react";
import {
    BrowserRouter as Router,
    Switch,
    Route,
    Link,
    useRouteMatch
} from "react-router-dom";
import useAuth from "../../Hooks/useAuth";
import AdminRoute from "../../PrivateRoute/AdminRoute/AdminRoute";
import AddAProduct from "./AddAProduct/AddAProduct";
import MakeAnAdmin from "./MakeAnAdmin/MakeAnAdmin";
import ManageAllOrders from "./ManageAllOrders/ManageAllOrders";
import ManageProducts from "./ManageProducts/ManageProducts";
import MyOrder from "./MyOrder/MyOrder";
import Pay from "./Pay/Pay";
import UserReview from "./UserReview/UserReview";



const Dashboard = () => {
    let { path, url } = useRouteMatch();
    const { admin } = useAuth();

    const handleToggle = () => {
        const sidebar = document.querySelector(".sidebar");
        sidebar.classList.toggle("-translate-x-full");
    }

    return (
        // this is dashboard of a user
        <div className="relative md:flex">

            <div className="bg-gray-800 text-gray-100 flex justify-between md:hidden">

                <Link to="/" className="block p-4 text-white font-bold">Camera World</Link>


                <button onClick={handleToggle} className="mobile-menu-button p-4 focus:outline-none focus:bg-gray-700">
                    <svg className="h-5 w-5" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16M4 18h16" />
                    </svg>
                </button>
            </div>


            <div className="min-h-screen sidebar bg-blue-800 text-blue-100 w-64 space-y-6 py-7 px-2 absolute inset-y-0 left-0 transform -translate-x-full md:relative md:translate-x-0 transition duration-200 ease-in-out">

                {/* this is dashboard navigation */}
                <nav>
                    {
                        admin ?
                            <div>
                                <Link to={`${url}/manageallorders`} className="block py-2.5 px-4 rounded transition duration-200 hover:bg-blue-700 hover:text-white">
                                    Manage All Orders
                                </Link>
                                <Link to={`${url}/addaproduct`} className="block py-2.5 px-4 rounded transition duration-200 hover:bg-blue-700 hover:text-white">
                                    Add a Product
                                </Link>
                                <Link to={`${url}/makeadmin`} className="block py-2.5 px-4 rounded transition duration-200 hover:bg-blue-700 hover:text-white">
                                    Make an admin
                                </Link>
                                <Link to={`${url}/manageproducts`} className="block py-2.5 px-4 rounded transition duration-200 hover:bg-blue-700 hover:text-white">
                                    Manage Products
                                </Link>
                            </div>
                            :
                            <div>
                                <Link to={`${url}`} className="block py-2.5 px-4 rounded transition duration-200 hover:bg-blue-700 hover:text-white">
                                    My Orders
                                </Link>
                                <Link to={`${url}/pay`} className="block py-2.5 px-4 rounded transition duration-200 hover:bg-blue-700 hover:text-white">
                                    Pay
                                </Link>
                                <Link to={`${url}/review`} className="block py-2.5 px-4 rounded transition duration-200 hover:bg-blue-700 hover:text-white">
                                    Review
                                </Link>
                            </div>
                    }
                </nav>
            </div>

            {/* nested route of dashboard */}
            <Switch>
                {admin ? <Route exact path={path}>
                    <ManageAllOrders></ManageAllOrders>
                </Route>
                    :
                    <Route exact path={path}>
                        <MyOrder></MyOrder>
                    </Route>}
                <Route path={`${path}/pay`}>
                    <Pay></Pay>
                </Route>
                <Route path={`${path}/review`}>
                    <UserReview></UserReview>
                </Route>
                <AdminRoute path={`${path}/manageallorders`}>
                    <ManageAllOrders></ManageAllOrders>
                </AdminRoute>
                <AdminRoute path={`${path}/addaproduct`}>
                    <AddAProduct></AddAProduct>
                </AdminRoute>
                <AdminRoute path={`${path}/makeadmin`}>
                    <MakeAnAdmin></MakeAnAdmin>
                </AdminRoute>
                <AdminRoute path={`${path}/manageproducts`}>
                    <ManageProducts></ManageProducts>
                </AdminRoute>
            </Switch>


        </div>
    );
}

export default Dashboard;
