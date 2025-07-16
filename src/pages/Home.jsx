import React from "react";
import Header from "../Components/Header";
import { FaGithub } from "react-icons/fa";
import { IoLogoLinkedin } from "react-icons/io5";
import { FaInstagram } from "react-icons/fa";

Header;
const Home = () => {
  return (
    <div>
      <Header></Header>
      <div className="container-home">
        <h1>Carlos Bonfim</h1>
        <h2>Web Developer</h2>
        <div className="icons">
          <a href="https://github.com/Carlos-bonfim26" target="_blank">
            <FaGithub />
          </a>
          <a href="https://www.linkedin.com/in/carlosbonfim26/" target="_blank">
            <IoLogoLinkedin />
          </a>
          <a href="https://www.instagram.com/carlosbonfim_dw/" target="_blank">
            <FaInstagram />
          </a>
        </div>
      </div>
    </div>
  );
};

export default Home;
