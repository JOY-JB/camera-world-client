import React from "react";
import {
    BrowserRouter as Router,
    Switch,
    Route,
    Link,
    useParams,
    useRouteMatch
} from "react-router-dom";
import AddAProduct from "./AddAProduct/AddAProduct";
import DashboardHome from "./DashboardHome/DashboardHome";
import MakeAnAdmin from "./MakeAnAdmin/MakeAnAdmin";
import ManageAllOrders from "./ManageAllOrders/ManageAllOrders";
import ManageProducts from "./ManageProducts/ManageProducts";
import MyOrder from "./MyOrder/MyOrder";
import Pay from "./Pay/Pay";
import UserReview from "./UserReview/UserReview";



const Dashboard = () => {
    let { path, url } = useRouteMatch();

    const handleToggle = () => {
        const sidebar = document.querySelector(".sidebar");
        sidebar.classList.toggle("-translate-x-full");
    }

    return (
        <div class="relative min-h-screen md:flex">

            <div class="bg-gray-800 text-gray-100 flex justify-between md:hidden">

                <a href="#" class="block p-4 text-white font-bold">Better Dev</a>


                <button onClick={handleToggle} class="mobile-menu-button p-4 focus:outline-none focus:bg-gray-700">
                    <svg class="h-5 w-5" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 6h16M4 12h16M4 18h16" />
                    </svg>
                </button>
            </div>


            <div class="sidebar bg-blue-800 text-blue-100 w-64 space-y-6 py-7 px-2 absolute inset-y-0 left-0 transform -translate-x-full md:relative md:translate-x-0 transition duration-200 ease-in-out">


                <nav>
                    <Link to={`${url}`} class="block py-2.5 px-4 rounded transition duration-200 hover:bg-blue-700 hover:text-white">
                        Home
                    </Link>
                    <Link to={`${url}/pay`} class="block py-2.5 px-4 rounded transition duration-200 hover:bg-blue-700 hover:text-white">
                        Pay
                    </Link>
                    <Link to={`${url}/myorder`} class="block py-2.5 px-4 rounded transition duration-200 hover:bg-blue-700 hover:text-white">
                        My Orders
                    </Link>
                    <Link to={`${url}/review`} class="block py-2.5 px-4 rounded transition duration-200 hover:bg-blue-700 hover:text-white">
                        Review
                    </Link>
                    <Link to={`${url}/manageallorders`} class="block py-2.5 px-4 rounded transition duration-200 hover:bg-blue-700 hover:text-white">
                        Manage All Orders
                    </Link>
                    <Link to={`${url}/addaproduct`} class="block py-2.5 px-4 rounded transition duration-200 hover:bg-blue-700 hover:text-white">
                        Add a Product
                    </Link>
                    <Link to={`${url}/makeadmin`} class="block py-2.5 px-4 rounded transition duration-200 hover:bg-blue-700 hover:text-white">
                        Make an admin
                    </Link>
                    <Link to={`${url}/manageproducts`} class="block py-2.5 px-4 rounded transition duration-200 hover:bg-blue-700 hover:text-white">
                        Manage Products
                    </Link>
                </nav>
            </div>

            <Switch>
                <Route exact path={path}>
                    <DashboardHome></DashboardHome>
                </Route>
                <Route path={`${path}/pay`}>
                    <Pay></Pay>
                </Route>
                <Route path={`${path}/myorder`}>
                    <MyOrder></MyOrder>
                </Route>
                <Route path={`${path}/review`}>
                    <UserReview></UserReview>
                </Route>
                <Route path={`${path}/manageallorders`}>
                    <ManageAllOrders></ManageAllOrders>
                </Route>
                <Route path={`${path}/addaproduct`}>
                    <AddAProduct></AddAProduct>
                </Route>
                <Route path={`${path}/makeadmin`}>
                    <MakeAnAdmin></MakeAnAdmin>
                </Route>
                <Route path={`${path}/manageproducts`}>
                    <ManageProducts></ManageProducts>
                </Route>
            </Switch>


        </div>
    );
}

export default Dashboard;
