

function SearchBlock(){
    return(
        <div className="second_header">

                        <h2>Faça sua reserva</h2>

                        <div className="options">

                            <div className="input_flex">
                                <label htmlFor="city_name">CIDADE</label>
                                <input type="text" className="city_name" placeholder="Cidade" />
                            </div>

                            <div className="input_flex">
                                <label htmlFor="date">DATA DE INICIO</label>
                                <input type="date" className="date" placeholder="none" />
                            </div>

                            <div className="input_flex">
                                <label htmlFor="date">DATA DE DEVOLUÇÃO</label>
                                <input type="date" className="date" placeholder="none" />
                            </div>

                            <div className="input_flex">
                                <br />
                                <button className="btn_header">Buscar</button>
                            </div>
                        </div>
                    </div>
    )
}

export default SearchBlock