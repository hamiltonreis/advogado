// Importações atualizadas
import React, { useState } from 'react';
import { FaWhatsapp, FaHeadset, FaMapMarkerAlt, FaGlobe } from "react-icons/fa";
import Mask from '../../modules/phonemask';

import './Contato.css';

const Contato = () => {

    // --- TODA A SUA LÓGICA DE STATE E FUNÇÕES (INTACTA) ---
    const [formData, setFormData] = useState({
        nome: '', email: '', telefone: '',
        assunto: '', mensagem: ''
    });
    const [isSubmitting, setIsSubmitting] = useState(false);

    const loadMask = (input) => {
        const phoneMask = new Mask(input);
        phoneMask.mask();
    }

    const handleFocus = (event) => {
        const inputPhone = event.target;
        loadMask(inputPhone);
        inputPhone.placeholder = '(__)____-____';
        inputPhone.addEventListener('focusout', e => inputPhone.placeholder = 'Telefone p/ contato...');
        inputPhone.addEventListener('paste', e => e.preventDefault());
    }

    const handleChange = (e) => {
        setFormData({
            ...formData,
            [e.target.name]: e.target.value
        });
    };

    async function handleSubmit(event) {
        event.preventDefault(); 
        const form = event.target;
        const data = new FormData(form);
        const submitButton = document.getElementById("send");
        const successMsg = document.getElementById("msg-sended");
        const errorMsg = document.getElementById("msg-error");

        successMsg.style.display = 'none';
        errorMsg.style.display = 'none';
        setIsSubmitting(true);
        submitButton.classList.add("submitting");

        try {
            const response = await fetch("https://formspree.io/f/mblpvaog", {
                method: 'POST',
                body: data,
                headers: { 'Accept': 'application/json' }
            });

            if (response.ok) {
                successMsg.style.display = 'block';
                form.reset();
                setFormData({
                    nome: '', email: '', telefone: '',
                    assunto: '', mensagem: ''
                });
            } else {
                errorMsg.style.display = 'block';
            }
        } catch (error) {
            errorMsg.style.display = 'block';
        } finally {
            setIsSubmitting(false);
            submitButton.classList.remove("submitting");
        }
    }

    const isFormInvalid = !formData.nome || !formData.email || !formData.assunto || !formData.mensagem;
    // --- FIM DA LÓGICA ---


    // --- INÍCIO DO JSX ---
    return (
        <section className="contato" id="anchor-contato">
            <div className="container">
                <h1>Contato</h1>
                <div className="flexbox box-contato">
                    
                    {/* --- LADO ESQUERDO (DADOS) --- */}
                    <div className="contato-left">
                        <div className="dados-contato">
                            
                            {/* Bloco de Atendimento Imediato */}
                            <h2>Atendimento Imediato</h2>
                            
                            {/* Caixa de Destaque "Plantão 24h" */}
                            <div className="plantao-box">
                                <FaHeadset className="plantao-icon" />
                                <span>Plantão 24h</span>
                            </div>
                            
                            {/* Link do WhatsApp */}
                            <a
                                href="https://wa.me/5584988261791"
                                target="_blank"
                                rel="noopener noreferrer"
                                className="whatsapp-link"
                            >
                                <FaWhatsapp className="whatsapp-icon" />
                                (84) 98826-1791
                            </a>
                            
                            {/* Bloco de Área de Atuação */}
                            <h2 className="titulo-endereco">Área de Atuação</h2>
                            
                            {/* Bloco 1: Atendimento Local */}
                            <div className="endereco-box">
                                <FaMapMarkerAlt className="map-icon" />
                                <p>
                                    <strong>Atendimento Presencial</strong><br/>
                                    Em toda João Pessoa - PB e região metropolitana.
                                </p>
                            </div>

                            {/* Bloco 2: Atendimento Nacional */}
                            <div className="endereco-box">
                                <FaGlobe className="map-icon" />
                                <p>
                                    <strong>Atendimento Nacional</strong><br/>
                                    Atuação remota e presencial em todo o Brasil.
                                </p>
                            </div>
                        </div> {/* Fim de .dados-contato */}
                        
                        <div className="mapa"></div>
                    
                    </div> {/* <-- ESTA É A DIV QUE FALTAVA (FECHAMENTO DO .contato-left) */}
                    
                    {/* --- LADO DIREITO (FORMULÁRIO) --- */}
                    <div className="contato-right">
                        <h2>Fale Conosco</h2>
                        <p className="form-intro">
                            Seu contato é o primeiro passo para sua defesa. Preencha o formulário e aguarde o retorno.
                        </p>
                        
                        {/* SEU FORMULÁRIO (LÓGICA INTACTA) */}
                        <form id="form" onSubmit={handleSubmit}>
                            <input className="form nome" type="text" name="nome" placeholder="Seu nome..." required 
                                value={formData.nome} onChange={handleChange} />
                                
                            <input className="form email" type="email" name="email" placeholder="Seu e-mail..." required 
                                value={formData.email} onChange={handleChange} />
                                
                            <input className="form tel" id="fone" type="tel" maxLength="14" minLength="13" name="telefone" placeholder="Telefone p/ contato..." onFocus={handleFocus} 
                                value={formData.telefone} onChange={handleChange} />
                                
                            <input className="form assu" type="text" name="assunto" placeholder="Assunto..." required 
                                value={formData.assunto} onChange={handleChange} />
                                
                            <textarea className="form msg" name="mensagem" placeholder="Sua mensagem..." required 
                                value={formData.mensagem} onChange={handleChange} ></textarea>
                            
                            <input type="submit" value="Enviar" id="send" 
                                disabled={isFormInvalid || isSubmitting} />
                            
                            <div className="alert-submit">
                                <p id="msg-sended">Mensagem enviada com sucesso! Responderemos em breve.</p>
                                <p id="msg-error">Erro: mensagem NÃO enviada. Favor conferir os dados informados ou tente novamente mais tarde.</p>
                            </div>
                        </form>
                    </div>
                </div>
            </div>
        </section>
    );
}

export default Contato;