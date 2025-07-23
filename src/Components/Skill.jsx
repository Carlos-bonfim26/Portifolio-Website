import React from "react";
import "../pages/Skills.css";
import '../animation.css'
const Skill = (props) => {
  return (
    <div className="skill autoShow">
      <h3>{props.name}</h3>
      <div className="info-skill">
        {props.icon}
        <div className="progress-bar">
          <div className="progress" style={{ width: `${props.progress}%` }}></div>
        </div>

        <span>{props.progress}%</span>
      </div>
    </div>
  );
};

export default Skill;
