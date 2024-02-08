import {BrowserRouter as Router, Route, Routes, Link } from 'react-router-dom';
import './App.css';
import Home from './Home';
import About from './About';

function App() {
  return (
    <div className="App">
      <Router>
       <nav>
         <ul>
           <li>
             <Link to="/">Home</Link>
           </li>
           <li>
             <Link to="/about">About</Link>
           </li>
         </ul>
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
