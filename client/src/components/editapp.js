import React from 'react'
import axios from 'axios'
import Input from './input'

class Edit extends React.Component {
  state = {
    editForm: false,
    status: '',
    dateSubmitted: '',
    jobTitle: '',
    company: '',
    location: '',
    link: ''
  }

  // Update REST route
  updateApp = (event, formInputs) => {
    const id = event.target.getAttribute('id')
    axios
      .put('/applications/' + id, {
        status: this.state.status,
        dateSubmitted: this.state.dateSubmitted,
        jobTitle: this.state.jobTitle,
        company: this.state.company,
        location: this.state.location,
        link: this.state.link
      })
      .then(() => {

      }
      ).catch(error => console.log(error))
  }

  editStatus = event => {
    this.setState({
      status: event.target.value
    })
  }

  editDate = event => {
    console.log(event.target.value);
    this.setState({
      dateSubmitted: event.target.value
    })
  }

  editTitle = event => {
    this.setState({
      jobTitle: event.target.value
    })
  }

  editCompany = event => {
    this.setState({
      company: event.target.value
    })
  }

  editLocation = event => {
    this.setState({
      location: event.target.value
    })
  }

  editLink = event => {
    this.setState({
      link: event.target.value
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
                Code Assessment
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
