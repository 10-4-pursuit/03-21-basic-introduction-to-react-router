import React from 'react';

function aboutPage() {
  return (
    <div>
      <h2>How to navigate to the about page</h2>
      <ol>
        <li>
        First, you need to install React Router in your project. You can use npm or yarn for this purpose.
        </li>
        <li>
        In your application, you need to wrap your components with a BrowserRouter. his component provides the routing context for your application.
        </li>
        <li>
        Route Paths: The path prop in Route components specifies the URL path that should trigger the rendering of the associated component.
         Exact Matching: The exact prop is used to ensure that a route is matched only if the path is an exact match.</li>
         <li>
         To navigate between different routes, you use the Link component from react-router-dom. It creates clickable links that change the URL without causing a full page reload. You can use route parameters to capture dynamic parts of the URL. For example:jsx
         </li>
      </ol>
    </div>
  );
}

export default aboutPage;