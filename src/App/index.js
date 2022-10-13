import './index.css';
import About from "./About"
import Navbar from "./Navbar"
import Contact from "./Contact"
import Skills from "./Skills"
import Projects from "./Projects"
import Copyright from "./Copyright"

function App() {
  return (
    <div className="App text-gray-400 bg-gray-900 body-font">
      <Navbar />
        <main>
          <About />
          <Projects />
          <Skills />
          <Contact />
        </main> 
        <Copyright />
    </div>
  );
}

export default App;
