import React from 'react'
import axios from 'axios'
import Dashboard from './components/dashboard'

class App extends React.Component {
  state = {
    apps: []
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

  render() {
    return (
      <div>
        <Dashboard
          getApps={this.getApps}
          apps={this.state.apps}
        />
      </div>
    )
  }
}

export default App;
