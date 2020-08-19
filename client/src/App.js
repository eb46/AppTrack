import React from 'react'
import axios from 'axios'
import Dashboard from './components/dashboard'

class App extends React.Component {
  state = {
    apps: [],
    showAdd: false
  }

  getApps = () => {
    axios
      .get('/applications')
      .then(response => this.setState({
          apps: response.data
      })
    )
  }

  componentDidMount(){
    this.getApps()
    console.log('component mount working');
  }

  handleAdd = (event, formInputs) => {
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

  toggleAdd = () => {
    this.setState((prevState) => {
      return {showAdd: !prevState.showAdd}
    })
  }

  render() {
    return (
      <div>
        <Dashboard
          getApps={this.getApps}
          apps={this.state.apps}
          handleSubmit={this.handleAdd}
          handleDelete={this.handleDelete}
          toggleAdd={this.toggleAdd}
          showAdd={this.state.showAdd}
        />
      </div>
    )
  }
}

export default App;
