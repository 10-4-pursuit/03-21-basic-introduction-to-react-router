import './App.css';
import React from 'react'
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';

function App() {
  function Home() {
    return (
    <React.Fragment>
      <h1>Welcome to the Home Page</h1>
      <img src="https://9clouds.com/wp-content/uploads/2023/02/istockphoto-1371547852-612x612-1.jpg"/>
    </React.Fragment>
    )
  }

  function About() {
    return (
      <ul>
        <li>Router lets us show multiple pages without the main page relaoding</li>
        <li>Link creates a hyperlink and the "to" attribute lets us set specific URL endpoints for each page</li>
        <li>With Route, we set what the page will display when the link is clicked or when that specific endpoint is entered.</li>
        <li>The path attribute in Route is where we declare which endpoint/link we want to show info.</li>
        <li>The component/element attribute in Route is where we input what we want shown.</li>
      </ul>
    )
  }

  return (
    <Router>
      <div>
        <nav>
          <Link to='/'>Home</Link>
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

export default App;
