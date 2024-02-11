import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
import './App.css';
import About from './About';
import Home from './Home';

function App() {
  return (
    <Router>
      <div className="App">
      <nav>
          <Link to='/'>Home</Link>
          <Link to='/about'>About</Link>
        </nav>

        <Routes>
          <Route path='/' element={<Home />} exact />
          <Route path='/about' element={<About />} />
        </Routes>
      </div>
    </Router>
  );
}
export default App;
