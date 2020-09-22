import React from 'react'


const Login = (props) => {
    const { handleLogin } = props
    return(
        <button 
            className='login-button'
            onClick={handleLogin} >
            Login
        </button>
    )
}

export default Login