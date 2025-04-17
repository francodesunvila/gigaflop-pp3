import React from 'react'
import { useNavigate } from 'react-router-dom'

const Menu = () => {

    const navigate = useNavigate();
    const handleLogout = () =>{
        navigate('/')
    }

  return (
    <div>
      <h2>Aca estará el menu</h2>
      <button onClick={handleLogout}>volver</button>
    </div>
  )
}

export default Menu
