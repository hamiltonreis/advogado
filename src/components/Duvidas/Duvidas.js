import React, { useRef } from 'react';

import { slideToggle } from '../../modules/custom-lib';

import './Duvidas.css';

const Duvidas = () => {
	const moreOrLess = useRef(null);
	const moreArticles = useRef(null);
	let opened = false;
	
	const showMoreArticles = (icon) => {
		slideToggle(moreArticles.current, 400);

		if (opened) {
			icon.classList.remove('fa-chevron-circle-down');
			icon.classList.add('fa-chevron-circle-up');
			moreOrLess.current.innerHTML = "Menos Duvidas";
		} else {
			icon.classList.remove('fa-chevron-circle-up');
			icon.classList.add('fa-chevron-circle-down');
			moreOrLess.current.innerHTML = "Mais Duvidas";
		}
	}

	const handleClick = (e) => {
		opened = !opened
		showMoreArticles(e.target);
	}

	return (
		<section className="Duvidas">
			<div className="container">
				<h1>Dúvidas</h1>
				<p>Clique sobre a pergunta para ver a resposta</p>
				<div className="box-Duvidas art1">
					<div className="art-single">
						<span>27/10/2019</span>
						<p>...</p>
					</div>
					<div className="art-single">
						<span>20/12/2019</span>
						<p>...</p>
					</div>
					<div className="art-single">
						<span>21/10/2019</span>
						<p>...</p>
					</div>
					<div className="art-single">
						<span>18/10/2019</span>
						<p>...</p>
					</div>
					<div className="art-single">
						<span>17/09/2018</span>
						<p>...</p>
					</div>
				</div>
				<div ref={moreArticles} className="box-Duvidas art2">
					<div className="art-single">
						<span>17/08/2018</span>
						<p>...</p>
					</div>
					<div className="art-single">
						<span>10/08/2018</span>
						<p>...</p>
					</div>
					<div className="art-single">
						<span>07/08/2018</span>
						<p>...</p>
					</div>
					<div className="art-single">
						<span>06/08/2018</span>
						<p>...</p>
					</div>
					<div className="art-single">
						<span>04/08/2018</span>
						<p>...</p>
					</div>
				</div>
				<div className="nav-art">
					<h2 ref={moreOrLess} >Mais Duvidas</h2>
					<i className="fa fa-chevron-circle-down" onClick={handleClick}></i>
				</div>
			</div>
		</section>
	);
}

export default Duvidas;