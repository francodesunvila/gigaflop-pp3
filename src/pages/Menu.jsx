import React from 'react'
import { NavLink, useNavigate } from 'react-router-dom'
import '../CSS/menu.css'


const Menu = () => {

    const navigate = useNavigate();
    const handleLogout = () =>{
        navigate('/')
    }

    
   
  return (
    <>
        {/*Menu lateral */}
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
        
        {/*Aqui el header con titulo con el icono usuario*/}
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

        {/*barra de opciones */}
        <div className='option'>
          <NavLink className='option-button'>Cotizaciones</NavLink>
          <NavLink className='option-button'>Clientes</NavLink>
          <NavLink className='option-button'>Catálogo</NavLink>
          <NavLink className='option-button'>Configuracion</NavLink>
        </div>
      
        {/*campo de matriz y filtros*/}
        <div  className="menubox">
          <div className='menu-superior'>
            <div className='container-reporte'>
              <button className='reporte'>Reporte</button>
            </div>
            <div className='container-nc'>
              <button className='nc'>+ Nueva Cotización</button>
            </div>
            
          </div>
          <div className="menu-matriz"> 
            <div>
              <h3>Buscar Cotizaciones</h3>
            </div>
             <div>
              <input placeholder="filtro1" />
              <input placeholder="filtro2" />
              <input placeholder="filtro3" />
              <input placeholder="filtro4" />
            </div>
          </div>
        </div>
        
      </div>

  </>
  )
}

export default Menu
