import React from 'react'
import { FaGithub } from "react-icons/fa";
import '../App.css'
const MainProject = (props) => {
  return (
    <div className='main-project'>
      <img src={props.img} alt={props.tittle} />
      <div>
        <h3>{props.tittle}</h3>
        <a href={props.github} target='_blank'><button> <FaGithub /> Github</button></a>
      </div>
      <p>{props.desc}</p>
    </div>
  )
}

export default MainProject
