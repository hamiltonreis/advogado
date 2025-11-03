import React from 'react';

import './Footer.css';

const Footer = () => {
	return (
		<section className="footer">
			<div className="container">
				<div className="box-footer">
					<div className="box-footer-single bfs1">
						<h2>Telefone / Whatsapp:<br />
							(84) 98826-1791</h2>
					</div>
					<div className="box-footer-single bfs2">
						<h2>Redes sociais:</h2>
						<span className="sm-icons-footer">
							<a target="_blank" title="Nossa página no Facebook" href="https://facebook.com" rel="noreferrer">
								<i className="fa fa-facebook" aria-hidden="true"></i>
							</a>
							<a target="_blank" title="Nosso perfil no Instagram" href="https://instagram.com/hamiltonreis.adv" rel="noreferrer">
								<i className="fa fa-instagram" aria-hidden="true"></i>
							</a>
						</span>
					</div>
					<div className="box-footer-single bfs3">
						<h2>Links úteis:</h2>
						<ul>
							<li>
								<a target="_blank" href="https://www.oabpb.org.br" rel="noreferrer">Ordem dos Advogados do Brasil - OAB Paraíba</a>
							</li>
							<li>
								<a target="_blank" href="https://www.mp.pb.gov.br/" rel="noreferrer">Ministério Público da Paraíba</a>
							</li>
							<li>
								<a target="_blank" href="http://www.defensoria.pb.def.br/" rel="noreferrer">Defensoria Pública da Paraíba</a>
							</li>
							<li>
								<a target="_blank" href="https://www.tjpb.jus.br/" rel="noreferrer">Tribunal de Justiça da Paraíba</a>
							</li>
							<li>
								<a target="_blank" href="https://www.juizdefora.pgj.pb.gov.br/atendimento-criminal" rel="noreferrer">Atendimento Criminal - PGJ PB</a>
							</li>
						</ul>
					</div>
				</div>
			</div>
			<small>Todos os direitos reservados. Criado por Proletec Soluções em TI.</small>
		</section>
	);
}

export default Footer;