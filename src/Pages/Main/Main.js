import React from 'react';

//Components
import Header from '../../components/Header/Header';
import Sobre from '../../components/Sobre/Sobre';
import Areas from '../../components/Areas/Areas';
import Equipe from '../../components/Equipe/Equipe';
import Contato from '../../components/Contato/Contato';
import Duvidas from '../../components/Duvidas/Duvidas';
import Footer from '../../components/Footer/Footer';

const Main = () => {
	return (
		<>
			<Header />
			<div className="fix-header"></div>
			<Sobre />
			<Areas />
			<Equipe />
			<Contato />
			<Duvidas />
			<Footer />
		</>
	);
}
 
export default Main;