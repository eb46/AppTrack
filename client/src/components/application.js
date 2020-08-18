import React from 'react'

function Application(props){
  const { app } = props
  return(
    <ul>

      <li>
        <h5>{app.status}</h5>
        <h5>{app.dateSubmitted}</h5>
        <h5>{app.jobTitle}</h5>
        <h5>{app.company}</h5>
        <h5>{app.location}</h5>
        <h5>{app.link}</h5>
      </li>

    </ul>
  )
}

export default Application
