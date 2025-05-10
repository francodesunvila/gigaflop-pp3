import React from 'react'
import { useNavigate } from 'react-router-dom'
import '../CSS/menu.css'


const Menu = () => {

    const navigate = useNavigate();
    const handleLogout = () =>{
        navigate('/')
    }

    
    const handlecotizacion = () =>{
        navigate('/cotizacion')
    }
  return (
    <>
<input type="checkbox" id="btn-menu" />
<div class="container-menu">
  <div class="cont-menu">
    <nav>
      <h5 className='nombre-sidebar'>Nombre y apellido</h5>
      <a href="#">Mi Perfil</a>
      <a href="#" onClick={handleLogout}>Cerrar Sesión</a>
    </nav>
    <label for="btn-menu">✖️</label>
  </div>
</div>
<div className="background-container-menu">
<header class="header">
  <div className='container-header'>
    <div className="title-container">
      <h2 className="title-menu">GIGAFLOP</h2>
    </div>
  </div>
  <div className='container-icon'>
      <label for="btn-menu"><i className="bi bi-person-circle custom-icon" ></i></label>
    </div>
  </header>
      <div  className="menubox">
        <div className="menu-container"> 
          <button className="menu-button" onClick={handlecotizacion}>GESTION DE COTIZACIONES</button>
          <button className="menu-button">GESTION DE CLIENTES</button>
        </div>
      </div>
        
    </div>

  </>
  )
}

export default Menu
