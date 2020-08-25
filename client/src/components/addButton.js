import React from 'react'

function AddButton(props){
  const { toggleAdd } = props
  return(
    <button
      className="add-app-button"
      onClick={() => props.toggleAdd()}
    >
      Add App
    </button>
  )
}

export default AddButton
