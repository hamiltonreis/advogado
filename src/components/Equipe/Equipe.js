import React, { useLayoutEffect, useState, useRef } from 'react';
import { carouselBuilder } from '../../modules/hcarrousel';
import './Equipe.css';

const Equipe = () => {
  const [width] = useState(window.innerWidth);
  const slidesContainer = useRef(null);
  const bulletsContainer = useRef(null);
  const arrowLeft = useRef(null);
  const arrowRight = useRef(null);

  useLayoutEffect(() => {
    const checkWidthChange = () => {
      if (width !== window.innerWidth) setTimeout(() => window.location.reload(), 0);
    };

    window.addEventListener('resize', checkWidthChange);
  }, [width]);

  useLayoutEffect(() => {
    const carousel = {
      slidesContainer: slidesContainer.current,
      allSlides: document.querySelectorAll('.slide-single'),
      bulletsContainer: bulletsContainer.current,
      arrowLeft: arrowLeft.current,
      arrowRight: arrowRight.current,
      autoSlide: false,
      speed: 500,
      interval: 5000,
    };

    carouselBuilder(carousel);
  }, []);

  return (
    <section className="equipe">
      <div className="container">
        <h1>Equipe</h1>
        <div ref={slidesContainer} className="carousel-container disable-select" draggable="false">

          <div className="slide-single eq1" draggable="false">
            <div className="img-equipe">
              <img src={require("../../media/equipe02.jpg").default} alt="Dr. Hamilton Reis" />
            </div>
            <div className="text-equipe" draggable="false">
              <h2>Dr. Hamilton Reis</h2>
              <p>
                Pós-graduado em Advocacia Criminal, o Dr. Hamilton Reis possui ampla experiência na defesa de pessoas
                em situações que envolvem investigações ou processos criminais. Atua com total discrição, seriedade e
                compromisso, buscando sempre garantir os direitos do cliente e alcançar a melhor solução possível em
                cada caso. Seu atendimento é humanizado, direto e voltado a oferecer segurança e confiança em todos os
                momentos.
              </p>
            </div>
          </div>

        </div>

        <div className="flexbox box-bullets">
          <i ref={arrowLeft} className="fa fa-chevron-circle-left arrows" id="navprev"></i>
          <div ref={bulletsContainer} className="carousel-bullets"></div>
          <i ref={arrowRight} className="fa fa-chevron-circle-right arrows" id="navnext"></i>
        </div>
      </div>
      <div id="anchor-contato"></div>
    </section>
  );
};

export default Equipe;
