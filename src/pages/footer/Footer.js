import React from 'react';
import './Footer.css'; // Certifique-se de que o caminho para o arquivo CSS está correto
import { Link } from 'react-router-dom';
function Footer() {
    return (
        <footer className="footer">
            <p>© 2024 Site Sistema. Todos os direitos reservados.</p>
            <div className="footer-links">
                <ul>
                    <li><a href="#home">Home</a></li>
                    <li><a href="#sobre">Sobre</a></li>
                    <li><a href="#servicos">Serviços</a></li>
                    <li><a href="#projetos">Projetos</a></li>
                    <li><a href="#competencia">Competências</a></li>
                    <li><a href="#contato">Contato</a></li>
                </ul>
            </div>
        </footer>
    );
}

export default Footer;
