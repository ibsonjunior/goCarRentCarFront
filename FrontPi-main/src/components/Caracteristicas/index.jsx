import './style.css'
// import { Context } from "../Context/Context";
// import React, { useContext, useState } from "react";
import {   Butterfly, Dog, FlowerLotus, Planet, RocketLaunch, FlyingSaucer } from "phosphor-react";

export default function Caracteristicas({product}){
    return(
        <>

        <div className='descricao'>
            <h1>{product.name} </h1>
            <hr className='solid'></hr>
            <div className='descriptionCar'><p>{product.description}</p></div>
        </div>

        <div className='caracteristicas'>
            <h1>O que esse carro oferece ?</h1>
            <hr className='solid'></hr>
            <div className='container'>
                {
                    product.features?.map(feature =>{
                        return (
                            <div key={feature.id} className="item" > 
                              <img className='iconCar'  src={feature.icon} alt="icon" />
                              <h4>{feature.name}</h4>                       
                            </div>
                        )
                    })
                }
                   
            </div>
        </div>
        </>
    )
}