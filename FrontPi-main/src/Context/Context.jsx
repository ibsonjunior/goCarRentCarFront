import { createContext, useState, useEffect } from "react";

export const Context = createContext({});

const ContextProvider = ({children}) =>{
    const [cars, setCars] = useState([]);
    const [categiriesCars, setCategiriesCars] = useState([]);
  


    // Produts
    const urlProducts = "https://fakestoreapi.com/products?limit=4"

    useEffect(() => {
        fetch(urlProducts)
            .then(responseCars => responseCars.json())
            .then(carsJSON => setCars(carsJSON))  
    }, []);

    //Categories

    const urlCategories = "https://fakestoreapi.com/products/categories"

    useEffect(() => {
        fetch(urlCategories)
            .then(responseCategoriesCars => responseCategoriesCars.json())
            .then(CategoriesCarsJSON => setCategiriesCars(CategoriesCarsJSON))  
    }, []);

    return(
        <Context.Provider value={{cars, setCars, categiriesCars, setCategiriesCars }}>
            {children}
        </Context.Provider>
    )
}

export default ContextProvider;


