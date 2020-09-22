import React from 'react'
import AddButton from './addButton'
import appicon from '../images/appicon.png'
import Login from './login'

function Nav(props){
  const { toggleAdd, handleLogin } = props
  return(
    <>
      <div className="nav-container">
      <AddButton
          toggleAdd={toggleAdd}
        />
        <img
          className="logo"
          src={appicon}
          alt="App icon"
        />
        <Login handleLogin={handleLogin} />
      </div>
    </>
  )
}

export default Nav
