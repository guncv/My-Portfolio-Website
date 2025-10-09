import './App.css'
import Introduction from './components/Introduction';
import NavBar from './components/NavBar';
import { useColors } from './style/color';
import { useMediaQuery } from './context/MediaQueryContext';
import About from './components/About';
import Certificates from './components/Certificates';
import Education from './components/Education';
import Experience from './components/Experience';
import Skill from './components/Skill';
import Contact from './components/Contact';
import Footer from './components/Footer';
import Projects from './components/Projects';

function App() {
  const { isDesktop } = useMediaQuery();
  const Colors = useColors();

  return (
    <div style={{ backgroundColor: Colors.BACKGROUND_PRIMARY }}>

      <NavBar/>

      <div>
        <div style={{ backgroundColor: Colors.BACKGROUND_PRIMARY, width: '100%', height: isDesktop ? '70px' : '60px' }}>

        </div>
        <Introduction />
        <About/>
        <Projects />
        <Experience />
        <Education />
        <Certificates />
        <Skill />
        <Contact />
        <Footer />
      </div>

    </div>
  )
}

export default App
