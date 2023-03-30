import React from "react";
import Card from "react-bootstrap/Card";
import Button from "react-bootstrap/Button";



function ProjectCard(props) {
    return (
        <Card className="project-card-view">
            <Card.Header as="h4">{props.header}</Card.Header>
            <Card.Body>
                <Card.Title style={{ fontWeight: 'bold' }}>{
                    props.title}
                    <Card.Subtitle as="h5" style={{ textAlign: 'right', marginTop: '-25px' }}>
                        {props.date}
                    </Card.Subtitle>
                </Card.Title>
                <Card.Text >
                    {props.description}
                </Card.Text>
                <Button className="viewbtn" variant="primary" href={props.ghLink} target="_blank">
                    View
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
export default ProjectCard;