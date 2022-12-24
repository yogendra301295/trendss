import axios from "axios";
import { createContext, useContext, useEffect } from "react"

const AppContext = createContext();

const API = "https://api.pujakaitem.com/api/products";


const AppProvider = ({children}) => {

    const getProducts = async (url) =>{
      const res = await axios.get(url);
      const products = await res.data
      console.log(
        " ~ file: productContext.js ~ line 14 ~ getProducts ~products", 
        products
        );
    }
     
    useEffect(() => {
        getProducts(API);

    });

    return <AppContext.Provider value={{myName: "Tinku"}}>{children}</AppContext.Provider>
};

//custom hook 
const useProductContext = ()=>{
    return useContext(AppContext); 

};

export {AppProvider, AppContext, useProductContext};