import React from 'react';

import './Areas.css';

const Areas = () => {
	return (
		<section className="atuacao">
			<div className="container">
				<h1>Atuação</h1>
				<div className="flexbox box-atuacao">
					<div className="atuacao-single">
						<h2>Desde a delegacia</h2>
						<ul>
							<li>Acompanhamento de Flagrante</li>
							<li>Interrogatório</li>
							<li>Audiência de Custódia</li>
							<li>Restituição de Bens Apreendidos</li>
							<li>Liberdade provisória</li>
						</ul>
					</div>
					<div className="atuacao-single">
						<h2>Durante o Processo</h2>
						<ul>
							<li>Defesa completa</li>
							<li>Pedidos de Liberdade</li>
							<li>Atuação ativa nas investigações</li>
							<li>Tribunal do Júri</li>
							<li>Recursos</li>
						</ul>
					</div>
					<div className="atuacao-single">
						<h2>Com você até o fim</h2>
						<ul>
							<li>Progressão de Regime</li>
							<li>Livramento Condicional</li>
							<li>Defesa em falta disciplinar</li>
							<li>Transferências e Remissão</li>
							<li>Atendimento em Presídios</li>
						</ul>
					</div>
				</div>
			</div>
			<div id="anchor-equipe"></div>
		</section>
	);
}

export default Areas;