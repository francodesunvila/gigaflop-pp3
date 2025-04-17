import React from 'react'
import { NavLink, useNavigate } from 'react-router-dom'
import '../CSS/login.css'

const Login = () => {
    
    const navigate = useNavigate();
    const handleLogin = () =>{
        navigate('/menu')
    }

  return (
    <>
            <div className="background-container">
                <div className="loginbox">
                    <div className="title-container-login">
                        <h2 className="title">GIGAFLOP</h2>
                    </div>
                    <div className="input-container">
                        <input type="email" placeholder='Email' className="input" />
                        <input type="password" placeholder='Contraseña' className="input" />
         
                        <button className="login-button" onClick={handleLogin}>Iniciar Sesión</button>
                    </div>
                </div>
            </div>   
    </>
  )
}

export default Login
