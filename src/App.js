import logo from './logo.svg';
import './App.css';
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import About from './About'
import Home from './Home';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <Router>
          <div>
            <nav>
              <Link to='/Home'>Home</Link>
              <br/>
              <Link to='/About'>About</Link>
            </nav>
            <Routes>
            <Route path='/about' Component={About} />
            <Route path='/home' Component={Home} />
            </Routes>
          </div>
        </Router>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
    </div>
  );
}

export default App;
