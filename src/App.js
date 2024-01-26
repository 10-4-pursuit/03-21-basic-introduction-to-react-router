import React from 'react';
import './App.css';
import {BrowserRouter as Router, Route, Routes, Link} from 'react-router-dom'
import Home from './Components.js/home.js';
import aboutPage from './Components.js/about';

function App() {
  return (
    <div className="App">
     <Router>
          <div>
            <nav>
              <ul>
                <li>
                  <Link to='/home'>Home</Link>
                </li>
                <li>
                  <Link to='/about'>About</Link>
                </li>
              </ul>
            </nav>
            <Routes>
            <Route path='/about' Component={aboutPage} />
            <Route path='/home' Component={Home} />
            </Routes>
          </div>
        </Router>
      </div>
   
  );
}

export default App;
