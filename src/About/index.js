function About() {
    return ( 
      <div>
        <h1>How routing works in React Router</h1>
          <ol>
            <li>
              <h4>User clicks on a link:</h4>
                <ul>
                  <li>Let's say there's a link or button labeled 'About' on the webpage.</li>
                  <li>When the user clicks it, React Router starts to handle the navigation.</li>
                </ul>
            </li>
            <li>
              <h4>URL updates:</h4>
                <ul>
                  <li>The link is associated with a specific URL, like "/about".</li>
                  <li>React Router updates the browser's URL to match this path ("/about") without causing a full page reload.</li>
                </ul>
            </li>
            <li>
              <h4>Route matching:</h4>
                <ul>
                  <lI>React Router checks its route configurations to find a match for the updated URL.</lI>
                  <li>It identifies that the current URL ("/about") corresponds to the 'About' route.</li>
                </ul>
            </li>
            <li>
              <h4>Component rendering:</h4>
                <ul>
                  <li>Once the route is matched, React Router renders the associated component – in this case, the 'About' component.</li>
                  <li>The 'About' component contains the content specific to the 'About' page.</li>
                </ul>
            </li>
            <li>
              <h4>Page update without full reload:</h4>
                <ul>
                  <li>Importantly, React Router updates only the necessary parts of the page (in this case, the content of the 'About' component) without refreshing the entire webpage.</li>
                </ul>
            </li>
          </ol>
          <br/>
          <h4>In summary, when a user clicks on the 'About' link, React Router dynamically updates the URL, matches it to the 'About' route, and renders the corresponding 'About' component to display the relevant content on the webpage.</h4>
      </div>
     )
  }
  export default About;