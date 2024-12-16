import React from 'react';
import { FaEnvelope, FaWhatsapp, FaLinkedin, FaInstagram, FaGithub, FaFileDownload } from 'react-icons/fa';
import './Contato.css';

const Contato = () => {
    return (
        <section id="contato" className="contato">
            <h2 className="titulo-secao">Fale Comigo</h2>
            <p>Estou à disposição para discutirmos seu projeto.</p>
            <div className="contato-lista">
                <a href="mailto:sitesesistemas@hotmail.com" className="contato-item">
                    <FaEnvelope className="contato-icon" /> Email
                </a>
                <a href="https://wa.me/5514991784044" className="contato-item">
                    <FaWhatsapp className="contato-icon" /> WhatsApp
                </a>
                <a href="https://linkedin.com/in/monise-da-silva" target="_blank" rel="noopener noreferrer" className="contato-item">
                    <FaLinkedin className="contato-icon" /> LinkedIn
                </a>
                <a href="https://www.instagram.com/monisedev" target="_blank" rel="noopener noreferrer" className="contato-item">
                    <FaInstagram className="contato-icon" /> Instagram
                </a>
                <a href="https://github.com/monisedev" target="_blank" rel="noopener noreferrer" className="contato-item">
                    <FaGithub className="contato-icon" /> GitHub
                </a>
                <a href="/curriculo.pdf" className="contato-item" download>
                    <FaFileDownload className="contato-icon" /> Baixar Currículo
                </a>
            </div>
        </section>
    );
};

export default Contato;
