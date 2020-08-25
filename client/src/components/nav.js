import React from 'react'
import AddButton from './addButton'
import appicon from '../images/appicon.png'

function Nav(props){
  const { toggleAdd } = props
  return(
    <>
      <div className="nav-container">
        <img
          className="logo"
          src={appicon}
          alt="App icon"
        />
        <AddButton
          toggleAdd={toggleAdd}
        />
      </div>
    </>
  )
}

export default Nav
