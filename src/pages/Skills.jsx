import React from "react";
import Skill from "../Components/Skill";
import { FaHtml5 } from "react-icons/fa";
import { FaCss3 } from "react-icons/fa";
import { RiJavascriptFill } from "react-icons/ri";
import { FaReact } from "react-icons/fa";
import { FaBootstrap } from "react-icons/fa";
import { CgFigma } from "react-icons/cg";
import { FaJava } from "react-icons/fa6";
import { SiPhp } from "react-icons/si";
import { TbBrandCSharp } from "react-icons/tb";
import { GrMysql } from "react-icons/gr";
import { FaGitAlt } from "react-icons/fa";

const Skills = () => {
  return (
    <div className="Skills">
      <h2>
        <span>Minhas</span> Skills
      </h2>
      <div className="container-skills">
        <Skill name="HTML" icon={<FaHtml5 />} progress="90" />
        <Skill name="CSS" icon={<FaCss3 />} progress="85" />
        <Skill name="Javascript" icon={<RiJavascriptFill />} progress="70" />
        <Skill name="React" icon={<FaReact />} progress="70" />
        <Skill name="Bootstrap" icon={<FaBootstrap />} progress="80" />
        <Skill name="Figma" icon={<CgFigma />} progress="70" />
        <Skill name="Java" icon={<FaJava />} progress="50" />
        <Skill name="PHP" icon={<SiPhp />} progress="50" />
        <Skill name="C#" icon={<TbBrandCSharp />} progress="30" />
        <Skill name="MySQL" icon={<GrMysql />} progress="65" />
        <Skill name="Git e Github" icon={<FaGitAlt />
} progress="70" />
      </div>
    </div>
  );
};

export default Skills;
