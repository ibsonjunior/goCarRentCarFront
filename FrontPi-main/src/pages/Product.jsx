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
  const { carsProducts, carsImage } = useContext(Context);
  // Id do Produto/Parâmetro
  const { id } = useParams();
  //Mudança de estado de acordo com o tamanho da tela
  const [isMobile, setIsMobile] = useState(false);
  //Mudança de estado de acordo com o tamanho da tela
  useEffect(() => {
    const media = window.matchMedia('(min-width: 1025px)');
    const listener = () => setIsMobile(media.matches);
    listener();
    window.addEventListener('resize', listener);

    return () => window.removeEventListener('resize', listener);
  }, [isMobile]);

  // Filtro a partir do click
  const selectedProduct = carsProducts?.find((product) => product.id == id);


  const imagesProduct = carsImage?.filter((images) => {
    const name = selectedProduct.name.split(" ");
    return images.title.includes(name[0])
  })
  // const imagesProduct = carsImage?.find((images) => images.title == selectedProduct.name)

  console.log(imagesProduct)

  useEffect(() => {
    window.scrollTo(0,0)
  }, [])

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
          <GridProduct  product={imagesProduct}/>
          :
          <SliderMobile product={imagesProduct} />
        }

      <Caracteristicas product={selectedProduct}/>

      <CalendarioProduto />

      <Politicas  />
      
      </section>   
    </>

  );
}