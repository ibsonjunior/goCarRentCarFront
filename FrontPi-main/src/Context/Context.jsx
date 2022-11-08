import { createContext, useState, useEffect } from "react";

export const Context = createContext({});

const ContextProvider = ({children}) =>{
    const [cars, setCars] = useState([]);

    // Produts
    const urlProducts = "https://fakestoreapi.com/products?limit=4"

    useEffect(() => {
        fetch(urlProducts)
            .then(responseCars => responseCars.json())
            .then(carsJSON => {
                const newCars = carsJSON.map(car => {
                  // const imagens = car.images.map(imagem => {
                  //   return {
                  //     original: imagem,
                  //     thumbnail: imagem
                  //   }
                  // })

                  return {
                    ...car,
                    images: [
                      {
                        original: car.image,
                        thumbnail: car.image
                      },
                      {
                        original: car.image,
                        thumbnail: car.image
                      },
                      {
                        original: car.image,
                        thumbnail: car.image
                      },
                      {
                        original: car.image,
                        thumbnail: car.image
                      }
                    ]
                  }
                })

                setCars(newCars)
            })  
    }, []);

    return(
        <Context.Provider value={{cars, setCars }}>
            {children}
        </Context.Provider>
    )
}

export default ContextProvider;


