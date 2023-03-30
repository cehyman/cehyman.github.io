import React from 'react'
import '../../pages/style.css';
import { Container } from 'react-bootstrap'


function Contactpage() {
  return (
    <div className='contactbackground'>
      <Container >
        <h2 className='contacthead'>Get In Touch</h2>
        <p className='contactpara'> I’m currently searching for opportunities as a developer. <br /> If there is any vacancy my inbox is always open. Whether <br /> you have any further questions or just want to say hi, <br /> I’ll try my best to get back to you!</p>
        
        <button
          className='contactbtn'
          onClick={() => 
            window.location = 'mailto:cehyman@gmail.com'
          }
        >Say Hello</button>
        <span></span>
        
        <p className='copyright fixed-bottom'><hr className='line' />© Copyright 2023.
        <br /> 
        Designed & Built by <span>Christopher Hyman</span></p>
      </Container>
    </div>
  )
}

export default Contactpage