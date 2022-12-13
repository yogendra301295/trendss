import React from "react";
import { BrowserRouter as  Router, Routes, Route} from "react-router-dom";
import Home from "./Home";
import Contact from "./Contact";
import Products from "./Products";
import About from "./About";
import SingleProduct from "./SingleProduct"
import Cart from "./Cart";
import ErrorPage from "./ErrorPage";

const App = () => {
  return (

    <Router> 
      <Routes>
        <Route path="/" element={<Home/>} /> 
        <Route path="/contact" element={<Contact /> } /> 
        <Route path="/products" element={<Products /> } /> 
        <Route path="/about" element={<About /> } /> 
        <Route path="/singleProduct/:id" element={<SingleProduct /> } /> 
        <Route path="/cart" element={<Cart /> } /> 
        <Route path="*" element={<ErrorPage /> } /> 

      </Routes>
    </Router>

  );
};

export default App;
