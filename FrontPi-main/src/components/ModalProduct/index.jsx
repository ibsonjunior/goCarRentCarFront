
import { Modal, Button } from "react-bootstrap";
import React, { useContext, useState } from "react";
import "../ModalProduct/style.css"
import ImageGallery from 'react-image-gallery';
import "react-image-gallery/styles/css/image-gallery.css";

export default function ModalProduct(props){
//   const newCars = props.products.map(car => {
//       return {
//         original: car.urlImage,
//         thumbnail: car.urlImage
//       }
//     }) 

  console.log("contextReturn", props);

  const productImages = props.products.map(prodImages => {return prodImages.urlImage}
  );

  const urlImages = productImages.map(imagesLib => {
    return {
      original: imagesLib,
      thumbnail: imagesLib
    }
  })

  console.log("carImages", urlImages);

    return(
        <>
      <Modal
        {...props}
        size="lg"
        aria-labelledby="contained-modal-title-vcenter"
        centered
        className="bg-white-transparent"
        data-focus="true"
      >

        <Modal.Header
          id="harmonyModal-header"
          closeButton
          className="boxModal bg-white "

        >
          <Modal.Title id="contained-modal-title-vcenter " className=" text-dark">
          Audi

          </Modal.Title>
         
        </Modal.Header>


        <Modal.Body className="boxModal bg-white bg-gradient-white text-light">  
        
           <ImageGallery autoPlay="true" items={urlImages} />
           
           {/* {return(productsImage?.urlImage)}  */}

        </Modal.Body>

      

      </Modal>
        
        </>
    )
}