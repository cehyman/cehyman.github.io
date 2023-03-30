import React from 'react'
import '../../pages/style.css';
import { Container, Row, Col } from 'react-bootstrap'


function Aboutpage() {
    return (
        <div className='aboutpagebackground'>
            <Container>
                <Row className='textbackground'>
                    <Col md={7} >
                        <h3 className='aboutmetext'>About Me</h3>
                        <p className='aboutdetails'>
                            I am a senior studying computer science, and I have a strong passion for developing high-quality software.
                            I am constantly looking for opportunities to expand my skillset and stay up-to-date with the latest developments in the field.
                            Through my personal website, I aim to share my journey, experiences, and interests with others.
                        </p>
                        <h3 className='educationtext'>Education</h3>
                        <p className='educationdetails'>
                        I am currently pursuing a Bachelor of Science in Computer Science at Purdue University's School of Computer Science, located in West Lafayette, Indiana. 
                        I started this program in August 2019 and will be graduating in December 2023. 
                        As part of my degree, I am focusing on Software Engineering, which provides me with in-depth education and training in this exciting field. 
                        I am excited to be a part of this program and to continue expanding my knowledge and skills in computer science.
                        </p>
                        <ul className='cwlist'>
                            <Row className='courseworkrow'>
                                <h4>Relevant Coursework</h4>
                                <Col md={6}>
                                    <li> Software Engineering I & II</li>
                                    <li> Software Testing</li>
                                    <li> Information Systems</li>
                                    <li> Python Programming</li>
                                </Col>
                                <Col md={6}>
                                    <li> Introduction to Analysis of Algorithms</li>
                                    <li> Data Structures and Algorithms</li>
                                    <li> Systems Programming</li>
                                    <li> Operating Systems</li>
                                </Col>
                            </Row>
                        </ul>
                    </Col>
                    <Col md={5}>
                        <div className="webimage"></div>
                    </Col>
                </Row>
            </Container>
        </div>
    )
}

export default Aboutpage