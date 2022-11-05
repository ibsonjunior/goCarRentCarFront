import './style.css'
import React, { useContext, useState } from "react";
import { Context } from '../../Context/Context';
function Categories() {

    const { cars } = useContext(Context);
    return (
        <div className="categories">
            <h3 className="categories_title">Categorias</h3>
            <div className="categories_cards">
                {
                cars?.map((categories) => (
                    <div key={categories.id} className="card_category">
                        <div className="category_img"> <img src={categories.image} alt="" /></div>
                        <div className="category_info"> 
                        <h2>{categories.title} </h2>
                        <p> <strong>{categories.description}</strong> Unidades</p>
                        </div>
                    </div>
                ))
                
                }   
            </div>
        </div>
    )
}

export default Categories