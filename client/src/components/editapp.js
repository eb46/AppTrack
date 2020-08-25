
import React from 'react'
import axios from 'axios'
import Input from './input'

class Edit extends React.Component {
  state = {
    editForm: false
  }

  // Update REST route
  updateApp = (event, formInputs) => {
    event.preventDefault()
    const id = event.target.getAttribute('id')
    axios
      .put('/applications/' + id, formInputs)
      .then(
          response => {
            this.setState({
              apps: response.data
            })
          }
      )
  }

  editStatus = event => {
    this.setState({
      updateStatus: event.target.value
    })
  }

  editDate = event => {
    this.setState({
      updateDate: event.target.value
    })
  }

  editTitle = event => {
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
        <button onClick={this.toggleEditForm}>
          Edit
        </button>
        { this.state.editForm
          ?
          <form id={app._id} onSubmit={this.updateApp}>
            <Input
              name={'status'}
              type={'text'}
              value={this.state.updateStatus}
              id={'status'}
              placeholder={'Status'}
            /><br/>
            <Input
              name={'dateSubmitted'}
              type={'text'}
              value={this.state.updateDate}
              id={'dateSubmitted'}
              placeholder={'Date Submitted'}
            /><br/>
            <Input
              name={'jobTitle'}
              type={'text'}
              value={this.state.updateTitle}
              id={'jobTitle'}
              placeholder={'Job Title'}
            /><br/>
            <Input
              name={'company'}
              type={'text'}
              value={this.state.updateCompany}
              id={'company'}
              placeholder={'Company'}
            /><br/>
            <Input
              name={'location'}
              type={'text'}
              value={this.state.updateLocation}
              id={'location'}
              placeholder={'Location'}
            /><br/>
            <Input
              name={'link'}
              type={'text'}
              value={this.state.updateLink}
              id={'link'}
              placeholder={'Link'}
            /><br/>
            <Input
              type={'submit'}
              value={'Edit'}
            /><br/>
          </form>
          :
          null
        }
      </div>
    )
  }

}

export default Edit
