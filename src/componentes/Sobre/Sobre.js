import React from 'react';
import './Sobre.css';
import MonisePC from "../../assets/MonisePC.jpg";

const Sobre = () => {
    return (
        <section id="sobre" className="sobreEmpresa">
            <div className="sobreEmpresa-content">
                <div className="textoContainerEmpresa">
                    <h2 className="titulo-secao">Sobre</h2>
                    <p className="fade-in delay-1">
                        A Sites e Sistemas é uma empresa criada para transformar ideias em soluções digitais, oferecendo sites
                        modernos e sistemas personalizados que atendem às necessidades de cada cliente. Nosso foco é proporcionar
                        inovação e impacto real para negócios, sempre utilizando tecnologia avançada e práticas de desenvolvimento
                        alinhadas ao mercado.
                    </p><br/>
                    <p className="fade-in delay-2">
                        Sou Monise Da Silva, desenvolvedora de software especializada em criar soluções sob medida. Formada em
                        Tecnologia da Informação pela Univesp, possuo experiência com Node.js, React, Java, HTML e CSS, além de
                        cursos complementares pela Alura. Minha paixão pela tecnologia me leva a entregar projetos que unem
                        funcionalidade, modernidade e eficiência.
                        <br/><br/>
                        Seja para impulsionar sua empresa ou trazer sua ideia para o mundo digital, estou pronta para ajudar.
                        Vamos construir algo extraordinário juntos!
                    </p>
                </div>
                <div className="imageContainer">
                    <img src={MonisePC} alt="Monise trabalhando no computador" className="MonisePC"/>
                </div>
            </div>
        </section>
    );
};

export default Sobre;
