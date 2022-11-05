import CardHome from "../components/CardHome/index"
import Categories from "../components/Categories"
import SearchBlock from "../components/SearchBlock"

import '../styles/Home.css'

function Home() {

return (
<>
    <main>
        <div className="body">
               
            <SearchBlock />

            <section >
                <Categories/>                        
            </section>

            <section className="recomendacoes">
                <h2 className="recomendations_title">Recomendações</h2>
                <div className="recomendations">
                <CardHome />
                </div>
            </section>

        </div>
    </main>            
</>
)

}

export default Home;