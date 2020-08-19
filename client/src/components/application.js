import React from 'react'

function Application(props){
  const { app, handleDelete } = props
  return(
    <div className="application-container">
      <div className="application-data">
        <h5>{app.status}</h5>
        <h5>{app.dateSubmitted}</h5>
        <h5>{app.jobTitle}</h5>
        <h5>{app.company}</h5>
        <h5>{app.location}</h5>
        <h5>{app.link}</h5>
      </div>
      <div className="application-buttons">
        <button
          onClick={() => handleDelete(app)
        }>
          Delete
        </button>
        <button>
          Edit
        </button>
      </div>
    </div>
  )
}

export default Application
