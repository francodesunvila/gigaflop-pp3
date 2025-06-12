import React from 'react'
import { NavLink } from 'react-router-dom';
import { useNavigate } from 'react-router-dom';

const Sidebar = () => {
      const navigate = useNavigate();
  const handleLogout = () => {
    navigate('/');
  };
  return (
    <div>
      <input type="checkbox" id="btn-menu" />
      <div className="container-menu">
        <div className="cont-menu">
          <nav>
            <h5 className='nombre-sidebar'>Nombre y apellido</h5>
            <a href="#">Mi Perfil</a>
            <a href="#" onClick={handleLogout}>Cerrar Sesión</a>
          </nav>
          <label htmlFor="btn-menu">✖️</label>
        </div>
      </div>
    </div>
  )
}

export default Sidebar
