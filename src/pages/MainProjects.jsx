import React from "react";
import MainProject from "../Components/MainProject";
import "../App.css";
//image
import saboriaImg from "../img/saboria.png";
import compilotecaImg from "../img/compiloteca.png";
import javaProject from "../img/projetoJava.png";
const MainProjects = () => {
  return (
    <div className="main-projects">
      <h2>
        Principais <span>Projetos</span>
      </h2>
      <div className="container-projects">
        <MainProject
          tittle="Saboria"
          img={saboriaImg}
          github="https://github.com/saboria-oficial/plataformaSaboria"
          desc="A Saboria é uma plataforma de restaurantes apropriados para pessoas que sofrem de restrições alimentares, sua interface foi construída utilizando React Js + Bootstrap."
        />
        <MainProject
          tittle="Compiloteca"
          img={compilotecaImg}
          github="https://github.com/Carlos-bonfim26/biblioteca_eccomerce"
          desc="Um  Ecommerce de Livraria para programadores, tenta uma lista de livros conhecidos pelos devs como Código Limpo e O Programador Pragmático, a aplicação foi feita em PHP e MySQL sendo o meu projeto de conclusão de curso no Senac para o curso de PHP com Mysql."
        />
        <MainProject
          tittle="Sistema de Autenticação de Usuário"
          img={javaProject}
          github="https://github.com/Carlos-bonfim26/sistema_autenticador_deUsuario_comInterface"
          desc="Um sistema simples de autenticação usuário, o que é de destaque nesse projeto é o uso dos design patterns ou padrões de projeto Facade e Proxy e também que nesse sistema foi feito testes automatizados, ferramentas usadas:Java, Selenium, Junit4, HTML, CSS, Javascript e Servlet"
        />
      </div>
    </div>
  );
};

export default MainProjects;
