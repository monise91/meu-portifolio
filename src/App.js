import React from "react";
import Navbar from "./pages/navbar/Navbar";
import Home from "./componentes/Home/Home";
import Sobre from "./componentes/Sobre/Sobre";
import Servicos from "./componentes/Servicos/Servicos";
import Projetos from "./componentes/Projetos/Projetos";
import Competencia from "./componentes/Competencia/Competencia";
import Contato from "./componentes/Contato/Contato";
import Footer from "./pages/footer/Footer";

function App() {
    return (
        <>
            <Navbar />
            <main>
                <Home />
                <Sobre />
                <Servicos />
                <Projetos />
                <Competencia />
                <Contato />
            </main>
            <Footer />
        </>
    );
}

export default App;
