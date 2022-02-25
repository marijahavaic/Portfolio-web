import React from 'react';
import './Style/AboutMe.css'

import 'bootstrap/dist/css/bootstrap.min.css';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Button from 'react-bootstrap/Button';

import portfolio_undraw from './Photos/portfolio_undraw.svg'

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faGitAlt, faLinkedin } from '@fortawesome/free-brands-svg-icons';

class AboutMe extends React.Component {
    
    render() { 
        return (
        <div className="AboutMe d-flex justify-content-center align-items-flex-end pt-5 mt-5">
             <Container className='pt-5 mt-5'>
                <Row xs={1} md={1} lg={2}>
                    <Col className='w-50'>
                        <img className='image' src={portfolio_undraw} className='w-100 h-100'/>
                    </Col>
                    <Col className="align-self-center w-50">
                        <h1>Hi, I am Marija</h1>
                     <p>
                        A passonate self-taught Front-End Developer. Having an experience of building Web applications with JavaScript and Reactjs and some other cool libraries and frameworks. 
                     </p>
                        <Container className="d-flex justify-content-center align-items-center"  >
                            <Row xs={2} md={3} lg={5}  >
                                <Col>
                                    <FontAwesomeIcon icon={faGitAlt} style={{fontSize: '2.25rem'}} className="pr-1" />
                                </Col>
                                <Col>
                                    <FontAwesomeIcon icon={faLinkedin} style={{fontSize: '2.25rem'}}/>
                                </Col>
                            </Row>
                        </Container> 
                        <Button variant="primary" type="submit" className='mt-3'>
                            Download CV
                        </Button>
                    </Col>
                </Row>
            </Container>
        </div>
        )
    }
}

export default AboutMe;