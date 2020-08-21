import React from 'react'
import axios from 'axios'
import Dashboard from './components/dashboard'
import Form from './components/form'
import AddButton from './components/addButton'

class App extends React.Component {
  state = {
    apps: [],
    showAdd: false
  }

  // READ Rest route. Reads the existing data from the db
  getApps = () => {
    axios
      .get('/applications')
      .then(response => this.setState({
          apps: response.data
      })
    )
  }

  // React function that runs upon pageload
  componentDidMount(){
    this.getApps()
    console.log('component mount working');
  }

  // ADD REST route. Takes the response as the formInputs and takes a copy of the existing data and adds the new data from the formInputs
  handleAdd = (event, formInputs) => {
    console.log(formInputs);
    axios
      .post('/applications/add', formInputs)
      .then(jsonApps => {
        this.setState({
          apps: [jsonApps.data, ...this.state.apps]
        })
        this.getApps()
        // console.log(this.state.apps);
        console.log(jsonApps.data);
      }
    )
  }

  // DELETE REST route. Looks for the _id in db and returns all the apps except for the deletedApp
  handleDelete = (deletedApp) => {
    console.log('deleting');
    console.log(deletedApp._id);
    axios
      .delete('/applications/' + deletedApp._id)
      .then(() => {
        this.setState((state) => {
          const apps = state.apps.filter((app, index) => {
            return app._id !== deletedApp._id
          })
          return { apps }
        })
      })
      .catch(error => console.log(error))
      this.getApps()
  }

  // UPDATE REST route.
  handleUpdate = (event, formInputs) => {
    console.log('update route working')
    event.preventDefault()
    axios
      .put('/applications/' + formInputs.id, formInputs)
      .then(() => {
        this.getApps()
      })
  }

  // Sets the state used to reveal form to add app entries
  toggleAdd = () => {
    this.setState((prevState) => {
      return {showAdd: !prevState.showAdd}
    })
  }

  render() {
    return (
      <div className="main-container">
        <AddButton
          toggleAdd={this.toggleAdd}
        />

        {
          this.state.showAdd
          ?
          <Form
            handleSubmit={this.handleAdd}
            toggleAdd={this.toggleAdd}
          />
          :
          null
        }

        <Dashboard
          getApps={this.getApps}
          apps={this.state.apps}
          handleSubmit={this.handleAdd}
          handleDelete={this.handleDelete}
          handleUpdate={this.handleUpdate}
          toggleAdd={this.toggleAdd}
          showAdd={this.state.showAdd}
        />
      </div>
    )
  }
}

export default App;
