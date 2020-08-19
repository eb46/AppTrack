import React from 'react'

function Application(props){
  const { app } = props
  return(
    <div className="application-container">
        <h5>{app.status}</h5>
        <h5>{app.dateSubmitted}</h5>
        <h5>{app.jobTitle}</h5>
        <h5>{app.company}</h5>
        <h5>{app.location}</h5>
        <h5>{app.link}</h5>
    </div>
  )
}

export default Application
