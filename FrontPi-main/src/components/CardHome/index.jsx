import { Link} from "react-router-dom";
import React, { useContext, useState } from "react";
import { Context } from '../../Context/Context';


function CardHome() {
    const { carsImage, carsProducts} = useContext(Context);
    const id = [43,37,31,13,25,19,7,1];
    const image = carsImage?.filter((carsImage) => id.includes(carsImage.id));

   
    let carros = carsProducts.map((cars)=>{
        const names = cars.name.split(" ");
        const fotos = image.find((fotos)=> fotos.title.includes(names[0]))
        return {...cars, urlImage:fotos?.urlImage}
        
    });
    console.log(carros);
    
    
        return (
            <>
                <div className="galeria_carro">  {
    
                    carros?.map((car) => (
                        <div key={image.id} className="card_main">
                            <div  className="card_image"> <img src={car?.urlImage} alt="" /> </div>
                            <div className="card_description">
    
                                
                                <div  className="card_title"> <h3>{car?.name}</h3> </div>

                                <div  className="car_description"> 
                                
                                    <h6>{car.category.qualification}</h6>
                                    <p>{car.description}</p> 

                                    <div className="car_button">
                                        <Link to={'/product/' + car.id } className="link_button">
                                            <button className="button_car">
                                                Ver mais
                                            </button>
                                        </Link >
                                    </div>

                                </div>
                                {/* <Link to={'/product/' +carro.id}> */}
                                
                                

                            </div>
                        </div>
                    ))
    
                }
                </div>
    
    
    
            </>
        )
    }
    
    export default CardHome