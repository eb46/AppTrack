import React from 'react'
import axios from 'axios'
import Application from './application'
import Form from './form'

function Dashboard(props) {
  const { getApps, handleSubmit, handleDelete, handleUpdate, toggleAdd, showAdd, apps } = props

  return(
    <div>

      <button onClick={toggleAdd}>
        Add App
      </button>

      {
        showAdd
        ?
        <Form
          handleSubmit={handleSubmit}
        />
        :
        null
      }

      <div>
        {apps.map((app) =>
          <Application
            handleDelete={handleDelete}
            handleUpdate={handleUpdate}
            key={app._id}
            app={app}
          />
        )}
      </div>
    </div>
  )
}

export default Dashboard
