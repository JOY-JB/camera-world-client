import './App.css';

import {
  BrowserRouter as Router,
  Switch,
  Route
} from "react-router-dom";
import Navbar from './Pages/Shared/Navbar/Navbar';
import Footer from './Pages/Shared/Footer/Footer';
import Home from './Pages/Home/Home/Home';
import Login from './Pages/Login/Login';
import Register from './Pages/Login/Register/Register';
import AuthProvider from './context/AuthProvider/AuthProvider';
import Dashboard from './Pages/Dashboard/Dashboard';
import NavProducts from './Pages/NavProducts/NavProducts';
import Purchase from './Pages/Shared/Products/Product/Purchase/Purchase';
import PrivateRoute from './PrivateRoute/PrivateRoute';

function App() {
  return (
    <AuthProvider>
      <div className="App flex flex-col" style={{ "height": "100vh" }}>
        <Router>
          <Navbar></Navbar>
          <Switch>
            <Route path="/home">
              <Home></Home>
            </Route>
            <Route path="/products">
              <NavProducts></NavProducts>
            </Route>
            <Route path="/login">
              <Login></Login>
            </Route>
            <Route path="/register">
              <Register></Register>
            </Route>
            <PrivateRoute path="/purchase/:id">
              <Purchase></Purchase>
            </PrivateRoute>
            <Route path="/dashboard">
              <Dashboard></Dashboard>
            </Route>
            <Route path="/" exact>
              <Home></Home>
            </Route>
          </Switch>
          <Footer></Footer>
        </Router >
      </div >
    </AuthProvider>
  );
}

export default App;
