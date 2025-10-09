import './App.css'
import Introduction from './components/Introduction';
import NavBar from './components/NavBar';
import { useColors } from './style/color';
import { useMediaQuery } from './context/MediaQueryContext';
import About from './components/About';
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

      <div style={{ paddingTop: isDesktop ? '70px' : '65px', backgroundColor: Colors.TEXT_PRIMARY }}>
        <Introduction />
        <About/>
        <Projects />
        <Experience />
        <Skill />
        <Contact />
        <Footer />
      </div>

    </div>
  )
}

export default App
