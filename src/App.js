import React from "react";
import { BrowserRouter as  Router, Routes, Route} from "react-router-dom";
import Home from "./Home";
import Contact from "./Contact";
import Products from "./Products";
import About from "./About";
import SingleProduct from "./SingleProduct"
import Cart from "./Cart";
import ErrorPage from "./ErrorPage";
import { GlobalStyle } from "./GlobalStyle";
import { ThemeProvider } from "styled-components";
import Header from "./Component/Header";

const App = () => {
 const theme = {
  colors: {
    text: "rgba(29 ,29 ,29 .8)",
    white: "#fff",
    black: "#212529",
    helper: "#8490ff",
    bg: "#F6F8FA",
    footer_bg: "0a1435",
    btn: "rgb(98, 84, 243, 0.5)",
    hr: "#ffffff",
    gradient: "linear-gradient(0deg, rgb(132 144 255) 0%, rgb(98 189 252) 100%)",
    shadowSupport: "rgba(0, 0, 0, 0.16) 0px 1px 4px",

  },
  media:{
    mobile : "768px",
    tab: "998px",
  }
 };

  return (
<ThemeProvider theme={theme}>
    <Router> 
    <GlobalStyle/>
    <Header /> 
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
    </ThemeProvider>
    
  );
};

export default App;
