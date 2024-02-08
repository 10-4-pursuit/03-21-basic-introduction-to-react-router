function About ()
{
    return (
        <div>
            <h1>About Page</h1>
            <ol>
            <li>Routes: Think of routes as paths or directions to specific rooms (components) in your house (React application). Each route is associated with a particular URL path.</li>
            <li>Router: The Router is like the main entrance of your house. It listens to the URL changes and decides which room (component) to render based on the current URL path.</li>
            <li>Links: Links are like signposts or doorways in your house that allow you to move from one room (component) to another. They generate clickable links that, when clicked, change the URL and render the corresponding component.</li>
            <li>Switch: The Switch component helps you render only one route at a time. It ensures that only the first matching route is rendered and prevents multiple routes from being rendered simultaneously.

</li>
            <li>React Router essentially helps you create a navigation system within your React application, making it easy to switch between different views/components based on the URL.</li>
            </ol>

        </div>
    );
}

export default About