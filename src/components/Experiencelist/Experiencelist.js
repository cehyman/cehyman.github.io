import React from 'react'
import '../../pages/style.css';
import ExperienceCard from "./ExperienceCard";
import { Container, Row, Col } from 'react-bootstrap'
import useradminpanel from '../../Assets/Admin-Panel-Dashboard.png'
import olximage from '../../Assets/olx-clone image.png'
import netfliximage from '../../Assets/React-App-netflix-clone.png'
import gridlinesbuilders from '../../Assets/Gridlinesbuilders.png'
import charlespizza from '../../Assets/Charlestown-Pizza.png'
import todolist from '../../Assets/todolist.png'

function Experiencelist() {
  return (
    <div className="projectbackground">
      <Container fluid className="project-section">
        <Container>
          <Row style={{ justifyContent: "center", paddingBottom: "10px" }}>
            <Col md={4} className="project-card">
              <ExperienceCard
                imgPath={useradminpanel}
                isBlog={false}
                title="Lorem ipsum dolor"
                description="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Dui id ornare arcu odio ut sem nulla pharetra."
                ghLink="https://rahul-dashboard-pannel.netlify.app"
              />
            </Col>

            <Col md={4} className="project-card">
              <ExperienceCard
                imgPath={olximage}
                isBlog={false}
                title="Lorem ipsum dolor"
                description="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Dui id ornare arcu odio ut sem nulla pharetra."
                ghLink="https://olx-clone-rahul.netlify.app/"
              />
            </Col>

            <Col md={4} className="project-card">
              <ExperienceCard
                imgPath={netfliximage}
                isBlog={false}
                title="Lorem ipsum dolor"
                description="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Dui id ornare arcu odio ut sem nulla pharetra."
                ghLink="https://react-rahul-netflix-clone.netlify.app/"
              />
            </Col>

            <Col md={4} className="project-card">
              <ExperienceCard
                imgPath={gridlinesbuilders}
                isBlog={false}
                title="Lorem ipsum dolor"
                description="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Dui id ornare arcu odio ut sem nulla pharetra."
                ghLink="https://gridlinesbuilders.in/"
              />
            </Col>

            <Col md={4} className="project-card">
              <ExperienceCard
                imgPath={charlespizza}
                isBlog={false}
                title="Lorem ipsum dolor"
                description="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Dui id ornare arcu odio ut sem nulla pharetra."
                ghLink="https://rahulvijay81.github.io/Pizzastore-bootstrap/"
              />
            </Col>

            <Col md={4} className="project-card">
              <ExperienceCard
                imgPath={todolist}
                isBlog={false}
                title="Lorem ipsum dolor"
                description="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Dui id ornare arcu odio ut sem nulla pharetra."
                ghLink="https://todolist-rahul81.netlify.app/"

              />
            </Col>
          </Row>
        </Container>
      </Container>
    </div>
  )
}
export default Experiencelist