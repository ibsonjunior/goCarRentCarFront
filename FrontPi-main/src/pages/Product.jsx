import "../styles/Product.css";
import { ShareNetwork, Heart } from "phosphor-react";
import HeaderProduct from "../components/HeaderProduct";
import { Context } from "../Context/Context";
import React, { useContext, useState, useEffect } from "react";
import { Link, useParams } from "react-router-dom";
import SliderMobile from "../components/SliderMoblie";
import GridProduct from "../components/GridProduct";
import Caracteristicas from '../components/Caracteristicas';
import CalendarioProduto from '../components/CalendarioProduto';
import Politicas from "../components/Politicas";

export default function Product() {

  //Informações que vem da API
  const { cars } = useContext(Context);
  // Id do Produto
  const { id } = useParams();
  //Mudança de estado de acordo com o tamanho da tela
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const media = window.matchMedia('(min-width: 820px)');
    const listener = () => setIsMobile(media.matches);
    listener();
    window.addEventListener('resize', listener);

    return () => window.removeEventListener('resize', listener);
  }, [isMobile]);

  // Filtro a partir do click
  const selectedProduct = cars?.find((product) => product.id == id);


  return (
    <>
    <section>
        <HeaderProduct products={selectedProduct} />

        <div className="icons_div">
          <ShareNetwork size={32} />
          <Heart size={32} />
        </div>

        { 
          isMobile ? 
          <GridProduct product={selectedProduct}/>
          :
          <SliderMobile product={selectedProduct} />
        }

      <Caracteristicas/>

      <CalendarioProduto />

      <Politicas  />
      
      </section>   
    </>
  );
}
