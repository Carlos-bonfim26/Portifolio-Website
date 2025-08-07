import React, { forwardRef } from "react";
import MainProject from "../Components/MainProject";
import "../App.css";
import '../animation.css'
//image
import saboriaImg from "../img/saboria.png";
import compilotecaImg from "../img/compiloteca2.png";
import javaProject from "../img/projetoJava.png";
import siteeducacional from "../img/siteeducacional.png";
import desenho from '../img/desenho.png'
import geradorIA from "../img/geradorImgIA.png";
import cardapioOnline from "../img/cardapioOnline.png";
import quiz from "../img/quiz.png";
import chatbot from "../img/chatbot.png";
// react e swiper
import { useEffect, useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination } from "swiper/modules";
import "swiper/css";
import "swiper/css/pagination";
const MainProjects = forwardRef((props, ref) => {
  const [isMobileView, setIsMobileView] = useState(window.innerWidth < 1250);

  useEffect(() => {
    const handleResize = () => {
      setIsMobileView(window.innerWidth < 1250);
    };

    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  const projects = [
    {
      tittle: "Saboria",
      img: saboriaImg,
      github: "https://github.com/saboria-oficial/plataformaSaboria",
      desc: "A Saboria é uma plataforma de restaurantes apropriados para pessoas que sofrem de restrições alimentares, feita com React Js + Bootstrap.",
    },
    {
      tittle: "Compiloteca",
      img: compilotecaImg,
      github: "https://github.com/Carlos-bonfim26/biblioteca_eccomerce",
      desc: "Ecommerce de livros voltado para programadores. Projeto final do curso de PHP com MySQL no Senac.",
    },
    {
      tittle: "Sistema de Autenticação",
      img: javaProject,
      github:
        "https://github.com/Carlos-bonfim26/sistema_autenticador_deUsuario_comInterface",
      desc: "Sistema em Java com padrões de projeto Facade e Proxy, além de testes automatizados com Selenium e JUnit4.",
    },
    {
      tittle:"Quiz",
      img: quiz,
      github: "https://github.com/Carlos-bonfim26/quiz-conhecimentos",
      desc: "Um quiz com diversos temas com Javascript, HTML e CSS, esse foi uma das primeiras aplicações que eu fiz totalmente sozinho",
    },
     {
      tittle:"ChatBot com Gemini",
      img: chatbot,
      github: "https://github.com/Carlos-bonfim26/ChatBot_JS",
      desc: "Um chatbot utilizando a API da gemini, onde aprendi bastante sobre o controle de dados de uma IA e sua aplicação",
    },
     {
      tittle:"Gerador de Imagem com IA",
      img: geradorIA,
      github: "https://github.com/Carlos-bonfim26/gerador-de-imagem-IA",
      desc: "Esse gerador utiliza de algumas API's e formatos de criação de imagem com IA sendo um projeto muito interessante, porém tem limite de uso mensal",
    },
     {
      tittle:"Cardapio Online Full-Stack",
      img: cardapioOnline,
      github: "https://github.com/Carlos-bonfim26/frontend-cardapio-digital",
      desc: "Aplicação onde usei React Vite + Typescript, e SpringBoot e Postgree SQL no Back-end",
    },
     {
      tittle:"Site Educacional",
      img: siteeducacional,
      github: "https://github.com/Carlos-bonfim26/site-educacional",
      desc: "Aplicação sendo feita com HTML e CSS, Bootstrap e Swiper e tendo um design moderno e responsivo",
    },
      {
      tittle:"Aplicativo de Desenho",
      img: desenho,
      github: "https://github.com/Carlos-bonfim26/Aplicativo-de-desenho",
      desc: "Uma aplicação de desenhos feita com React JS e o canvas do HTML, utilizando os principais Hooks do React no projeto, UseState, UseEffect e UseRef.",
    },
  ];
  return (
    <div className="main-projects autoShow" ref={ref}>
      <h2>
        Principais <span>Projetos</span>
      </h2>

      <Swiper
        modules={[Pagination]}
        spaceBetween={20}
        slidesPerView={1}
        pagination={{ clickable: true }}
        breakpoints={{
          0: {
            slidesPerView: 1,
          },
          768: {
            slidesPerView: 2,
          },
          1250: {
            slidesPerView: 3,
          },
          2000: {
            slidesPerView: 4,
          },
        }}
      >
        {projects.map((project, index) => (
          <SwiperSlide key={index}>
            <MainProject {...project} />
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
});

export default MainProjects;
