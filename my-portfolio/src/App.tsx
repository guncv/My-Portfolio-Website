import './App.css'
import Introduction from './components/Introduction';
import NavBar from './components/NavBar';
import Colors from './style/color';
import { useMediaQuery } from './layout/MediaQueryContext';
import About from './components/About';
function App() {
  const { isMobile } = useMediaQuery();

  return (
    <div style={{ backgroundColor: Colors.BACKGROUND_PRIMARY }}>

      <NavBar/>
      <div style={{ paddingTop: isMobile ? '65px' : '70px', backgroundColor: Colors.TEXT_PRIMARY }}>
        <Introduction />
        <About />
      </div>

    </div>
  )
}

export default App
