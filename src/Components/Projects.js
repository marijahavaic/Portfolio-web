import React from 'react';
import './Style/Projects.css'

import 'bootstrap/dist/css/bootstrap.min.css';

import Badge from 'react-bootstrap/Badge';
import Card from 'react-bootstrap/Card';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Carousel from 'react-bootstrap/Carousel';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faGitAlt, faYoutube } from '@fortawesome/free-brands-svg-icons';
import { faGlobe } from '@fortawesome/free-solid-svg-icons'

import google from './Photos/google.png';
import fb from './Photos/fb.jpg';

class Projects extends React.Component {
    
    render() { 
        return (
        <div className="Projects d-flex flex-column justify-content-center align-items-center mt-5 pt-5 mb-5 pb-5">
            <Container className="d-flex flex-column justify-content-center align-items-center" fluid>
            <h1 className='p-3'>Projects</h1>
                <Row xs={1} md={2} lg={3} className="justify-content-center align-items-center">
                    <Col>
                        <Card style={{ width: '20rem' }} bg='dark'  className='mb-5'>
                                <Card.Img variant="top" src={google} />
                                <Card.Body>
                                    <Card.Title>Google</Card.Title>
                                    <Card.Text>
                                    Some quick example text to build on the card title and make up the bulk of
                                    the card's content.
                                    
                                    <Container className='pt-3 pb-3'>
                                        <Badge bg="light" text="dark" className='m-1'> HTML5</Badge>
                                        <Badge bg="light" text="dark" className='m-1'> CSS3</Badge>  
                                        <Badge bg="light" text="dark" className='m-1'> JavaScript</Badge>  
                                        <Badge bg="light" text="dark" className='m-1'> React</Badge> 
                                        <Badge bg="light" text="dark" className='m-1'> Bootstrap</Badge> 
                                        <Badge bg="light" text="dark" className='m-1'> FontAwesome</Badge>   
                                    </Container>
                                    <Container>
                                        <Row xs={2} md={3} lg={5} className="d-flex justify-content-center align-items-center">
                                            <Col>
                                                <FontAwesomeIcon icon={faGitAlt} style={{fontSize: '2.5rem'}}  />
                                            </Col>
                                            <Col>
                                                <FontAwesomeIcon icon={faGlobe} style={{fontSize: '2.5rem'}}  />
                                            </Col>
                                            <Col>
                                                <FontAwesomeIcon icon={faYoutube} style={{fontSize: '2.5rem'}}  />
                                            </Col>
                                        </Row>
                                    </Container>
                                    </Card.Text>
                                </Card.Body>
                            </Card>
                        </Col>
                    <Col>
                        <Card style={{ width: '20rem' }} bg='dark' className='mb-5'>
                        <Card.Img variant="top" src={fb} />
                        <Card.Body>
                            <Card.Title>Google</Card.Title>
                            <Card.Text>
                            Some quick example text to build on the card title and make up the bulk of
                            the card's content.
                            </Card.Text>
                            <Container>
                                <Badge bg="light" text="dark" className='m-1'> HTML5</Badge>
                                <Badge bg="light" text="dark" className='m-1'> CSS3</Badge>  
                                <Badge bg="light" text="dark" className='m-1'> JavaScript</Badge>  
                                <Badge bg="light" text="dark" className='m-1'> React</Badge> 
                                <Badge bg="light" text="dark" className='m-1'> Bootstrap</Badge>   
                            </Container>
                            <div className='icons'>
                                <ul>
                                    <li><a href='https://github.com/marijahavaic'>
                                    <FontAwesomeIcon icon={faGitAlt} /></a>
                                    </li>
                                    <li><a href='https://www.google.com/'>
                                    <FontAwesomeIcon icon={faGlobe} /></a>
                                    </li>
                                    <li>
                                    <a href='https://github.com/marijahavaic'>
                                    <FontAwesomeIcon icon={faYoutube} /></a>
                                    </li>
                                </ul>
                            </div>
                        </Card.Body>
                     </Card>
                    </Col>
                    <Col>
                    <Card style={{ width: '20rem' }} bg='dark' className='mb-5'>
                            <Card.Img variant="top" src={google} />
                            <Card.Body>
                                <Card.Title>Google</Card.Title>
                                <Card.Text>
                                Some quick example text to build on the card title and make up the bulk of
                                the card's content.
                                </Card.Text>
                                <Container>
                                    <Badge bg="light" text="dark" className='m-1'> HTML5</Badge>
                                    <Badge bg="light" text="dark" className='m-1'> CSS3</Badge>  
                                    <Badge bg="light" text="dark" className='m-1'> JavaScript</Badge>  
                                    <Badge bg="light" text="dark" className='m-1'> React</Badge> 
                                    <Badge bg="light" text="dark" className='m-1'> Bootstrap</Badge> 
                                    <Badge bg="light" text="dark" className='m-1'> FontAwesome</Badge>   
                                </Container>
                                <div className='icons'>
                                    <ul>
                                        <li><a href='https://github.com/marijahavaic'>
                                        <FontAwesomeIcon icon={faGitAlt} /></a>
                                        </li>
                                        <li><a href='https://www.google.com/'>
                                        <FontAwesomeIcon icon={faGlobe} /></a>
                                        </li>
                                        <li>
                                        <a href='https://github.com/marijahavaic'>
                                        <FontAwesomeIcon icon={faYoutube} /></a>
                                        </li>
                                    </ul>
                                </div>
                            </Card.Body>
                        </Card>
                        </Col>
                </Row>
            </Container>


                {/* Mobile version */}
                {/* <Carousel className='justify-content-center'>
                    <Carousel.Item>
                        <Card style={{ width: '18rem' }} bg='dark'>
                            <Card.Img variant="top" src={google} />
                            <Card.Body>
                                <Card.Title>Google</Card.Title>
                                <Card.Text>
                                Some quick example text to build on the card title and make up the bulk of
                                the card's content.
                                </Card.Text>
                                <Container>
                                    <Badge bg="light" text="dark" className='m-1'> HTML5</Badge>
                                    <Badge bg="light" text="dark" className='m-1'> CSS3</Badge>  
                                    <Badge bg="light" text="dark" className='m-1'> JavaScript</Badge>  
                                    <Badge bg="light" text="dark" className='m-1'> React</Badge> 
                                    <Badge bg="light" text="dark" className='m-1'> Bootstrap</Badge> 
                                    <Badge bg="light" text="dark" className='m-1'> FontAwesome</Badge>   
                                </Container>
                                <div className='icons'>
                                    <ul>
                                        <li><a href='https://github.com/marijahavaic'>
                                        <FontAwesomeIcon icon={faGitAlt} /></a>
                                        </li>
                                        <li><a href='https://www.google.com/'>
                                        <FontAwesomeIcon icon={faGlobe} /></a>
                                        </li>
                                        <li>
                                        <a href='https://github.com/marijahavaic'>
                                        <FontAwesomeIcon icon={faYoutube} /></a>
                                        </li>
                                    </ul>
                                </div>
                            </Card.Body>
                        </Card>
                    </Carousel.Item>
                    <Carousel.Item>
                        <Card style={{ width: '18rem' }} bg='dark'>
                        <Card.Img variant="top" src={fb} />
                        <Card.Body>
                            <Card.Title>Google</Card.Title>
                            <Card.Text>
                            Some quick example text to build on the card title and make up the bulk of
                            the card's content.
                            </Card.Text>
                            <Container>
                                <Badge bg="light" text="dark" className='m-1'> HTML5</Badge>
                                <Badge bg="light" text="dark" className='m-1'> CSS3</Badge>  
                                <Badge bg="light" text="dark" className='m-1'> JavaScript</Badge>  
                                <Badge bg="light" text="dark" className='m-1'> React</Badge> 
                                <Badge bg="light" text="dark" className='m-1'> Bootstrap</Badge>   
                            </Container>
                            <div className='icons'>
                                <ul>
                                    <li><a href='https://github.com/marijahavaic'>
                                    <FontAwesomeIcon icon={faGitAlt} /></a>
                                    </li>
                                    <li><a href='https://www.google.com/'>
                                    <FontAwesomeIcon icon={faGlobe} /></a>
                                    </li>
                                    <li>
                                    <a href='https://github.com/marijahavaic'>
                                    <FontAwesomeIcon icon={faYoutube} /></a>
                                    </li>
                                </ul>
                            </div>
                        </Card.Body>
                    </Card>
                    </Carousel.Item>
                </Carousel> */}
        </div>
        )
    }
}

export default Projects;