import React from 'react';
import './Style/Projects.css'

import 'bootstrap/dist/css/bootstrap.min.css';

import Badge from 'react-bootstrap/Badge';
import Card from 'react-bootstrap/Card';
import Container from 'react-bootstrap/Container'

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faGitAlt, faYoutube } from '@fortawesome/free-brands-svg-icons';
import { faGlobe } from '@fortawesome/free-solid-svg-icons'

import google from './Photos/google.png';
import fb from './Photos/fb.jpg';

class Projects extends React.Component {
    
    render() { 
        return (
        <div className="Projects">
            <h1>Projects</h1>
            <div className="Projects-container">
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
            </div>
        </div>
        )
    }
}

export default Projects;