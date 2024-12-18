import React, { useState } from "react";
import "./Navbar.css";

function Navbar() {
    const [menuOpen, setMenuOpen] = useState(false);

    const toggleMenu = () => {
        setMenuOpen(!menuOpen);
    };

    return (
        <header className="cabecalho">
            <div className="cabecalho-logo">Sites e Sistemas</div>
            <button className="menu-toggle" onClick={toggleMenu}>
                ☰
            </button>
            <nav className={`cabecalho-menu ${menuOpen ? "open" : ""}`}>
                <ul>
                    <li><a href="#home">Home</a></li>
                    <li><a href="#sobre">Sobre</a></li>
                    <li><a href="#servicos">Serviços</a></li>
                    <li><a href="#projetos">Projetos</a></li>
                    <li><a href="#competencia">Competências</a></li>
                    <li><a href="#contato">Contato</a></li>
                </ul>
            </nav>
        </header>
    );
}

export default Navbar;
