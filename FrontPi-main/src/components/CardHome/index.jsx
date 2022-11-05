import './style.css'
import { Link} from "react-router-dom";
import React, { useContext, useState } from "react";
import { Context } from '../../Context/Context';


function CardHome() {
    const { cars } = useContext(Context);
    return (
        <>
            <div className="galeria_carro">  {

                cars?.map((car) => (
                    <div key={car.id} className="card_main">
                        <div  className="card_image"> <img src={car.image} alt="" /> </div>
                        <div className="card_description">

                            
                            <div  className="card_title"> <h3>{car.title}</h3> </div>
                            <div  className="car_description"> 
                            
                            <h6>{car.title}</h6>
                            <p>{car.description}</p> 
                            
                            </div>
                            {/* <Link to={'/product/' +carro.id}> */}
                            <Link to={'/product/' + car.id }>
                            <button className="about">ver mais</button>
                            </Link >
                        </div>
                    </div>
                ))

            }
            </div>



        </>
    )
}

export default CardHome