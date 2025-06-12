import React from 'react';
import Sidebar from '../components/Sidebar';
import '../CSS/menu.css';
import { NavLink } from 'react-router-dom';
import { useState } from 'react';
import '../CSS/clientes.css';
import Register from '../components/Register';



const Clientes = () => {

      const [searchTerm, setSearchTerm] = useState({
        id: '',
        fecha: '',
        nombre: '',
        cuit: '',
        direccion: ''
      });

       // Estado para controlar la visibilidad del formulario de registro
    const [showRegisterForm, setShowRegisterForm] = useState(false);

      const clientes = [
  { id: '482193', fecha: '01/01/2023', nombre: 'YPF', cuit: '30-54667778-9', direccion: 'Macacha Güemes 515, CABA' },
  { id: '729384', fecha: '02/01/2023', nombre: 'Mercado Libre', cuit: '30-70949411-2', direccion: 'Arias 3751, CABA' },
  { id: '193847', fecha: '03/01/2023', nombre: 'Globant', cuit: '30-71067891-7', direccion: 'Ing. Butty 240, CABA' },
  { id: '837261', fecha: '10/01/2023', nombre: 'Arcor', cuit: '30-50000667-2', direccion: 'Av. Fulvio Pagani 487, Arroyito, Córdoba' },
  { id: '284756', fecha: '12/01/2023', nombre: 'Techint', cuit: '30-50000012-3', direccion: 'Della Paolera 299, CABA' },
  { id: '918273', fecha: '15/01/2023', nombre: 'Tenaris', cuit: '30-50000013-1', direccion: 'Dr. Moisés Lebensohn 803, Campana, Bs.As.' },
  { id: '374829', fecha: '18/01/2023', nombre: 'Telecom Argentina', cuit: '30-63945373-8', direccion: 'Alicia Moreau de Justo 50, CABA' },
  { id: '657483', fecha: '20/01/2023', nombre: 'Coca-Cola', cuit: '30-50000014-9', direccion: 'Av. Santa Fe 3670, CABA' },
  { id: '102938', fecha: '22/01/2023', nombre: 'Banco Galicia', cuit: '30-50000015-7', direccion: 'Tte. Gral. Juan D. Perón 407, CABA' },
  { id: '564738', fecha: '25/01/2023', nombre: 'Santander Río', cuit: '30-50000016-5', direccion: 'Bartolomé Mitre 480, CABA' },
  { id: '837465', fecha: '28/01/2023', nombre: 'Unilever', cuit: '30-50000017-3', direccion: 'Av. Libertador 498, Munro, Bs.As.' },
  { id: '293847', fecha: '30/01/2023', nombre: 'Toyota', cuit: '30-50000018-1', direccion: 'Ruta 12 km 81, Zárate, Bs.As.' },
  { id: '475869', fecha: '02/02/2023', nombre: 'PepsiCo', cuit: '30-50000019-0', direccion: 'Av. Libertador 101, Vicente López, Bs.As.' },
  { id: '918273', fecha: '05/02/2023', nombre: 'BBVA', cuit: '30-50000020-8', direccion: 'Av. Córdoba 111, CABA' },
];
      
 const filteredClientes = clientes.filter(cliente => {
    const search = searchTerm.id.toLowerCase(); // Convertir a minúsculas para una comparación segura

    return (
        cliente.id.toLowerCase().includes(search) ||
        cliente.fecha.toLowerCase().includes(search) ||
        cliente.nombre.toLowerCase().includes(search) ||
        cliente.cuit.toLowerCase().includes(search) ||
        cliente.direccion.toLowerCase().includes(search)
    );
});

  return (
    <>
      <Sidebar />
      <div className="background-container-menu">
        <header className="header">
          <div className='container-header'>
            <div className="title-container">
              <h2 className="title-menu">GIGAFLOP</h2>
            </div>
          </div>
          <div className='container-icon'>
            <label htmlFor="btn-menu"><i className="bi bi-person-circle custom-icon"></i></label>
          </div>
        </header>
        <div className='option'>
          <NavLink className='option-button'to= '/menu'>Cotizaciones</NavLink>
          <NavLink className='option-button2'>Clientes</NavLink>
          <NavLink className='option-button' >Catálogo</NavLink>
          <NavLink className='option-button'>Configuración</NavLink>
        </div>
        {/* MODAL DE REGISTRO - Se renderiza condicionalmente */}
                {showRegisterForm && (
                    <div className="register-modal-overlay" onClick={() => setShowRegisterForm(false)}>
                        <div className="register-modal-content" onClick={(e) => e.stopPropagation()}>
                            {/* Pasamos la función para cerrar al componente Register */}
                            <Register onClose={() => setShowRegisterForm(false)} />
                        </div>
                    </div>
                )}
        <div className="menubox">
          <div className='menu-superior'>
            <div className='cotizatitlecontainer'>
              <h3 className='cotizatitle'>Clientes</h3>
            </div>
            <div>
              <button className='reporte'>Reporte</button>
              <button className='nc' onClick={() => setShowRegisterForm(true)}>+ Nuevo Cliente</button>
            </div>
          </div>
          <div className="menu-matriz">
            
            <div className="filtros">
              <input className="buscador" placeholder="Escriba ID, fecha, nombre, CUIT o dirección" value={searchTerm.id} onChange={(e) => setSearchTerm({...searchTerm, id: e.target.value})} />
              
            </div>
            <div className='matriz'>
              <table className='table'>
                <thead className='table-thead'>
                  <tr className='table-tr'>
                    <th className='table-header'>ID</th>
                    <th className='table-header'>Fecha</th>
                    <th className='table-header'>Nombre</th>
                    <th className='table-header'>CUIT</th>
                    <th className='table-header'>Dirección</th>
                    
                  </tr>
                </thead>
                <tbody className='table'>
                  {filteredClientes.map((clientes, index) => (
                    <tr key={index} className='table-trdatos'>
                      <td className='table-datos'>{clientes.id}</td>
                      <td className='table-datos'>{clientes.fecha}</td>
                      <td className='table-datos'>{clientes.nombre}</td>
                      <td className="table-datos">{clientes.cuit}</td>
                        <td className='table-datos'>{clientes.direccion}</td>
                      <td className='table-datostotal'>
                        <div className='crud-icons'>   
                        <i className="bi bi-eye-fill"></i>  
                        <i className="bi bi-pencil-fill"></i>
                        <i className="bi bi-file-earmark-arrow-down-fill"></i>
                        <i className="bi bi-trash3-fill"></i>                  
                        </div> 
                      </td>
                      
                        
                      
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Clientes;

