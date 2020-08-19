import React from 'react'
import axios from 'axios'
import Application from './application'
import Form from './form'

function Dashboard(props) {
  const { getApps, handleSubmit, handleDelete, toggleAdd, showAdd, apps } = props

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
        {apps.map((app, index) =>
          <Application
            handleDelete={handleDelete}
            key={index}
            app={app}
          />
        )}
      </div>
    </div>
  )
}

export default Dashboard
