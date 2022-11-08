
import React, { useContext, useState } from "react";
// import { Link, useParams } from "react-router-dom";
import ModalProduct from "../ModalProduct";

export default function GridProduct({product}){

    const [modalShow, setModalShow] = useState(false);

    return(
        
        <>
        
        <div className="images">
        <div className="grid_images">
          <img className="img1" src={product.image} alt="" />
          <img className="img2" src={product.images[0].original} alt="" />
          <img className="img3" src={product.images[1].original} alt="" />
          <img className="img4" src={product.images[2].original} alt="" />
          <img className="img5" src={product.images[3].original} alt="" />
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
        </div>
      </div>
        
      <ModalProduct products={product} show={modalShow} onHide={() => setModalShow(false)} />
      
        </>

    )
}