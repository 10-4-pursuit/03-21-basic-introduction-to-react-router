import logo from './logo.svg';
import './App.css';
import { BrowserRouter as Router, Route, Routes, Link } from 'react-router-dom';
import HomeComponent from './homeComponent';
import AboutComponent from './aboutComponent';

  function App() {
    return (
    <Router>
      <>
      <nav>
        <ul>
          <li>
            <Link to="/home">Home</Link>
          </li>
          <li>
            <Link to="/about">About</Link>
          </li>
        </ul>
      </nav>
       <Routes>
       <Route path="/home"  element={<HomeComponent />}></Route>
      <Route path="/about"  element={<AboutComponent />}></Route>
       </Routes>
       
      </>
    </Router>

    
  )
    }


export default App;
