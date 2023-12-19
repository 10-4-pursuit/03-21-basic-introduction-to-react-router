import React from 'react';
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
import Home from './component/Home';
import About from './component/About';
import './App.css';
import './component/Nav.css'

function App() {
  return (
    <div className="App">
      <Router>
        <nav>
          <Link className="link" to="/">Home</Link>
          <Link  className="link" to="/about">About</Link>
        </nav>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;

