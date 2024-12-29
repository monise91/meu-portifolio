import React from 'react';
import './Competencia.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faNode, faJava, faReact, faGithub, faHtml5, faCss3, faJs } from '@fortawesome/free-brands-svg-icons';

const Competencia = () => {
    return (
        <section id="competencia" className="competencia">
            <h2 className="titulo-secao">Minhas Habilidades</h2>
            <ul className="competencia-lista">
                <li><FontAwesomeIcon icon={faNode} /> Node.js</li>
                <li><FontAwesomeIcon icon={faJava} /> Java</li>
                <li><FontAwesomeIcon icon={faJs} /> API Rest</li>
                <li><FontAwesomeIcon icon={faReact} /> React</li>
                <li><FontAwesomeIcon icon={faGithub} /> GitHub</li>
                <li><FontAwesomeIcon icon={faHtml5} /> HTML</li>
                <li><FontAwesomeIcon icon={faCss3} /> CSS</li>
                <li><FontAwesomeIcon icon={faJs} /> MongoDB</li>
            </ul>
        </section>
    );
};

export default Competencia;
