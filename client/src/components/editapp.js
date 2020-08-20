
import React from 'react'
import axios from 'axios'
import Input from './input'

class Edit extends React.Component {
  state = {
    editForm: false
  }

  // Update REST route
  updateApp = event => {
    const id = event.target.getAttribute('id')
    axios
      .put('/applications/' + id,
        {
          status: this.state.updateStatus,
          dateSubmitted: this.state.updateDate,
          jobTitle: this.state.updateTitle,
          company: this.state.updateCompany,
          location: this.state.updateLocation,
          link: this.state.updateLink
        }
      ).then(
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
    const { apps } = this.props
    return(
      <div>
        <button onClick={this.toggleEditForm}>
          Edit
        </button>
        { this.state.editForm
          ?
          <form id={apps._id} onSubmit={this.updateApp}>
            <Input
              name={'status'}
              type={'text'}
              value={this.state.updateStatus}
              id={'status'}
              placeholder={'Status'}
            /><br/>
            <Input
              name={'status'}
              type={'text'}
              value={this.state.updateStatus}
              id={'status'}
              placeholder={'Status'}
            /><br/>
            <Input
              name={'status'}
              type={'text'}
              value={this.state.updateStatus}
              id={'status'}
              placeholder={'Status'}
            /><br/>
          </form>
        }
      </div>
    )
  }

}

export default Edit
