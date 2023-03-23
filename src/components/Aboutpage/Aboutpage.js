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
                            I am currently a student studying computer science, and I have a strong passion for developing high-quality software.
                            I am constantly looking for opportunities to expand my skillset and stay up-to-date with the latest developments in the field.
                            Through my personal website, I aim to share my journey, experiences, and interests with others.
                        </p>
                        <h3 className='educationtext'>Education</h3>
                        <p className='educationdetails'>
                            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                            Feugiat sed lectus vestibulum mattis ullamcorper velit sed ullamcorper morbi.
                            Metus dictum at tempor commodo ullamcorper.
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