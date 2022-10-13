import './index.css';
import About from "./About"
import Navbar from "./Navbar"
import Contact from "./Contact"
import Skills from "./Skills"
import Projects from "./Projects"

function App() {
  return (
    <div className="App">
     {/* 
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>*/}
     
      <main className="text-gray-400 bg-gray-900 body-font">
        <Navbar />
        <About />
        <Projects />
        <Skills />
        <Contact />

        <footer className="text-gray-400 bg-gray-800 py-5">
          © Ann-Laurie Lapointe, 2021
        </footer>
      </main> 
    </div>
  );
}

export default App;
