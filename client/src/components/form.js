import React from 'react'
import Input from './input'
import cancelicon from '../images/cancelicon.png'

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
    if (this.props.app) {
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
      // if this is an edit form, change the view back
      this.props.toggleForm()
    } else {
      this.props.handleSubmit(event, {
        status: this.state.status,
        dateSubmitted: this.state.dateSubmitted,
        jobTitle: this.state.jobTitle,
        company: this.state.company,
        location: this.state.location,
        link: this.state.link,
      })
      // if this is an add form, change the view back
      this.props.toggleAdd()
    }
    // This clears the form after submitting
    this.setState({
      status: '',
      dateSubmitted: '',
      jobTitle: '',
      company: '',
      location: '',
      link: ''
    })
  }
  render(props){
    // Used to check app._id when clicking on Edit button
    // console.log(this.props.app._id)
    const { showAdd, toggleAdd } = this.props
    console.log(toggleAdd);
    return(
      <div className={showAdd ? "form-container form-open" : "form-container form-close"}>
        <div className="form-cancel-div">
          <img
            className="cancel-icon"
            onClick={() => this.props.toggleAdd()}
            src={cancelicon}
            alt="cancel icon"
          />
        </div>
        <form
          className="application-form"
          onSubmit={this.handleSubmit}
        >
          <select
            className="form-select"
            onChange={this.handleChange}
            value={this.state.status}
            name={'status'}
            id={'status'}
            required
          >
            <option className="form-input">
              --
            </option>
            <option className="form-input" value="Applied">
              Applied
            </option>
            <option className="form-input" value="Interview scheduled">
              Interview scheduled
            </option>
            <option className="form-input" value="Offered">
              Offered
            </option>
          </select><br/>
          <Input
            handleChange={this.handleChange}
            name={'dateSubmitted'}
            type={'date'}
            value={this.state.dateSubmitted}
            id={'dateSubmitted'}
            placeholder={'Date Submitted'}
          /><br/>
          { this.props.app
            ?
            <Input
              handleChange={this.handleChange}
              name={'jobTitle'}
              type={'text'}
              value={this.props.app.jobTitle}
              id={'jobTitle'}
              placeholder={'Job Title'}
            />
            :
            <Input
              handleChange={this.handleChange}
              name={'jobTitle'}
              type={'text'}
              value={this.state.jobTitle}
              id={'jobTitle'}
              placeholder={'Job Title'}
            />
          }<br/>
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
          <div className="form-buttons">
            <input
              type={'submit'}
              value={this.props.app ? 'Update' : 'Add'}
            /><br/>
            {this.props.children}
          </div>
        </form>
      </div>
    )
  }
}

export default Form
