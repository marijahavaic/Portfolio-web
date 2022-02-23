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

class Projects extends React.Component {
    
    render() { 
        return (
        <div className="Projects">
            <h1>Projects</h1>
            <div className="Projects-container"></div>
            <Card style={{ width: '18rem' }} bg='dark'>
                <Card.Img variant="top" src={google} />
                <Card.Body>
                    <Card.Title>Google</Card.Title>
                    <Card.Text>
                    Some quick example text to build on the card title and make up the bulk of
                    the card's content.
                    </Card.Text>
                    <Container>
                        <Badge bg="light" text="dark" className='p-2 m-2'> HTML5</Badge>
                        <Badge bg="light" text="dark" className='p-2 m-2'> CSS3</Badge>  
                        <Badge bg="light" text="dark" className='p-2 m-2'> JavaScript</Badge>    
                    </Container>
                    <ul>
                        <li>
                        <FontAwesomeIcon icon={faGitAlt} />
                        </li>
                        <li>
                        <FontAwesomeIcon icon={faGlobe} />
                        </li>
                        <li>
                        <FontAwesomeIcon icon={faYoutube} />
                        </li>
                    </ul>
                </Card.Body>
            </Card>

        </div>
        )
    }
}

export default Projects;