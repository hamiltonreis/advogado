import React from 'react';
// Importa os ícones que vamos usar
import { FaWhatsapp, FaInstagram } from 'react-icons/fa';

import './Footer.css';

const Footer = () => {
    // Pega o ano atual automaticamente para o copyright
    const currentYear = new Date().getFullYear();

    return (
        // Tag <footer> é semanticamente melhor que <section>
        <footer className="footer">
            <div className="container">
                <div className="box-footer">
                    
                    {/* COLUNA 1: CONTATO */}
                    <div className="box-footer-single bfs1">
                        <h2>Contato Imediato</h2>
                        {/* Link clicável do WhatsApp (igual ao da seção Contato) */}
                        <a
                            href="https://wa.me/5584988261791"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="whatsapp-link"
                        >
                            <FaWhatsapp className="whatsapp-icon" />
                            (84) 98826-1791
                        </a>
                    </div>

                    {/* COLUNA 2: REDES SOCIAIS */}
                    <div className="box-footer-single bfs2">
                        <h2>Redes sociais</h2>
                        <div className="sm-icons-footer">
                            {/* Ícone do Instagram com react-icons */}
                            <a target="_blank" title="Perfil no Instagram" href="https://instagram.com/hamiltonreis.adv" rel="noreferrer">
                                <FaInstagram />
                            </a>
                            {/* Link quebrado do Facebook removido */}
                        </div>
                    </div>

                    {/* COLUNA 3: LINKS ÚTEIS (Estrutura mantida) */}
                    <div className="box-footer-single bfs3">
                        <h2>Links úteis:</h2>
                        <ul>
                            <li>
                                <a target="_blank" href="https://www.oabpb.org.br" rel="noreferrer">OAB Paraíba</a>
                            </li>
                            <li>
                                <a target="_blank" href="https://www.mp.pb.gov.br/" rel="noreferrer">Ministério Público da Paraíba</a>
                            </li>
                            <li>
                                <a target="_blank" href="https://www.tjpb.jus.br/" rel="noreferrer">Tribunal de Justiça da Paraíba</a>
                            </li>
                            {/* Link quebrado 'juizdefora' removido. Se precisar, pode adicionar outro. */}
                        </ul>
                    </div>
                </div>

                {/* COPYRIGHT ATUALIZADO */}
                <div className="copyright">
                    <small>Hamilton Reis Advocacia Criminal &copy; {currentYear}. Todos os direitos reservados.</small>
                    <small>Desenvolvido por Proletec Soluções em TI.</small>
                </div>
            </div>
        </footer>
    );
}

export default Footer;