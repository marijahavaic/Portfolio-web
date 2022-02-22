import React from 'react';
import './Style/AboutMe.css'

import 'bootstrap/dist/css/bootstrap.min.css';
// import Container from 'react-bootstrap/esm/Container';
// import Row from 'react-bootstrap/Row';
// import Col from 'react-bootstrap/Col';
import portfolio_undraw from './Photos/portfolio_undraw.svg'

class AboutMe extends React.Component {
    
    render() { 
        return (
        <div className="AboutMe">
            <div className='image-container'>
                <img className='image' src={portfolio_undraw}/>
            </div>
            <div className='text-container'>
                <h1>Hi, I am Marija</h1>
                <p>
                A passonate self-taught Front-End Developer. Having an experience of building Web applications with JavaScript and Reactjs and some other cool libraries and frameworks. 
                </p>
            </div>


            {/* <Container>
                <Row>
                    <Col xs={6} md={4}>
                        <img className='image' src={portfolio_undraw}/>
                    </Col>
                    <Col xs={12} md={8}>
                    
                    </Col>
                </Row>
            </Container> */}
        </div>
        )
    }
}

export default AboutMe;