import React from 'react'
import Input from './input'

class Form extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      status: '',
      dateSubmitted: '',
      jobTitle: '',
      company: '',
      location: '',
      link: ''
    }
    this.handleChange = this.handleChange.bind(this)
    this.handleSubmit = this.handleSubmit.bind(this)
  }

  componentDidMount(){
    if (this.props.apps) {
      this.setState({
        status: this.props.apps.status,
        dateSubmitted: this.props.apps.dateSubmitted,
        jobTitle: this.props.apps.jobTitle,
        company: this.props.apps.company,
        location: this.props.apps.location,
        link: this.props.apps.link
      })
    }
  }

  handleChange(event){
    this.setState({[event.target.id]: event.target.value})
    // console.log(event.target.id);
    // console.log(event.target.value);
  }

  // explicity show what is being passed in
  // this function will get lifted all the way back to the app component, that will allow the main list to update after this
  handleSubmit(event){
    event.preventDefault()
    this.props.handleSubmit(event, {
      status: this.state.status,
      dateSubmitted: this.state.dateSubmitted,
      jobTitle: this.state.jobTitle,
      company: this.state.company,
      location: this.state.location,
      link: this.state.link,

      // Important! Be sure to grab ID from props so formInputs on handleUpdate function work.
      id: this.props.app._id
    })
    // This clears the form after submitting
    this.setState({
      status: '',
      dateSubmitted: '',
      jobTitle: '',
      company: '',
      location: '',
      link: ''
    })
    // if this is an edit form, change the view back
    if (this.props.app) {
      this.props.toggleForm()
    }
  }

  render(){
    // Used to check app._id when clicking on Edit button
    // console.log(this.props.app._id)
    return(
      <form onSubmit={this.handleSubmit}>
        <Input
          handleChange={this.handleChange}
          name={'status'}
          type={'text'}
          value={this.state.status}
          id={'status'}
          placeholder={'Status'}
        /><br/>
        <Input
          handleChange={this.handleChange}
          name={'dateSubmitted'}
          type={'date'}
          value={this.state.dateSubmitted}
          id={'dateSubmitted'}
          placeholder={'Date Submitted'}
        /><br/>
        <Input
          handleChange={this.handleChange}
          name={'jobTitle'}
          type={'text'}
          value={this.state.jobTitle}
          id={'jobTitle'}
          placeholder={'Job Title'}
        /><br/>
        <Input
          handleChange={this.handleChange}
          name={'company'}
          type={'text'}
          value={this.state.company}
          id={'company'}
          placeholder={'Company'}
        /><br/>
        <Input
          handleChange={this.handleChange}
          name={'location'}
          type={'text'}
          value={this.state.location}
          id={'location'}
          placeholder={'Location'}
        /><br/>
        <Input
          handleChange={this.handleChange}
          name={'link'}
          type={'text'}
          value={this.state.link}
          id={'link'}
          placeholder={'App Link'}
        /><br/>
        <input
          type={'submit'}
          value={this.props.app ? 'Update' : 'Add'}
        /><br/>
        {this.props.children}
      </form>
    )
  }
}

export default Form
