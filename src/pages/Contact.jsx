import React, { forwardRef } from 'react'
import contatoImg from '../img/contact.svg'
const Contact = forwardRef((props, ref) => {
  return (
    <div className='contact' ref={ref}>
      <h2>Entre em <span>contato</span></h2>
      <div className="container-contact">
        <div className="links">
          <a href="https://www.linkedin.com/in/carlosbonfim26/" target='_blank'>Linkedin</a>
          <a href="mailto:Carlosbonfim772@gmail.com" >carlosbonfim772@gmail.com</a>
          <a href="https://www.instagram.com/carlosbonfim_dw/" target='_blank'>Instagram</a>
        </div>
        <img src={contatoImg} alt="" />
      </div>
    </div>
  )
})

export default Contact
