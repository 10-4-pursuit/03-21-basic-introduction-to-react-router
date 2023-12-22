import { BrowserRouter as Router, Route, Link, Routes } from "react-router-dom";
import "./App.css";
import React from "react";

function App() {
  return (
    <Router>
      <div>
        <nav>
          <Link to="/">Home</Link> <br />
          <Link to="/about">About</Link>
        </nav>

        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
        </Routes>
      </div>
    </Router>
  );
}

function Home() {

  return (
  <div>
    <h1>Welcome to the HomePage</h1>
    <img src="ethopian_hut.jpeg" alt="ethopian hut" />
  </div>
  )

}

function About() {
  return (
  <div>
  <h1>About</h1>
  <p>
        <ol>
          <li>
            React Router is a library in React that allows us to do things like
            add navigation to our app file.
          </li>
          <li>
            Within our Router we can have Routes. They basically are the
            path/route to a specific URL. So someone can click on the link and
            the path will direct them to the page that corresponds.
          </li>
          <li>
            We can house Router and Routes in our Browser Router. This allows us
            to navigate to pages through the link without having the page
            refresh each time.
          </li>
          <li>
            As an example, in this app we have a navigation link to Home Page
            and About Page in our Browser Router. The navigation link sits in
            our Browser Router and links to the page /about as it corresponds to
            the component about and the page displays the about component that
            sits in the routes and more specifically the path in the route tells
            that what page to display on.
          </li>
        </ol>
      </p>
</div>
  )
}

export default App;
