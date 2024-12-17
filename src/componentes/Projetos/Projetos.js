import React, { useState } from 'react';
import './Projetos.css';
import modalidade from "../../assets/modalidade.jpg";
import cadastroAluno from "../../assets/cadastroAluno.jpg";
import pagamento from "../../assets/pagamento.jpg";
import agendar from "../../assets/agendar.jpg";
import agendamento from "../../assets/agendamento.jpg";
import login from "../../assets/login.jpg";

const Projetos = () => {
    const [modalOpen, setModalOpen] = useState(false);
    const [selectedProject, setSelectedProject] = useState(null);
    const [currentImageIndex, setCurrentImageIndex] = useState(0);

    const projetos = [
        {
            titulo: "Sistema de Gestão para Academias",
            descricao: "Sistema completo com cadastro de alunos, controle de pagamentos, agendamento de aulas, " +
                "envio de notificações e geração de relatórios para otimizar a gestão da sua empresa.",
            imagens: [
                { src: cadastroAluno, alt: "Tela de cadastro de alunos" },
                { src: modalidade, alt: "Tela de modalidades da academia" },
                { src: pagamento, alt: "Tela de controle de pagamentos" },
            ]
        },
        {
            titulo: "Aplicativo de Gestão e Agendamento",
            descricao: "Aplicativo exclusivo com funcionalidades como cadastro de clientes, agendamento via WhatsApp, " +
                "notificações automáticas de atendimentos, e relatórios detalhados.",
            imagens: [
                { src: login, alt: "Tela de login" },
                { src: agendar, alt: "Tela de agendar cliente" },
                { src: agendamento, alt: "Tela de controle de agendamentos" },
            ]
        }
    ];

    const openModal = (projeto) => {
        setSelectedProject(projeto);
        setModalOpen(true);
        setCurrentImageIndex(0);
    };

    const closeModal = () => {
        setModalOpen(false);
        setSelectedProject(null);
        setCurrentImageIndex(0);
    };

    const nextImage = () => {
        if (selectedProject && currentImageIndex < selectedProject.imagens.length - 1) {
            setCurrentImageIndex(currentImageIndex + 1);
        }
    };

    const prevImage = () => {
        if (selectedProject && currentImageIndex > 0) {
            setCurrentImageIndex(currentImageIndex - 1);
        }
    };

    return (
        <section id="projetos" className="projetos">
            <h2 className="titulo-secao">Projetos Desenvolvidos</h2>
            <p className="descricao-secao">Confira alguns dos projetos que desenvolvi:</p>
            <div className="projetos-lista">
                {projetos.map((projeto, index) => (
                    <div key={index} className="projeto-card">
                        <h3 className="projeto-titulo">{projeto.titulo}</h3>
                        <p className="projeto-descricao">{projeto.descricao}</p>
                        <button
                            className="projeto-botao"
                            onClick={() => openModal(projeto)}
                        >
                            Ver Mais
                        </button>
                    </div>
                ))}
            </div>

            {modalOpen && selectedProject && (
                <div className="modal">
                    <div className="modal-content">
                        <span className="close-button" onClick={closeModal}>
                            &times;
                        </span>
                        <h3>{selectedProject.titulo}</h3>
                        {/*<p>{selectedProject.descricao}</p>*/}
                        <div className="modal-image-container">
                            <button className="arrow left-arrow" onClick={prevImage}>
                                &#8249;
                            </button>
                            <img
                                src={selectedProject.imagens[currentImageIndex].src}
                                alt={selectedProject.imagens[currentImageIndex].alt}
                                className="modal-image"
                            />
                            <button className="arrow right-arrow" onClick={nextImage}>
                                &#8250;
                            </button>
                        </div>
                    </div>
                </div>
            )}
        </section>
    );
};

export default Projetos;


