import React from 'react';
import './Style/Skills.css';

import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faHtml5, faCss3Alt, faJs, faBootstrap, faFontAwesome, faReact, faFigma } from '@fortawesome/free-brands-svg-icons';
import { faImage, faImages, faObjectGroup, faPencilRuler, faClone, faRoute } from '@fortawesome/free-solid-svg-icons'

class Skills extends React.Component {
    
    render() { 
        return (
        <div className="Skills">
            <Container className="justify-content-center align-items-center text-center mb-5 pb-5">
                <h1><a id="skills">Skills</a></h1>
                <Row xs={1} md={2}>
                    <Col>
                        <Container className="justify-content-center align-items-center"  >
                            <h1 className='mb-4'>Front-End</h1>
                            <Row xs={2} md={3} lg={5}  >
                                <Col>
                                    <FontAwesomeIcon icon={faHtml5} style={{fontSize: '2.25rem'}}/>
                                    <p>HTML 5</p>
                                </Col>
                                <Col>
                                    <FontAwesomeIcon icon={faCss3Alt} style={{fontSize: '2.25rem'}}/>
                                    <p>CSS 3</p>
                                </Col>
                                <Col>
                                    <FontAwesomeIcon icon={faJs} style={{fontSize: '2.25rem'}}/>
                                    <p>JavaScript</p>
                                </Col>
                                <Col>
                                    <FontAwesomeIcon icon={faReact} style={{fontSize: '2.25rem'}}/>
                                    <p>React JS</p>
                                </Col>
                                <Col>
                                    <FontAwesomeIcon icon={faRoute} style={{fontSize: '2.25rem'}}/>
                                    <p>React Router</p>
                                </Col>
                                <Col>
                                    <FontAwesomeIcon icon={faBootstrap} style={{fontSize: '2.25rem'}}/>
                                    <p>Bootstrap 5</p>
                                </Col>
                                <Col>
                                    <FontAwesomeIcon icon={faFontAwesome} style={{fontSize: '2.25rem'}}/>
                                    <p>FontAwesome</p>
                                </Col>
                                <Col>
                                    <FontAwesomeIcon icon={faClone} style={{fontSize: '2.25rem'}}/>
                                    <p>Material UI</p>
                                </Col>
                            </Row>
                        </Container>
                    </Col>
                    <Col>
                        <Container className="justify-content-center align-items-center"  >
                            <h1 className='mb-4'>Design</h1>
                            <Row xs={2} md={3} lg={5}  >
                                <Col>
                                    <FontAwesomeIcon icon={faFigma} style={{fontSize: '2.25rem'}}/>
                                    <p>Figma</p>
                                </Col>
                                <Col>c
                                    <FontAwesomeIcon icon={faObjectGroup} style={{fontSize: '2.25rem'}}/>
                                    <p>Adobe XD</p>
                                </Col>
                                <Col>
                                    <FontAwesomeIcon icon={faImage} style={{fontSize: '2.25rem'}}/>
                                    <p>Photoshop</p>
                                </Col>
                                <Col>
                                    <FontAwesomeIcon icon={faImages} style={{fontSize: '2.25rem'}}/>
                                    <p>Lightroom</p>
                                </Col>
                                <Col>
                                    <FontAwesomeIcon icon={faPencilRuler} style={{fontSize: '2.25rem'}}/>
                                    <p>Illustrator</p>
                                </Col>
                            </Row>
                        </Container>
                    </Col>
               </Row> 
            </Container>    
        </div>
        )
    }
}

export default Skills;