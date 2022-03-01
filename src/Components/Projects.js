import React from 'react';
import './Style/Projects.css';
import Project from './Project';

import 'bootstrap/dist/css/bootstrap.min.css';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';


class Projects extends React.Component {
   
    render() {    
        let {projects} = this.props;
        
        return (
        <div className="Projects d-flex flex-column justify-content-center align-items-center mt-5 pt-5 mb-5 pb-5">
            <Container className="d-flex flex-column justify-content-center align-items-center" fluid>
            <h1 className='p-3'><a id="projects">Projects</a></h1>
                <Row xs={1} md={2} lg={3} className="justify-content-center align-items-center">
                <Col>
                    {projects.map((project) => { 
                        console.log(project);
                       <Project 
                            image={project.image}
                            title={project.title}
                            text={project.text}
                            badges={project.badges}
                            icons={project.icons} 
                            />
                        }
                        )
                    }
                    </Col>
                 </Row>
             </Container>
           </div>
        )
     }
}               

export default Projects;