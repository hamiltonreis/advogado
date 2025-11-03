import React from 'react';
import './LogoHeader.css';

const LogoHeader = () => {
	return (
		<a href="/" title="Voltar ao topo">
			<img
				draggable="false"
				src={require('../../../media/logotop.png').default}
				alt="logo"
				className="logo-img"
			/>
		</a>
	);
}

export default LogoHeader;