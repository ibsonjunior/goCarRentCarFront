import { createContext, useState, useEffect } from "react";

export const Context = createContext({});

const ContextProvider = ({children}) =>{
    const [cars, setCars] = useState([]);
    const [carsImage, setCarsImage] = useState([]);
    const [carsProducts, setcarsProducts] = useState([]);
    
    // Cars
    const urlCategories = "http://3.80.237.186:8081/categories"
    useEffect(() => {
        fetch(urlCategories)
            .then(responseCars => responseCars.json())
            .then(carsJSON => setCars(carsJSON) )
            }, [])

    // Products
    const urlProducts = "http://3.80.237.186:8081/products"
    useEffect(() => {
        fetch(urlProducts)
            .then(responseCars => responseCars.json())
            .then(carsJSON => setcarsProducts(carsJSON) )
            }, [])

    // Images
    const urlImages = "http://3.80.237.186:8081/images"
    // useEffect(() => {
    //     fetch(urlImages)
    //         .then(responseCars => responseCars.json())
    //         .then(carsJSON => setCarsImage(carsJSON) )
    // }, [])

    useEffect(() => {
        fetch(urlImages)
            .then(responseCars => responseCars.json())
            .then(carsJSON => {
                const images = carsJSON.map(car => {
                  // const imagens = car.images.map(imagem => {
                  //   return {
                  //     original: imagem,
                  //     thumbnail: imagem
                  //   }
                  // })

                  // return (
                  //   car.urlImage
                  // )

                  return {
                    ...car,
                    images: [
                      {
                        original: car.urlImage,
                        thumbnail: car.urlImage
                      },
                      {
                        original: car.urlImage,
                        thumbnail: car.urlImage
                      },
                      {
                        original: car.urlImage,
                        thumbnail: car.urlImage
                      },
                      {
                        original: car.urlImage,
                        thumbnail: car.urlImage
                      }
                    ]
                  }
                })

                // console.log(images);
                setCarsImage(images)
            })  
    }, []);


    return(
        <Context.Provider value={{cars, setCars, carsImage, setCarsImage, carsProducts, setcarsProducts }}>
            {children}
        </Context.Provider>
    )
}

export default ContextProvider;



    // Produts
    // const urlProducts = "https://fakestoreapi.com/products?limit=4"

   
