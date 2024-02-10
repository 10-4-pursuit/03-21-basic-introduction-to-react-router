import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom'; 
import cozyhome from './cozyhome.webp'
import './App.css';

function App() {
  return (
      <Router>
        <div>
          <nav>
            <Link to='/'>Home</Link><br />
            <Link to='/about'>About</Link>
          </nav>
          <Routes>
           <Route path='/' element={<Home />} />
           <Route path='/about' element={<About />} />
          </Routes>
        </div>
      </Router>  
  );
}
function Home() {
  return (
    <>
      <h1>Welcome to the Home Page</h1>
      <img src={cozyhome} alt="Cozy Welcoming Home" />
    </>
  );
}
function About() {
  return (
    <>
      <h1>Welcome to the About Page</h1>
      <ol>
        <li>The About link is clicked and React Router prevents the default action (full page reload)</li>
        <li>The URL changes to match the destination ('/about') route path</li>
        <li>React Router renders the component that corresponds to the route (the element prop tells the component to render)</li>
        <li>React Router replaces the displayed component with the About component</li>
      </ol>
    </>
  );
}

export default App;
