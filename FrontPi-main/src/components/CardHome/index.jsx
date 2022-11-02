import './style.css'
import { Link} from "react-router-dom";

function CardHome({ carro, index }) {
    return (
        <>
            <div className="galeria_carro">  {

                carro.map((carro) => (
                    <div key={index} className="card_main">
                        <div key={index} className="card_image"> <img src={carro.img} alt="" /> </div>
                        <div className="card_description">

                            
                            <div key={index} className="card_title"> <h3>{carro.title}</h3> </div>
                            <div key={index} className="car_description"> 
                            
                            <h6>{carro.category}</h6>
                            <p>{carro.description}</p> 
                            
                            </div>
                            {/* <Link to={'/product/' +carro.id}> */}
                            <Link to='/product'>
                            <button className="about">ver mais</button>
                            </Link >
                        </div>
                    </div>
                ))

            }
            </div>



        </>
    )
}

export default CardHome