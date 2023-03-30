import React from "react";
import Card from "react-bootstrap/Card";
import Button from "react-bootstrap/Button";
import { Row } from "react-bootstrap";



function ExperienceCard(props) {
  return (
    <Card className="experience-card-view">
      <Card.Header as="h1">{props.header}</Card.Header>
      <Card.Img variant="top" src={props.imgPath} alt="card-img" />
      <Card.Body>
        <Card.Title as="h3">
          {props.title}
          <Card.Subtitle as="h5" style={{ textAlign: 'right', marginTop: '-25px'}}>
            {props.date}
          </Card.Subtitle>
        </Card.Title>

        <Card.Text style={{ textAlign: "justify", wordSpacing: "1px" }}>
          {props.description}
        </Card.Text>
        <Button className="viewbtn" variant="primary" href={props.ghLink} target="_blank">
          View Hennessey
        </Button>
        {"\n"}
        {"\n"}


        {!props.isBlog && props.demoLink && (
          <Button
            variant="primary"
            href={props.demoLink}
            target="_blank"
            style={{ marginLeft: "10px" }}
          >

            {"Demo"}
          </Button>
        )}
      </Card.Body>
    </Card>
  );
}
export default ExperienceCard;