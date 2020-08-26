import React from 'react'
import Edit from './editapp'
import Form from './form'

class Application extends React.Component {
  state = {
    formVisible: false
  }

  toggleForm = () => {
    this.setState((prevState) => {
      return {formVisible: !prevState.formVisible}
    })
  }

  render(){
    const { app, handleDelete, handleUpdate, toggleAdd } = this.props
    return(
      <>
        <div className="application-card">
          <div className="application-card-buttons">
            <button
              className="application-card-delete"
              onClick={() => handleDelete(app)
            }>
              Delete
            </button>
            <button
              className="application-card-edit"
              onClick={() => toggleAdd(app)}
            >
              Edit Status
            </button>

          </div>
          <div className="application-data">
            <h5
              className="application-data-fields application-status"
            >
              {app.status}
            </h5>
            <h5
              className="application-data-fields application-company"
            >
              {app.company}
            </h5>
            <h5
              className="application-data-fields application-jobtitle"
            >
              {app.jobTitle}
            </h5>
          </div>
        </div>
      </>
    )
  }
}

export default Application


// <h5 className="application-data-fields">{app.status}</h5>
// <h5 className="application-data-fields">{app.dateSubmitted}</h5>
// <h5 className="application-data-fields">{app.jobTitle}</h5>
// <h5 className="application-data-fields">{app.company}</h5>
// <h5 className="application-data-fields">{app.location}</h5>
// <h5 className="application-data-fields">{app.link}</h5>
