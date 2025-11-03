import React, { useState } from 'react'; // <-- MUDANÇA 1: Importar o useState
import { FaWhatsapp } from "react-icons/fa"
import Mask from '../../modules/phonemask';

import './Contato.css';

const Contato = () => {

    // --- MUDANÇA 2: Adicionar 'State' ---
    // Guarda os dados de todos os campos do formulário
    const [formData, setFormData] = useState({
        nome: '',
        email: '',
        telefone: '',
        assunto: '',
        mensagem: ''
    });
    // Guarda o estado de "enviando"
    const [isSubmitting, setIsSubmitting] = useState(false);
    // ------------------------------------

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

    // --- MUDANÇA 3: Adicionar 'handleChange' ---
    // Esta função atualiza o 'state' toda vez que você digita
    const handleChange = (e) => {
        setFormData({
            ...formData,
            [e.target.name]: e.target.value
        });
    };
    // -----------------------------------------

    // --- MUDANÇA 4: Atualizar 'handleSubmit' ---
    // Removemos a manipulação manual do botão e usamos o 'state'
    async function handleSubmit(event) {
        event.preventDefault(); 

        const form = event.target;
        const data = new FormData(form); // O Formspree ainda lê os dados do 'form'
		const submitButton = document.getElementById("send");
        const successMsg = document.getElementById("msg-sended");
        const errorMsg = document.getElementById("msg-error");

        successMsg.style.display = 'none';
        errorMsg.style.display = 'none';
        setIsSubmitting(true); // <-- Usa o state para desabilitar o botão

		submitButton.classList.add("submitting");

        try {
            const response = await fetch("https://formspree.io/f/mblpvaog", {
                method: 'POST',
                body: data,
                headers: { 'Accept': 'application/json' }
            });

            if (response.ok) {
                successMsg.style.display = 'block';
                form.reset(); // Reseta o formulário HTML
                // Reseta também o nosso 'state'
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
            setIsSubmitting(false); // <-- Re-abilita o botão
			submitButton.classList.remove("submitting");
        }
    }

    // --- MUDANÇA 5: Lógica para o botão ---
    // Verifica se os campos obrigatórios estão vazios
    const isFormInvalid = !formData.nome || !formData.email || !formData.assunto || !formData.mensagem;
    // -------------------------------------

    return (
        <section className="contato">
            <div className="container">
                <h1>Contato</h1>
                <div className="flexbox box-contato">
                    <div className="contato-left">
                        {/* ... (SEU CÓDIGO DO LADO ESQUERDO FICA IGUAL) ... */}
                        <div className="dados-contato">
                            <h2>
                                Telefone / Whatsapp:<br />
                                <a
                                href="https://wa.me/5584988261791"
                                target="_blank"
                                rel="noopener noreferrer"
                                className="whatsapp-link"
                                >
                                <FaWhatsapp className="whatsapp-icon" />
                                (84) 98826-1791
                                </a>
                            </h2>
                            <h2>Endereço:</h2>
                            <p>
                                Av. Maranhão, 555. Bairro dos Estados. CEP 58.030-260. João Pessoa/PB<br />
                                <a
                                    href="https://www.google.com/maps/dir/?api=1&destination=Av.+Maranhão,+555,+Bairro+dos+Estados,+João+Pessoa,+PB"
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="maps-link"
                                >
                                    ➜ Ver rota no Google Maps
                                </a>
                            </p>
                        </div>
                        <div className="mapa"></div>
                    </div>
                    
                    {/* --- MUDANÇA 6: Conectar os inputs ao 'state' --- */}
                    <div className="contato-right">
                        <h2>Enviar uma mensagem</h2> 
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
                            
                            {/* --- MUDANÇA 7: Lógica final do botão --- */}
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
            <div id="anchor-Duvidas"></div>
        </section>
    );
}

export default Contato;