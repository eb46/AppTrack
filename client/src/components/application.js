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
    const { app, handleDelete, handleUpdate } = this.props
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
          <button onClick={this.toggleForm}>
            Edit
          </button>

          { this.state.formVisible
            ?
            <Form
              app={app}
              handleSubmit={handleUpdate}
              toggleForm={this.toggleForm}
            >
              <button onClick={this.toggleForm}>
                Cancel
              </button>
            </Form>
            :
            null
          }
        </div>
      </div>
    )
  }
}

export default Application
