import React from "react";
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';



const About = () => {
    return (
        <div>
            <h1>About Us</h1>
            <ul>
                <li>"Router" to holds the pages we want to navigate to.</li>
                <li>"Link" tells the us where to go.</li>
                <li>"Route" shows the correct page when a link is clicked.</li>
                <li>The URL matches a route when it matches the path specified in the "Route" component. When a URL matches a route, the corresponding component is rendered, allowing you to display different components based on the URL.</li>
            </ul>
        </div>
    );
}


export default About;