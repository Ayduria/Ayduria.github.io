import logo from './logo.svg';
import './App.css';
import About from "./components/About"
import Navbar from "./components/Navbar"
import Contact from "./components/Contact"
import Skills from "./components/Skills"
import Projects from "./components/Projects"

import { Link, animateScroll as scroll } from "react-scroll"

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
