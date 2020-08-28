import React from 'react'
import axios from 'axios'
import Input from './input'

class Edit extends React.Component {
  state = {
    editForm: false
  }

  getApps = () => {
    axios
      .get('/applications')
      .then(response => this.setState({
          apps: response.data
      })
    )
  }

  // Update REST route
  updateApp = (event, formInputs) => {
    event.preventDefault()
    console.log(this.state.updateStatus);
    const id = event.target.getAttribute('id')
    axios
      .put('/applications/' + id, formInputs)
      .then(() => {
        this.getApps()
      }
      ).catch(error => console.log(error))
  }

  editStatus = event => {
    this.setState({
      updateStatus: event.target.value
    })
  }

  editDate = event => {
    console.log(event.target.value);
    this.setState({
      updateDate: event.target.value
    })
  }

  editTitle = event => {
    console.log(this.state.updateTitle);
    this.setState({
      updateTitle: event.target.value
    })
  }

  editCompany = event => {
    this.setState({
      updateCompany: event.target.value
    })
  }

  editLocation = event => {
    this.setState({
      updateLocation: event.target.value
    })
  }

  editLink = event => {
    this.setState({
      updateLink: event.target.value
    })
  }

  toggleEditForm = () => {
    this.setState(
      (prevState) => {
        return {editForm: !prevState.editForm}
    })
  }


  render(){
    const { app } = this.props

    return(
      <div>
          <form
            app={app}
            id={app._id}
            onSubmit={this.updateApp}
          >
            <select
              className="form-select"
              onChange={this.editStatus}
              name='status'
              id='status'
            >
              <option className="form-input">
                --
              </option>
              <option className="form-input">
                Applied
              </option>
              <option className="form-input">
                Interview Scheduled
              </option>
              <option className="form-input">
                Offered
              </option>
            </select>
            ><br/>
            <input
              name='dateSubmitted'
              type='date'
              onChange={this.editDate}
              id='dateSubmitted'
              placeholder='Date Submitted'
            /><br/>
            <input
              name='jobTitle'
              type='text'
              onChange={this.editTitle}
              id='jobTitle'
              placeholder={this.props.app.jobTitle}
            /><br/>
            <input
              name='company'
              type='text'
              onChange={this.editCompany}
              id='company'
              placeholder={this.props.app.company}
            /><br/>
            <input
              name='location'
              type='text'
              onChange={this.editLocation}
              id='location'
              placeholder={this.props.app.location}
            /><br/>
            <input
              name='link'
              type='text'
              onChange={this.editLink}
              id='link'
              placeholder={this.props.app.link}
            /><br/>
            <input
              type='submit'
              value='Edit'
            /><br/>
          </form>
      </div>
    )
  }

}

export default Edit
