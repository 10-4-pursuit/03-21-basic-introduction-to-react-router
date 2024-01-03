import React from 'react'

function AboutComponent() {
  return (
    <>
    <h2>How React Router works:</h2>
    <ol>
      <li>When you click on the About Page, React Router looks at the URL address About is pointing to.</li>
      <li>React Router checks its Routes *set of instructions* to see if there is a match for the About URL address.</li>
      <li>If React Router finds a match, it follows the instructions associated with that match. </li>
      <li>React Router updates the address bar in your browser to reflect the new URL. </li>
    </ol>
    </>
  )
}

export default AboutComponent