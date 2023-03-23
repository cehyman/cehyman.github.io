import React from 'react'
import '../../pages/style.css';
import { Container, Row, Col } from 'react-bootstrap'
import Text from '../Homepage/Text'
import { AiFillGithub } from "react-icons/ai";
import { FaLinkedinIn } from "react-icons/fa";
import hand from '../../Assets/hand-waving.png'

function Home() {
  return (
    <div className='homepagebackground'>
      <Container>
        <Row className='introrow'>
          <Col className='intro' md={7}>
            <h2 className='headtext'>Hello <span className='wave'><img className='hand' src={hand} alt=""></img> </span></h2>
            <h2 className='nametext'>I'm Chris Hyman</h2>
            <span></span>
            <Text />
            <button onClick={() => {
              window.open("https://www.linkedin.com/in/cehyman/");
            }}
              className='socailmediabtn'><FaLinkedinIn className='icon' /></button>
            <button onClick={() => {
              window.open("https://github.com/cehyman");
            }}
              className='socailmediabtn'><AiFillGithub className='icon' /></button>
          </Col>
          <Col md={5}>
            <div className="imagedeveloper">
            </div>
          </Col>
        </Row>
      </Container>
    </div>
  )
}

export default Home