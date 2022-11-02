import { BrowserRouter, Routes, Route } from "react-router-dom";

import MainHeader from "../components/Header";
import Home from "../pages/Home";
import Login from "../pages/Login";
import Signup from "../pages/Signup";
import Footer from "../components/Footer";
import HeaderLogado from "../components/HeaderLogado";
import Product from "../pages/Product";

const RouteList = () => {

    const usuarioLogado = localStorage.getItem("nome")

return (
<>
    <BrowserRouter>
        <header>
            {usuarioLogado ? <HeaderLogado nomeUsuario={usuarioLogado} /> : <MainHeader />}
        </header>

            <Routes>
                <Route exact path="/" element={<Home />} />
                <Route path="/product" element={<Product/>} />
                <Route path="/login" element={<Login />} />
                <Route path="/signup" element={<Signup />} />

            </Routes>
            
        <footer>
            <Footer />
       </footer>
    </BrowserRouter>
</>
    );
};

export default RouteList;