import React from 'react'
import axios from 'axios'
import Application from './application'

function Form(props) {
  const { getApps, apps } = props

  return(
    <div>
      <button onClick={getApps}>
        Get Data
      </button>

      <div>
        {apps.map((app, index) =>
          <Application
            key={index}
            app={app}
          />
        )}
      </div>
    </div>
  )
}

export default Form
