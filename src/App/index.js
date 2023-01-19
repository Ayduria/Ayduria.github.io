import './index.css';
import { useState } from "react"
import About from "./About"
import About_EN from "./About/About_EN"
import Landing from "./Landing"
import Landing_EN from "./Landing/Landing_EN"
import Navbar from "./Navbar"
import Navbar_EN from "./Navbar/Navbar_EN"
import Contact from "./Contact"
import Contact_EN from "./Contact/Contact_EN"
import Skills from "./Skills"
import Skills_EN from "./Skills/Skills_EN"
import Projects from "./Projects"
import Projects_EN from "./Projects/Projects_EN"
import Copyright from "./Copyright"
import Copyright_EN from "./Copyright/Copyright_EN"

function toggleFrench() {
  App.toggleFrench();
}

function App() {
  const [frenchToggled, setFrench] = useState(false);

  const toggleFrench = () =>{
      setFrench(!frenchToggled)
  }

  return (
    <div className="App text-gray-400 bg-gray-900 body-font">
      { !frenchToggled ? <Navbar toggleLanguage={toggleFrench} /> : <Navbar_EN toggleLanguage={toggleFrench}/> }
        <main>
        { !frenchToggled ? <Landing /> : <Landing_EN /> }
        { !frenchToggled ? <About /> : <About_EN /> }
        { !frenchToggled ? <Projects /> : <Projects_EN /> }
        { !frenchToggled ? <Skills /> : <Skills_EN /> }
        { !frenchToggled ? <Contact /> : <Contact_EN /> }
        </main> 
        { !frenchToggled ? <Copyright /> : <Copyright_EN /> }
    </div>
  );
}

export { toggleFrench };
export default App;
