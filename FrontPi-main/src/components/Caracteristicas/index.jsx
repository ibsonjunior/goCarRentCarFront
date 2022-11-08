import './style.css'
// import { Context } from "../Context/Context";
// import React, { useContext, useState } from "react";
import {   Butterfly, Dog, FlowerLotus, Planet, RocketLaunch, FlyingSaucer } from "phosphor-react";

export default function Caracteristicas(){
    return(
        <>

        <div className='descricao'>
            <h1>Dirija o nome </h1>
            <hr className='solid'></hr>
            <div className=''><p>O Recife Antigo de Coração é um convite para que recifenses e turistas aproveitem e vivam a cidade. Desde março de 2013, o Bairro do Recife se transforma num grande parque a céu aberto aos domingos, congregando pessoas de todas as idades, gostos e estilos.</p></div>
        </div>

        <div className='caracteristicas'>
            <h1>O que esse carro oferece ?</h1>
            <hr className='solid'></hr>
            <div class="container" >
                    <div className="item" >  <Butterfly size={32} color="#f06b1e" /> <h4>Buterfly</h4>     </div>
                    <div className="item" >  <Dog size={32} color="#f06b1e" /> <h4>Dog</h4>           </div>
                    <div className="item" >  <FlowerLotus size={32} color="#f06b1e" /> <h4>Lotus</h4>   </div>
                    <div className="item" >  <Planet size={32} color="#f06b1e" /> <h4>Planeta</h4>        </div>
                    <div className="item" >  <RocketLaunch size={32} color="#f06b1e" /> <h4>Foquete</h4>  </div>
                    <div className="item" >  <FlyingSaucer size={32} color="#f06b1e"/> <h4>Espaçonave</h4>   </div>
            </div>
        </div>
        </>
    )
}