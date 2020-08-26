import React from 'react'
import axios from 'axios'
import Application from './application'

function Dashboard(props) {
  const { handleDelete, handleUpdate, toggleAdd, apps } = props

  return(
    <div className="application-container">
      {apps.map((app) =>
        <Application
          handleDelete={handleDelete}
          handleUpdate={handleUpdate}
          toggleAdd={toggleAdd}
          key={app._id}
          app={app}
        />
      )}
    </div>
  )
}

export default Dashboard
