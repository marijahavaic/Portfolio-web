import React from 'react';
import './App.css';

import NavBar from './Components/NavBar';
import AboutMe from './Components/AboutMe';
import Skills from './Components/Skills';
import Projects from './Components/Projects';
import ContactMe from './Components/ContactMe';
import Footer from './Components/Footer';

import google from './Components/Photos/google.png';
import fb from './Components/Photos/fb.jpg';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faGitAlt, faYoutube } from '@fortawesome/free-brands-svg-icons';
import { faGlobe, faArrowUp } from '@fortawesome/free-solid-svg-icons'

import 'bootstrap/dist/css/bootstrap.min.css';
import Button from 'react-bootstrap/Button';
import Container from 'react-bootstrap/esm/Container';
import Form from 'react-bootstrap/Form'

class App extends React.Component  {
  static defaultProps = {
    projects: [
      {key: 1, image: google, title: 'Google', text: `Some quick example text to build on the card title and make up the bulk of the card's content.`, badges: ['HTML5', 'CSS3', 'Javascript', 'React', 'Bootstrap', 'FontAwesome'], icons: [{name: faGitAlt, src: 'github.com'}, {name: faYoutube, src: 'github'},{name: faGlobe, src: 'github'}]}, {key: 2, image: fb, title: 'Fb', text: `Some quick example text to build on the card title and make up the bulk of the card's content.`, badges: ['HTML5', 'CSS3', 'Javascript', 'React', 'Bootstrap', 'FontAwesome'], icons: [{name: faGitAlt, src: 'github.com'}, {name: faYoutube, src: 'github'},{name: faGlobe, src: 'github'}], key: 3, image: google, title: 'Google', text: `Some quick example text to build on the card title and make up the bulk of the card's content.`, badges: ['HTML5', 'CSS3', 'Javascript', 'React', 'Bootstrap', 'FontAwesome'], icons: [{name: faGitAlt, src: 'github.com'}, {name: faYoutube, src: 'github'},{name: faGlobe, src: 'github'}]}, {key: 4, image: fb, title: 'FB', text: `Some quick example text to build on the card title and make up the bulk of the card's content.`, badges: ['HTML5', 'CSS3', 'Javascript', 'React', 'Bootstrap', 'FontAwesome'], icons: [{name: faGitAlt, src: 'github.com'}, {name: faYoutube, src: 'github'},{name: faGlobe, src: 'github'}]}
  ]
  }

//   constructor(props) {
//     super(props);
//     this.handleClick = this.handleClick.bind(this);
// }

//   handleClick(e) {

//   }

  render() {
    return (
      <div className="App">
        <NavBar />
        <Container className='h-100 d-flex justify-content-end'>
          <Form className='position-absolute top-0 end-0 mt-1'>
              <Form.Check 
                  type="switch"
                  id="custom-switch"
              />
          </Form>
        </Container>
        
        <AboutMe />

        <Container className='h-100 d-flex justify-content-end pe-5'>
        <a href="#home"><Button variant="light" className='position-fixed bottom-0 mb-3' onClick={'#home'}>
            <FontAwesomeIcon icon={faArrowUp} style={{fontSize: '1rem'}} />
          </Button></a>
        </Container>
        
        <Skills />
        
        <Projects projects={this.props.projects} />

        <ContactMe />

        <Footer />

        

        {/* <div className='position-fixed end-2 right-2'>
        <a href="#home"><FontAwesomeIcon icon={faArrowUp} style={{fontSize: '1rem'}} /></a>
        </div> */}
      </div>
    );
  }
}

export default App;
