import './style.css'

function Categories({ categorias, index}) {
    return (
        <div className="categories">
            <h3 className="categories_title">Categorias</h3>
            <div className="categories_cards">
                {
                categorias.map((categoria) => (
                    <div key={index} className="card_category">
                        <div className="category_img"> <img src={categoria.img} alt="" /></div>
                        <div className="category_info"> 
                        <h2>{categoria.title} </h2>
                        <p> <strong>{categoria.quantity}</strong> Unidades</p>
                        </div>
                    </div>
                ))
                
                }   
            </div>
        </div>
    )
}

export default Categories