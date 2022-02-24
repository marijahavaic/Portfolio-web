import React from 'react';
import './Style/AboutMe.css'

import 'bootstrap/dist/css/bootstrap.min.css';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

import portfolio_undraw from './Photos/portfolio_undraw.svg'

class AboutMe extends React.Component {
    
    render() { 
        return (
        <div className="AboutMe">
             <Container className="justify-content-center align-items-center">
                <Row xs={1} md={2}>
                    <Col>
                        <img className='image' src={portfolio_undraw}/>
                    </Col>
                    <Col className="align-self-center">
                        <h1>Hi, I am Marija</h1>
                     <p>
                        A passonate self-taught Front-End Developer. Having an experience of building Web applications with JavaScript and Reactjs and some other cool libraries and frameworks. 
                     </p>
                    </Col>
                </Row>
            </Container>
        </div>
        )
    }
}

export default AboutMe;