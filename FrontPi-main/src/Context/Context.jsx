import { createContext,useState, useEffect } from "react";

export const Context = createContext({});

const ContextProvider = ({children}) =>{
    const [cars, setCars] = useState([]);

  



    // const url = "http://52.53.193.244:8081/products"

    // useEffect(() => {
    //     fetch(url)
    //         .then(responseWines => responseWines.json())
    //         .then(WinesJSON => setWines(WinesJSON))  
    // }, []);

    return(
        <ProductContext.Provider value={{cars, setCars }}>
            {children}
        </ProductContext.Provider>
    )
}

export default ContextProvider;
