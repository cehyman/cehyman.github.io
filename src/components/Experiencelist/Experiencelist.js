import React from 'react'
import '../../pages/style.css';
import ProjectCard from "./ProjectCard";
import ExperienceCard from "./ExperienceCard"
import { Container, Row, Col } from 'react-bootstrap'
import np from '../../Assets/np.png'


function Experiencelist() {
  return (
    <div className="projectbackground">

      <Container fluid className="project-section">
        <Container>

          <Row >
            <Col md={7} className="experience-card fixed-top">
              <ExperienceCard
                imgPath={np}
                isBlog={false}
                header="Hennessey Digital"
                title="Python Developer Intern"
                date="June 2022 - December 2022"
                description="As the primary developer for the Neighborhood Pigeon project, I created an API using the FastAPI framework hosted on AWS. 
                This project involved pulling Google search engine results pages from thousands of locations across the US for specific keywords and storing them in a PostgreSQL database to track clients' website rankings. 
                The data collected then allowed for querying of specific websites/URLs to display their highest organic position within a radius of a specified location, which was then accurately visualized on a map. 
                I also implemented real-time querying of local Google map results from anywhere in the US and created a map displaying website position results for a user's search. 
                Additionally, I presented Neighborhood Pigeon to the entire company during a weekly meeting and attended daily standup meetings to discuss ongoing projects and issues."
                ghLink="https://hennessey.com/"
              />
            </Col>
            <Col md={4} className="project-card ">
              <h2 className="projects-header">
                Projects
              </h2>
              <ProjectCard
                isBlog={false}
                header="Purdue University"
                title="Boiler Buy"
                date="Fall 2022"
                description="Our team built an online marketplace for Purdue University students to buy and sell items and services securely. We used Django API and PostgreSQL for the backend and AngularJS with Typescript and HTML for the frontend. The platform features student verification and real-time chatting, demonstrating our proficiency in web development and teamwork."                ghLink="https://github.com/cehyman/boiler-buy"
              />

              <ProjectCard
                isBlog={false}
                header="Purdue University"
                title="Next Level"
                date="Fall 2021"
                description="Our team developed a Java-based game that challenges players to survive and complete tasks to progress through each level. The game utilizes a PostgreSQL database to store user-created levels, profiles, and custom assets, which are accessible to anyone. Our team demonstrated proficiency in Java development and database management, including the ability to create dynamic gameplay and integrate databases to store and retrieve user-generated content."
                ghLink="https://github.com/Richard-Stump/Level-Up"
              />

              <ProjectCard
                isBlog={false}
                header="Personal"
                title="Resume Website"
                date="Spring 2023"
                description="I built a personal website using the ReactJS framework to showcase my resume, personal links, and contact information. This project demonstrates my proficiency in frontend web development and familiarity with ReactJS, a popular frontend framework. It also showcases my ability to design and develop a professional and functional website that reflects my personal brand and presents information in an organized and user-friendly manner."
                ghLink="https://github.com/cehyman/cehyman.github.io"
              />
            </Col>
          </Row>
        </Container>
      </Container>
    </div>
  )
}
export default Experiencelist