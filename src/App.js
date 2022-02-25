import './App.css';
import NavBar from './Components/NavBar';
import AboutMe from './Components/AboutMe';
import Skills from './Components/Skills';
import Projects from './Components/Projects';
import ContactMe from './Components/ContactMe';
import Footer from './Components/Footer';

function App() {
  return (
    <div className="App">
      <NavBar />
      
      <AboutMe />
      
      <Skills />
      
      <Projects />

      <ContactMe />

      <Footer />
      
    </div>
  );
}

export default App;
