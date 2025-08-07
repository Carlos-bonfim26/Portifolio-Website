import React, { forwardRef, useEffect, useState } from "react";
import img from "../img/carlosbonfim.png";
import imgResponsiva from "../img/PerfilCarlosBonfim.png";
import "../animation.css";
import "./AboutMe.css";
const AboutMe = forwardRef((props, ref) => {
  const [imageSrc, setImageSrc] = useState("");

  const handleResize = () => {
    const width = window.innerWidth;

    if (width <= 610) {
      setImageSrc(imgResponsiva);
    } else {
      setImageSrc(img);
    }
  };
  useEffect(() => {
    handleResize();
    window.addEventListener("resize", handleResize);

    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  return (
    <div className="container-about autoShow" ref={ref}>
      <div className="img-about">
        <img src={imageSrc} alt="Carlos Bonfim" />
        <div className="border-rectangle"></div>
        <div className="rectangle"></div>
      </div>
      <div className="text-about">
        <div className="border-rectangle"></div>
        <h2>
          Quem <span>Sou?</span>
        </h2>
        <p>
          Olá, me chamo Carlos Bonfim, sou estudante da Universidade Anhembi
          Morumbi, cursando análise e desenvolvimento de sistemas, entrei na
          faculdade em 2024 com bolsa integral, comecei na área da programação
          em 2023 cursando desenvolvimento web, onde me apaixonei por criar
          páginas e pela lógica de programação, pela sua complexidade e diversas
          soluções, o que torna desafiador e interessante a área, como
          conquistas além dos projetos e certificações já feitas em 2022 eu tive
          a honra de representar minha sala no evento de melhores TCC’s no palco
          da Totvs e em 2024 ganhei o prêmio de aluno destaque enquanto fui
          estudante do Instituto Proa, atualmente venho estudando bastante para
          desenvolvimento web, mas tenho interesse em outras áreas também,
          convido você a continuar scrollando meu portfólio e descobrir tudo que
          eu já fiz na minha carreira como programador.
        </p>
        <div className="rectangle"></div>
      </div>
    </div>
  );
});

export default AboutMe;
