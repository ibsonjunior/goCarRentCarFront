import "../styles/Product.css";
import { ShareNetwork, Heart } from "phosphor-react";
import HeaderProduct from "../components/HeaderProduct";
import { Context } from "../Context/Context";
import React, { useContext, useState } from "react";
import { Link, useParams } from "react-router-dom";
import SliderMobile from "../components/SliderMoblie";
import GridProduct from "../components/GridProduct";




export default function Product() {

  //Informações que vem da API
  const { cars } = useContext(Context);
  // Id do Produto
  const { id } = useParams();
  //Mudança de estado de acordo com o tamanho da tela
  const [isMobile, setIsMobile] = useState(false)
  // Filtro a partir do click
  const selectedProduct = cars?.find((product) => product.id == id);


  return (
    <>
      <HeaderProduct products={selectedProduct} />

      <div className="icons_div">
        <ShareNetwork size={32} />
        <Heart size={32} />
      </div>

      { isMobile ==  window.innerWidth >= 768 ? 
        <SliderMobile  product={selectedProduct} />
        :
        <GridProduct product={selectedProduct}/>
      }
      
    </>
  );
}
