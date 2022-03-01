import React from 'react';

import 'bootstrap/dist/css/bootstrap.min.css';

// import Badge from 'react-bootstrap/Badge';
import Card from 'react-bootstrap/Card';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';


// import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

class Project extends React.Component {
    render() { 
        let {image, title, text } = this.props;
        console.log(image, title, text);
        return (
        <div>
            {image}
            <Card style={{ width: '20rem' }} bg='dark'  className='mb-5'>
                <Card.Img variant="top" src={image} />
                <Card.Body>
                    <Card.Title>{title}Title</Card.Title>
                    <Card.Text>{text}</Card.Text>                                
                    <div className='pt-3 pb-3'>
                        {/* {project.badges.map(badge => {
                            <Badge bg="light" text="dark" className='m-1'> {badge}</Badge>
                        })}  */}
                    </div>
                    <Container>
                        <Row xs={2} md={3} lg={5} className="d-flex justify-content-center align-items-center">
                            {/* {project.icons.map( => {
                                return (
                                    <Col>
                                        <a href={icon.link}>
                                        <FontAwesomeIcon icon={icon.name} style={{fontSize: '2.5rem'}}  />
                                        </a>
                                    </Col>
                                )
                            })} */}
                        </Row>
                    </Container>
                </Card.Body>
            </Card>
        </div>
        )   
    }
}               

export default Project;