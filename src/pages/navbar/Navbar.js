import React, { useState } from "react";
import "./Navbar.css";

function Navbar() {
    const [menuOpen, setMenuOpen] = useState(false);

    const toggleMenu = () => {
        setMenuOpen(!menuOpen);
    };

    const closeMenu = () => {
        setMenuOpen(false);
    };

    return (
        <header className="cabecalho">
            <div className="cabecalho-logo">Sites e Sistemas</div>
            <button className="menu-toggle" onClick={toggleMenu}>
                ☰
            </button>
            <nav className={`cabecalho-menu ${menuOpen ? "open" : ""}`}>
                <ul>
                    <li><a href="#home" onClick={closeMenu}>Home</a></li>
                    <li><a href="#sobre" onClick={closeMenu}>Sobre</a></li>
                    <li><a href="#servicos" onClick={closeMenu}>Serviços</a></li>
                    <li><a href="#projetos" onClick={closeMenu}>Projetos</a></li>
                    <li><a href="#competencia" onClick={closeMenu}>Competências</a></li>
                    <li><a href="#contato" onClick={closeMenu}>Contato</a></li>
                </ul>
            </nav>
        </header>
    );
}

export default Navbar;
