import { ArrowRight } from "phosphor-react";
import React, { useContext, useState } from "react";
// import { Link, useParams } from "react-router-dom";
import ModalProduct from "../ModalProduct";
import "../GridProduct/style.css"

export default function GridProduct({product}){

    const [modalShow, setModalShow] = useState(false);
    // console.log(product)
    return(
        
        <>

        
        <div className="images">
        <div className="grid_images">
          {
            
            product.slice(0,5).map((images, id) => (
              
              <img className={`img${id}`} src={images.urlImage} alt="" />
              
              )
            )
          }
              
        </div>
        <div className="div_btn">
          <button
            className="btn_modal"
            onClick={() => {
              setModalShow(true);
            }}
          >
            Ver mais
            
          </button>
          <ArrowRight className="btn_arrow" size={25} />
        </div>
      </div>
        
      <ModalProduct products={product} show={modalShow} onHide={() => setModalShow(false)} />
      
        </>

    )
}