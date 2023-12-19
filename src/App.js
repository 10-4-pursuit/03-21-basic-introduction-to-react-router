import logo from './logo.svg';
import './App.css';
import { BrowserRouter as Router, Route, Routes, Link } from 'react-router-dom';
import About from './components/About';
import Home from './components/Home';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <Router>
          <nav>
            <Link to='/'>Home</Link>
            <br />
            <Link to='/about'>About</Link>
          </nav>

          <Routes> {/* Use Routes to wrap Route components */}
            <Route path='/' element={<Home />} exact />
            <Route path='/about' element={<About />} />
          </Routes>
        </Router>

        {/* Remaining part of your component */}
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
      </header>
    </div>
  );
}

export default App;
