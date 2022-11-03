
import { Modal, Button } from "react-bootstrap";
import React, { useContext, useState } from "react";
import Slider from "react-slick";
import a3 from "../../assets/a3.jpeg"
// import { baseUrl } from "./config";
import a2 from "../../assets/a2.jpeg"
import a1 from "../../assets/a4.jpeg"
import "../ModalProduct/style.css"

export default function ModalProduct(props){

    const settings = {
        customPaging: function(i) {
          return (
            <a>
              <img src={`a${i + 1}`} />
            </a>
          );
        },
        dots: true,
        dotsClass: "slick-dots slick-thumb",
        infinite: true,
        speed: 500,
        slidesToShow: 1,
        slidesToScroll: 1
      };

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
        <div>
        <h2>Custom Paging</h2>
        <Slider {...settings}>
          <div className="slider_imgs" >
           <img className="img1" src={a1} alt=""/>
          </div>
          <div className="slider_imgs">
          <img className="img1" src={a2} alt=""/>
          </div >
          <div className="slider_imgs">
          <img className="img1" src={a3} alt=""/>
          </div>
         
        </Slider>
      </div>
        
        </Modal.Body>
        <Modal.Footer className="boxModal bg-dark">
          <Button onClick={props.onHide}>Close</Button>
        </Modal.Footer>
      </Modal>
        
        </>
    )
}