import CardHome from "../components/CardHome/index"
import Categories from "../components/Categories"
import SearchBlock from "../components/SearchBlock"

import '../styles/Home.css'

function Home() {

   const listaCarros = [
    {
        img: "https://blogger.googleusercontent.com/img/b/R29vZ2xl/AVvXsEi3O0cadRmXuJtPJ-xrq9kGHcTNaVXreJl60YOd2VTaC0w2o4X8mLJZtA0WEHV9IYv0DwExWlS-KfuJhDbO1QHfGhdCE4W-9VJQLk8B0DHCXF7SJEf8r31sZyR1NKi4KDr2lDEhTBjv-Ej4a11UU_5di5dinYeFzr50jbdIe7v8SrmhTHvgF8u1CwW6eA/s2560/rolls-royce_phantom_1.png.jpg",
        category: "Luxo",
        title: "Rolls Royce Phantom",
        location: "São Paulo", 
        description: "O Phantom é o sedan de grande porte da marca Rolls-Royce. O modelo é equipado com motor V12..."
    },
    {
        img: "https://s2.glbimg.com/5Bs7t4bUJudtPuPuHJ6zBueWs5g=/0x0:620x413/984x0/smart/filters:strip_icc()/i.s3.glbimg.com/v1/AUTH_cf9d035bf26b4646b105bd958f32089d/internal_photos/bs/2020/r/k/muxO0lTfG83jjoysP1Kw/2019-08-22-range-rover-evoque-1.jpg",
        category: "Luxo",
        title: "Range Rover Evoque",
        location: "São Paulo", 
        description: "Range Rover Evoque é um esportivo compacto da marca Land Rover. Seu design e potência são os..."
    },
    {
        img: "https://s2.glbimg.com/sJ4jOH48z4g-vYd9rpW_gcQIgc0=/0x0:1914x1261/924x0/smart/filters:strip_icc()/i.s3.glbimg.com/v1/AUTH_cf9d035bf26b4646b105bd958f32089d/internal_photos/bs/2022/D/s/8D8AVITVibR7BiPOiXeQ/new-carrera.jpg",
        category: "Esportivos",
        title: "Porsche 911 Carreira",
        location: "Sorocaba", 
        description: "A silhueta do 911 Carrera é inconfundível, tem o DNA da marca Porsche desde 1963 tanto no design..."
    },
    {
        img: "https://s2.glbimg.com/NSpNy1wqX4odlioK28hLDuCRoFw=/1200x/smart/filters:cover():strip_icc()/i.s3.glbimg.com/v1/AUTH_cf9d035bf26b4646b105bd958f32089d/internal_photos/bs/2021/F/Q/N7RznyQUyTVxwtqLxQCw/jeep-compass-2022-dianteira-movimento.jpeg",
        category: "SUV",
        title: "Jeep Compass",
        location: "Sorocaba", 
        description: "Jeep Compass é um grande colecionador de prêmios, eleito “Melhor Compra do Ano” na categoria SUV Premium..."
    },
    {
        img: "https://quatrorodas.abril.com.br/wp-content/uploads/2020/09/Peugeot-208-Griffe-2021-2.jpg?quality=70&strip=info",
        category: "Elétricos",
        title: "Peugeot 208 e-GT",
        location: "Sorocaba", 
        description: "Experimente um novo nível de mobilidade com o Peugeot 208-e, número #1 na categoria de compactos elétricos"
    },
    {
        img: "https://quatrorodas.abril.com.br/wp-content/uploads/2022/03/DSCF2608-e1646351549605.jpg?quality=70&strip=info",
        category: "Luxo",
        title: "Mercedes-Benz C300",
        location: "São Paulo", 
        description: "Design único, tecnologia, conforto e potência definem a essência do Mercedes-Benz C300"
    },
    {
        img: "https://quatrorodas.abril.com.br/wp-content/uploads/2020/11/2020-bmw-m2-cs-limited-edition-13.jpg?quality=70&strip=info&w=1024&resize=1200,800",
        category: "Esportivos",
        title: "BMW M2 Competition",
        location: "São Paulo", 
        description: "Fabricado em Leipzig, na Alemanha, o BMW M2 é importado ao Brasil em versão única Competition..."
    },
    {
        img: "https://www.autoo.com.br/fotos/2021/12/1280_960/Audi4_14122021_70084_1280_960.jpg",
        category: "SUV",
        title: "Audi Q3 E-tron",
        location: "Copa pistão ", 
        description: "Um SUV para toda a família, o Audi Q3 possui uma presença imponente, com bastante espaço interno..."
    }
   ] 

   const categories = [
    {
        title: "Luxo",
        quantity: "130",
        img: "https://hips.hearstapps.com/hmg-prod.s3.amazonaws.com/images/2018-rolls-royce-phantom-1536152159.png"
    },
    {
        title: "Elétricos",
        quantity: "60", 
        img: "https://andreveiculos.com.br/blog/wp-content/uploads/2020/02/porsche-taycan.jpg"
    },
    {
        title: "SUV",
        quantity: "140",
        img: "https://i0.wp.com/replicario.com.br/wp-content/uploads/2020/10/cadillac_2021_escalade_0397.jpg?fit=1200%2C628&ssl=1"
    },
    {
        title: "Esportivos",
        quantity: "12",
        img: "https://s2.glbimg.com/k48rKSt1_iM35y4_UUWk8tp3AAA=/1200x/smart/filters:cover():strip_icc()/i.s3.glbimg.com/v1/AUTH_59edd422c0c84a879bd37670ae4f538a/internal_photos/bs/2018/B/5/PTZY4TStiTFosuj11llg/mercedes-amg-gt-4-02ca02280c1f083b.jpg"
    }
   ]
   
return (
<>
    <main>
        <div className="body">
               
            <SearchBlock />

            <section >
                <Categories categorias={categories}/>                        
            </section>

            <section className="recomendacoes">
                <h2 className="recomendations_title">Recomendações</h2>
                <div className="recomendations">
                <CardHome carro={listaCarros}/>
                </div>
            </section>

        </div>
    </main>            
</>
)

}

export default Home;