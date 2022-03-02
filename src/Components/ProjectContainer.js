import React from 'react';

import 'bootstrap/dist/css/bootstrap.min.css';

import Badge from 'react-bootstrap/Badge';
import Card from 'react-bootstrap/Card';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';



import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

class ProjectContainer extends React.Component {
    render() { 
        let {key, image, title, text, badges, icons } = this.props;
        // console.log(image, title, text, badges, icons);
      
        return (
        <div>
            <Col className='d-flex justify-content-center'>
            <Card style={{ width: '20rem' }} bg='dark'  className='mb-5'>
                <Card.Img variant="top" src={image} />
                <Card.Body>
                    <Card.Title>{title}</Card.Title>
                    <Card.Text>{text}</Card.Text>                                
                    <div className='pt-3 pb-3'>
                        {badges.map((badge, i) => (
                            <Badge bg="light" text="dark" className='m-1' key={i}> {badge}</Badge>
                        ))} 
                    </div>
                    <Container>
                        <Row xs={2} md={3} lg={4} className="d-flex justify-content-center align-items-center">
                            {icons.map((icon, i) =>
                                 (
                                    <Col>
                                        <a href={icon.link} key={i}>
                                        <FontAwesomeIcon icon={icon.name} style={{fontSize: '2.5rem'}}  />
                                        </a>
                                    </Col>
                                )
                            )}
                        </Row>
                    </Container>
                </Card.Body>
            </Card>  
        </Col>
        </div>
        )   
    }
}               

export default ProjectContainer;