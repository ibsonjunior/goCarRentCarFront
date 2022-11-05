import "../styles/Product.css";
import { ShareNetwork, Heart } from "phosphor-react";
import HeaderProduct from "../components/HeaderProduct";
import a3 from "../assets/a3.jpeg";
import ModalProduct from "../components/ModalProduct";
import { Context } from "../Context/Context";
import React, { useContext, useState } from "react";
import { Link, useParams } from "react-router-dom";

export default function Product() {
  const [modalShow, setModalShow] = useState(false);
  const { cars } = useContext(Context);
  const { id } = useParams();

  const selectedProduct = cars?.find((product) => product.id == id);

  return (
    <>
      <HeaderProduct products={selectedProduct} />

      <div className="icons_div">
        <ShareNetwork size={32} />
        <Heart size={32} />
      </div>

      <div className="images">
        <div className="grid_images">
          <img className="img1" src={selectedProduct.image} alt="" />
          <img className="img2" src={a3} alt="" />
          <img className="img3" src={a3} alt="" />
          <img className="img4" src={a3} alt="" />
          <img className="img5" src={a3} alt="" />
        </div>
        <div>
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

      <ModalProduct show={modalShow} onHide={() => setModalShow(false)} />
    </>
  );
}
