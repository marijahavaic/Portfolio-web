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
import { faGitAlt, faYoutube } from '@fortawesome/free-brands-svg-icons';
import { faGlobe } from '@fortawesome/free-solid-svg-icons'



class App extends React.Component  {
  static defaultProps = {
    projects: [
      {key: 1, image: google, title: 'Google', text: `Some quick example text to build on the card title and make up the bulk of the card's content.`, badges: ['HTML5', 'CSS3', 'Javascript', 'React', 'Bootstrap', 'FontAwesome'], icons: [{name: faGitAlt, src: 'github.com'}, {name: faYoutube, src: 'github'},{name: faGlobe, src: 'github'}]}, {key: 2, image: fb, title: 'FB', text: `Some quick example text to build on the card title and make up the bulk of the card's content.`, badges: ['HTML5', 'CSS3', 'Javascript', 'React', 'Bootstrap', 'FontAwesome'], icons: [{name: faGitAlt, src: 'github.com'}, {name: faYoutube, src: 'github'},{name: faGlobe, src: 'github'}]}
  ]
  }

  render() {
    return (
      <div className="App">
        <NavBar />
        
        <AboutMe />
        
        <Skills />
        
        <Projects projects={this.props.projects} />

        <ContactMe />

        <Footer />
        
      </div>
    );
  }
}

export default App;
