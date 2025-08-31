import React, { useState } from 'react';
import { NavLink, useNavigate } from 'react-router-dom';
import '../CSS/productos.css';
import Sidebar from '../components/Sidebar';


const Productos = () => {
    const [searchTerm, setSearchTerm] = useState({
            codigo: '',
            producto: '',
            stock: '',
            precio: '',
          });
    
           // Estado para controlar la visibilidad del formulario de registro
        const [showRegisterForm, setShowRegisterForm] = useState(false);
    
const productos = [
  { codigo: 'PRD1523', producto: 'Impresora HP LaserJet Pro', stock: 12, precio: 'u$s420' },
  { codigo: 'PRD1179', producto: 'Servidor Dell PowerEdge T40', stock: 18, precio: 'u$s1,150' },
  { codigo: 'PRD1879', producto: 'Router Cisco RV340', stock: 22, precio: 'u$s390' },
  { codigo: 'PRD2045', producto: 'Procesador Intel Core i9-13900K', stock: 14, precio: 'u$s620' },
  { codigo: 'PRD1638', producto: 'Memoria RAM Kingston 32GB DDR4', stock: 36, precio: 'u$s210' },
  { codigo: 'PRD1782', producto: 'Monitor Samsung 27" Curvo', stock: 28, precio: 'u$s330' },
  { codigo: 'PRD1924', producto: 'Switch TP-Link 24 Puertos', stock: 16, precio: 'u$s180' },
  { codigo: 'PRD1456', producto: 'Disco SSD Samsung 2TB', stock: 44, precio: 'u$s250' },
  { codigo: 'PRD2098', producto: 'Notebook Lenovo ThinkPad E14', stock: 32, precio: 'u$s890' },
  { codigo: 'PRD1735', producto: 'Placa de Video NVIDIA RTX 4070', stock: 24, precio: 'u$s1,050' }
];
          
const filteredProductos = productos.filter(productos => {
  const search = searchTerm.codigo.toLowerCase();
  return (
    productos.codigo.toLowerCase().includes(search) ||
    productos.producto.toLowerCase().includes(search) ||
    String(productos.stock).toLowerCase().includes(search) ||
    productos.precio.toLowerCase().includes(search)
  );
});

  return (
    <>
      <Sidebar />
            <div className="background-container-prod">
              <header className="headerprod">
                <div className='container-header'>
                  <div className="title-container">
                    <h2 className="title-menu">GIGAFLOP</h2>
                  </div>
                </div>
                <div className='container-icon'>
                  <label htmlFor="btn-menu"><i className="bi bi-person-circle custom-icon"></i></label>
                </div>
              </header>
              <div className='optionprod'>
                <NavLink className='option-button' to='/menu'>Cotizaciones</NavLink>
                <NavLink className='option-button' to= "/clientes">Clientes</NavLink>
                <NavLink className='option-button2' to= '/productos' >Productos</NavLink>
                <NavLink className='option-button'to= '/configuracion'>Configuración</NavLink>
              </div>
            </div>
        <div className="menuboxprod">
          <div className='menu-superior'>
            <div className='cotizatitlecontainer'>
              <h3 className='cotizatitle'>Productos</h3>
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
                    <th className='table-header'>Código</th>
                    <th className='table-header'>Producto</th>
                    <th className='table-header'>Stock</th>
                    <th className='table-header'>Precio</th>
                   
                    
                  </tr>
                </thead>
                <tbody className='table'>
                  {filteredProductos.map((producto, index) => (
                    <tr key={index} className='table-trdatos'>
                      <td className='table-datos'>{producto.codigo}</td>
                      <td className='table-datos'>{producto.producto}</td>
                      <td className='table-datos'>{producto.stock}</td>
                      <td className="table-datos">{producto.precio}</td>
             
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
       
    </>
  )
}

export default Productos
