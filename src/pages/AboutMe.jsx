import React, { forwardRef, useEffect, useState } from 'react'
import img from '../img/carlosbonfim.png'
import imgResponsiva from '../img/PerfilCarlosBonfim.png'
import '../animation.css'
import './AboutMe.css'
const AboutMe = forwardRef((props, ref) => {

  const [imageSrc, setImageSrc] = useState("");

  const handleResize = ()=>{
    const width = window.innerWidth;

    if(width <= 610){
      setImageSrc(imgResponsiva);
    }else{
      setImageSrc(img);
    }
  };
  useEffect(()=>{
    handleResize();
    window.addEventListener("resize", handleResize);

    return ()=>{
      window.removeEventListener("resize", handleResize)
    }
  }, []);

  return (
    <div className='container-about autoShow' ref={ref}>
      <div className="img-about">
        
        <img src={imageSrc} alt="Carlos Bonfim" />
        <div className="border-rectangle"></div>
         <div className="rectangle"></div>
      </div>
      <div className="text-about">
        <div className="border-rectangle"></div>
        <h2>Quem <span>Sou?</span></h2>
        <p>Olá, me chamo Carlos Bonfim, tenho 19 anos, estou cursando o Análise e Desenvolvimento de Sistemas na Universidade Anhembi Morumbi, tenho certificados de Suporte em T.I e Desenvolvimento Web no Instituto da Oportunidade Social, tendo participado uma vez do evento de melhores TCC’s que acontece na sede da TOTVS que é patrocinadora do Curso, também tenho certificado Proa e Senac no curso Proa Profissão onde se aprende desenvolvimento Full-Stack e onde eu desenvolvi o projeto Saboria abordado mais embaixo no site, sou uma pessoa comunicativa e analítica, tendo o esforço como uma das minhas principais virtudes, e se você quer saber mais um pouco sobre mim, explore o portfólio e veja mais um pouco do que já fiz.</p>
        <div className="rectangle"></div>
      </div>
    </div>
  )
});

export default AboutMe
