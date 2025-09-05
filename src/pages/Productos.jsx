import React, { useEffect, useState } from 'react';
import { NavLink, useNavigate } from 'react-router-dom';
import '../CSS/productos.css';
import Sidebar from '../components/Sidebar';
import CardProductos from '../components/CardProductos';


const Productos = () => {
  
  const url = 'https://rickandmortyapi.com/api/character';

  const [products, setProducts] = useState([]);
  const [info, setInfo] = useState({});

  const fetchProducts = async (urlApi = url) => {
    try {
      const res = await fetch(urlApi);
      const data = await res.json();
      setProducts(data.results);
      setInfo(data.info);
    } catch (error) {
      console.error('Error fetching products:', error);
    }
  }

  useEffect(() => {
    fetchProducts();
  }, []);

  const onSiguiente = () => {
    fetchProducts(info.next);
  }
  const onAnterior = () => {
    fetchProducts(info.prev);
  }

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
          
          <div className="productos-container">
            <div className='productos-box'>
              {products.map((item) =>(
                <CardProductos key={item.id} item={item} />
              ) )}
            </div>
              
            <div>
                <ul className="pagination justify-content-center mt-4">
                    <button className="btn btn-danger"onClick={onAnterior}>Anterior</button>
                    <button className="btn btn-success ms-2" onClick={onSiguiente}>Siguiente</button>
                </ul>
            </div>
              
              
           
           
            
          </div>
        </div>
       
    </>
  )
}

export default Productos
