import React from 'react'

function Input(props){
  const { id, name, type, value, handleChange, placeholder } = props

  return(
    <label htmlFor={name}>
      <input
        className="form-input"
        id={name}
        name={name}
        type={type}
        value={value}
        onChange={handleChange}
        placeholder={placeholder}
      />
    </label>
  )
}

export default Input
