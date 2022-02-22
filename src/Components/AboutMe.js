import React from 'react';
import './Style/AboutMe.css'

import 'bootstrap/dist/css/bootstrap.min.css';
import Container from 'react-bootstrap/esm/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

class AboutMe extends React.Component {
    
    render() { 
        return (
        <div className="AboutMe">
            <Container bg="dark" variant="dark" >
                <Row>
                    <Col xs={6} md={4}>
                    xs=6 md=4
                    </Col>
                    <Col xs={12} md={8}>
                    xs=12 md=8
                    </Col>
                </Row>
            </Container>
        </div>
        )
    }
}

export default AboutMe;