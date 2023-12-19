import React from "react";

function About() {
    return (
        <div>
            <h1>About Us</h1>
            <ol>
                <li>User Interaction: The user clicks on a provided link component on the page which is given a 'to' prop to go to another page. "For example, clicking a Link component with to='/about' navigates to the About page."</li>
                <li>URL Update: The React Router updates the URL to reflect the targeted link, which is done without reloading the entire page.</li>
                <li>Router Component Listens: 'BrowserRouter' or simply at times 'Router' component wraps around the main part of the application, watching for changes in the URL.</li>
                <li>Route Matching: React Router iterates over all 'Route' components defined inside 'Router' and compares the current URL with the 'path' prop defined in each 'Route.'</li>
                <li>Component Rendering: Finding the 'Route' with a 'path' prop that matches the URL, React Router renders the component associated with that 'Route'.</li>
                <li>Display Page: Using the 'Route' component with a matching 'path' prop to the URL, displaying the element that the selected page component which responds to the route component that matches to the URL.</li>
                <li>No Page Reload: Reaxct Router makes the process of loading a page more sleamless by handingly navigation internally which does not necessitate a full page reload.</li>
            </ol>
        </div>
    );
}

export default About;