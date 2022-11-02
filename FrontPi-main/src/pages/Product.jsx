import '../styles/Product.css'
import { CaretLeft, MapPin } from "phosphor-react";
import HeaderProduct from '../components/HeaderProduct';
import a3 from './a3.jpeg'


export default function Product() {

    return(
   <>

    <HeaderProduct/>
   

    <div className="images">
        <div className='grid_images'>
                    <img className="img1" src={a3} alt=""/>
                    <img className="img2" src={a3} alt=""/>
                    <img className="img3" src={a3} alt=""/>
                    <img className="img4" src={a3} alt=""/>
                    <img className="img5" src={a3} alt=""/>
        </div>
        <div>
            <button className="btn_modal">Ver mais</button> 
        </div>
       
    </div>
   

   </>

    )
}