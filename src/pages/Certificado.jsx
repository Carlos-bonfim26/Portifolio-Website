import {React, forwardRef} from "react";
// images
import proa from "../img/proa.png";
import uam from "../img/uam.png";
import senac from "../img/senac.png";
import ios from "../img/ios.png";
import './certificados.css'
import '../animation.css'
const Certificado = forwardRef((props, ref) => {
  return (
    <section id="certificados" ref={ref}>
      <h2 className="autoShow">
        Meus <span>Certificados</span>
      </h2>
      <div className="container-certificados">
        <div className="line-purple"></div>
        <div className="certificado">
          <div className="desc">
            <h3>Suporte em T.I</h3>
            <span>2022</span>
          </div>
          <div>
            <img src={ios} alt="Logo do instituto da Oportunidade Social" />
          </div>
        </div>
        <div className="certificado">
          <div>
            <img src={ios} alt="Logo do instituto da Oportunidade Social" />
          </div>
          <div className="desc">
            <h3>Desenvolvimento Web</h3>
            <span>2023</span>
          </div>
        </div>
        <div className="certificado">
          <div className="desc">
            <h3>Desenvolvimento Full Stack</h3>
            <span>2024</span>
          </div>
          <div>
            <img src={proa} alt="Logo instituto Proa" />
          </div>
        </div>
        <div className="certificado">
          <div>
            <img src={uam} alt="Logo Universidade Anhembi Morumbi" />
          </div>
          <div className="desc">
            <h3>Análise e Desenvolvimento de Sistemas</h3>
            <p>(cursando)</p>
            <span>2024</span>
          </div>
        </div>
        <div className="certificado">
          <div className="desc">
            <h3>Discover AI Proa + Oracle</h3>
            <span>2025</span>
          </div>
          <div>
            <img src={proa} alt="Logo instituto Proa" />
          </div>
        </div>
        <div className="certificado">
          <div>
            <img src={senac} alt="Logo Senac" />
          </div>
          <div className="desc">
            <h3>PHP com MySQL</h3>
            <span>2025</span>
          </div>
        </div>
      </div>
    </section>
  )
});

export default Certificado;
