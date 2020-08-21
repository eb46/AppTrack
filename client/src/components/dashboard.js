import React from 'react'
import axios from 'axios'
import Application from './application'

function Dashboard(props) {
  const { handleDelete, handleUpdate, apps } = props

  return(
    <div className="application-container">
      {apps.map((app) =>
        <Application
          handleDelete={handleDelete}
          handleUpdate={handleUpdate}
          key={app._id}
          app={app}
        />
      )}
    </div>
  )
}

export default Dashboard
