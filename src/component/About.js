import  React from 'react'
import './About.css'

const About = () => {

    return (
        <div>
            <h1>About</h1>
            <img src='/imgs/About.png' alt="About" />
            <ol>
                <li>User Interaction:  The user clicks on the About button in the navigation bar at the top of the page. This is done using a component called Link provided by React Router. </li>
               
                <li>URL Update: React Router updates the browser url to reflect the new page.</li>
                
                <li>Route Matching: React Router matches the url path to the appropriate component.</li>

                <li>Component Rendering: Once React Router matches the url path to the About component, the About component is rendered in the browser.</li>

                <li>Displaying the Component: The About component is displayed in the browser when the user clicks on the About button in the navigation bar, usually replacing the previous component which was the Home component.</li>

                <li>No Page Reload: All the components are rendered in the browser without any page reload thanks to React Router. It uses the browser history to keep track of the url path.</li>

                <li>State Preservation: Since there is no page reload, the application state is preserved. This makes for a smooth user experience between different pages.</li>

                <li>In Summary: React Router enables the user to navigate between different pages in the application. It listens to the url path and renders the appropriate component. This approach makes it easy for the user to navigate between different pages and allows for the creation of a smooth user experience of single page applications.</li>
            </ol>
                
        </div>
    )
}

export default About