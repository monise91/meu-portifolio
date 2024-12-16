import React from 'react';
import './Servicos.css';

const Servicos = () => {
    return (
        <section id="servicos" className="servicos">
            <h2 className="titulo-secao">Serviços</h2>
            <p className="descricao-secao1"> Sua presença digital com as soluções que ofereço:</p>
            <div className="servicos-lista">
                <div className="servico-card">
                    <i className="fas fa-laptop-code icon"></i>
                    <h3>Criação de Sites</h3>
                    <p>Desenvolvimento de sites personalizados para você ou seu negócio. Blogs, portfólios, páginas institucionais e outras soluções criativas.</p>
                </div>
                {/*<div className="servico-card">*/}
                {/*    <i className="fas fa-shopping-cart icon"></i>*/}
                {/*    <h3>E-commerce</h3>*/}
                {/*    <p>Montagem de lojas virtuais completas com funcionalidades de gerenciamento e integração com*/}
                {/*        pagamentos.</p>*/}
                {/*</div>*/}
                <div className="servico-card">
                    <i className="fas fa-cogs icon"></i>
                    <h3>Sistemas Personalizados</h3>
                    <p>Desenvolvimento de sistemas sob medida para aumentar a eficiência e atender às necessidades específicas do seu negócio com soluções exclusivas.</p>
                </div>
            </div>
            <p className="chamada-acao">Pronto para dar o próximo passo? Entre em contato e vamos criar juntos!</p>
            <div className="servico-cta">
                <button onClick={() => window.location.href = '#contato'}>Solicitar Orçamento</button>
            </div>
        </section>

    )
        ;
};

export default Servicos;


