
import { Modal, Button } from "react-bootstrap";
import React, { useContext, useState } from "react";
import "../ModalProduct/style.css"
import ImageGallery from 'react-image-gallery';
import "react-image-gallery/styles/css/image-gallery.css";

export default function ModalProduct(props){

    return(
        <>
      <Modal
        {...props}
        size="lg"
        aria-labelledby="contained-modal-title-vcenter"
        centered
        className="bg-dark-transparent"
        data-focus="true"
      >

        <Modal.Body className="boxModal bg-dark bg-gradient-dark text-light">   
           <ImageGallery autoPlay="true" items={props.products.images} />

        </Modal.Body>

        <Modal.Footer className="boxModal bg-dark">
          <Button onClick={props.onHide}>Close</Button>
        </Modal.Footer>

      </Modal>
        
        </>
    )
}