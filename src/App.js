import './App.css';
// import '../node_modules/bootstrap-dark-5/dist/css/bootstrap-dark.min.css'  //npm i bootstrap-dark-5 boostrap
// import '../node_modules/bootstrap/dist/js/bootstrap.bundle';
// import "../node_modules/bootstrap/dist/js/bootstrap.bundle.min.js";

import Home from './components/screens/Home.js';
import {
  BrowserRouter as Router,
  Routes,
  Route
} from "react-router-dom";
import Login from './components/screens/Login.js';
import '../node_modules/bootstrap-dark-5/dist/css/bootstrap-dark.min.css';
import '../node_modules/bootstrap/dist/js/bootstrap.bundle';
import '../node_modules/bootstrap/dist/js/bootstrap.bundle.min.js';
import Signup from './components/screens/Signup.js';
import { CartProvider } from './components/ContextReducer.js';
import MyOrder from './components/screens/MyOrder.js';

function App() {
  return (
    <CartProvider>
      <Router>
        <div>
          <Routes>
            <Route exact path="/" element={<Home />} />
            <Route exact path="/login" element={<Login />} />
            <Route exact path="/createuser" element={<Signup />} /> 
            <Route exact path="/myOrder" element={<MyOrder />} /> 
          </Routes>
        </div>
      </Router>
    </CartProvider>
  );
}

export default App;
