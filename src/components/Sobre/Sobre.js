import React from 'react';

import './Sobre.css';

const Sobre = () => {
	return (
		<section className="sobre">
			<div className="container">
				<div className="flexbox box-sobre">
					<div className="texto-sobre">
						<h1>Sobre nós</h1>
						<p>
						Nosso escritório é especializado em Direito Criminal, oferecendo atendimento completo tanto para clientes quanto para seus familiares. Atuamos com foco em atendimentos presenciais, garantindo apoio jurídico sólido desde o primeiro contato, acompanhamento do processo penal e suporte integral ao preso e à família. Nosso compromisso é prestar serviços com ética, dedicação e atenção personalizada, buscando sempre a melhor estratégia para cada caso.
						</p>
					</div>
					<div className="img-sobre"></div>
				</div>
			</div>
			<div id="anchor-atuacao"></div>
		</section>
	);
}

export default Sobre;