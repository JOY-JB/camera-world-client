import './App.css';

import {
  BrowserRouter as Router,
  Switch,
  Route
} from "react-router-dom";
import Navbar from './Pages/Shared/Navbar/Navbar';
import Footer from './Pages/Shared/Footer/Footer';
import Home from './Pages/Home/Home/Home';
import Product from './Pages/Product/Product/Product';
import AboutUs from './Pages/AboutUs/AboutUs';

function App() {
  return (
    <div className="App flex flex-col" style={{ "height": "100vh" }}>
      <Router>
        <Navbar></Navbar>
        <Switch>
          <Route path="/home">
            <Home></Home>
          </Route>
          <Route path="/product">
            <Product></Product>
          </Route>
          <Route path="/aboutUs">
            <AboutUs></AboutUs>
          </Route>
          <Route path="/" exact>
            <Home></Home>
          </Route>
        </Switch>
        <Footer></Footer>
      </Router >
    </div >
  );
}

export default App;
