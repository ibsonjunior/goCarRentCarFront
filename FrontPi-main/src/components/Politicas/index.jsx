import './style.css'

export default function Politica(){
    return(
        <>
        <div className='regras'>
            <h1>Políticas de locação</h1>
            <hr className='solid'></hr>
            <div className='politicas' >
                
                    <div className="regra">  
                    <h4>Idade Miníma</h4>

                    <div className='description_police'>
                        <p>O locatário/condutor deverá possuir idade mínima de 21 anos.</p>   
                    </div>
                  
                    </div>

                    <div className="regra" >   
                    <h4>Carteira de Habilitação Nacional (CNH)</h4>
                    <div className='description_police'>
                    <p>O locatário deverá apresentar seu documento de habilitação original, emitido há mais de 2 anos (CNH Definitiva), válido e dentro do prazo de vencimento.</p> 
                    </div>  
                    
                    </div>

                    <div className="regra">  
                    <h4>Seguro / Caução</h4>
                    <div className='description_police'>
                        <p>O locatário/condutor deverá pagar um taxa de seguro, no qual será entregue se não houver nenhum acidente. </p>
                    </div>  
                    
                    </div>

                    <div className="regra" >   
                    <h4 >Desistência</h4> 
                    <div className='description_police'>
                     <p>Dois dias antes da data de entrega do carro, será hratuito o cancelamento, menos que isso será cobrada um taxa de cancelamento de 5% do valor.</p> 
                    </div>  

                   
                    </div>
                
            </div>
        </div>
        </>
    )
}