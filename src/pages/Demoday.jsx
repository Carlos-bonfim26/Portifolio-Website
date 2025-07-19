import React, { forwardRef } from "react";
import "../App.css";
import img from "../img/team.png";
const Demoday = forwardRef((props, ref) => {
  return (
    <div className="container-demoday" ref={ref}>
      <div className="enfeite">
        <div className="rectangle-border"></div>
        <div className="line"></div>
        <div className="circle"></div>
      </div>
      <div className="text-demoday">
        <h2>
          Projeto <span>Demoday</span>
        </h2>
        <p>
          Durante minha formação como Desenvolvedor Full Stack no Instituto
          PROA, participei da criação da Saboria, uma startup fictícia voltada
          para área alimenticia com o proposíto de ser uma plataforma de
          restaurantes focados em pessoas que sofrem de restrições alimentares.
          O projeto foi desenvolvido por mim e meu grupo como trabalho final do
          curso e apresentado no DemoDay, evento que simula um pitch real de
          startup para o mercado.
        </p>
        <p>
          Na Saboria, atuei com destaque na área de Desenvolvimento Front-End,
          utilizando React, JavaScript, HTML e CSS para criar interfaces
          modernas, acessíveis e responsivas. Além disso, também contribuí com a
          equipe de Back-End criando os filtros de busca na página, organização
          do repositório no GitHub e padronização de código em equipe.
        </p>
        <p>
          Fui um dos responsáveis por garantir a melhor experiência visual e
          funcional do site, aplicando princípios de UI/UX Design e boas
          práticas de versionamento. Trabalhei com metodologias ágeis e
          colaborei ativamente na construção da apresentação final do projeto,
          demonstrando habilidades técnicas e comportamentais essenciais para o
          mercado.
        </p>
        <p>
          Apresentar a Saboria no DemoDay foi um marco importante da minha
          trajetória, pois pude aplicar meus conhecimentos em um ambiente
          colaborativo, com foco em qualidade, inovação e entrega real.
        </p>
      </div>
      <div className="img-demoday">
        <img src={img} alt="time da Saboria" />
        <div className="rectangle-border"></div>
      </div>
    </div>
  );
});

export default Demoday;
