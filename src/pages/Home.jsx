import React from 'react'
import { FaInstagram, FaFacebook } from 'react-icons/fa';
import '../CSS/home.css'; // Assuming you have a CSS file for global styles
import { NavLink } from 'react-router-dom';




const Home = () => {

  return (
    <>
    <div className='home-container'>
    <header className="header-home">
        <h1 className="title-home">Gigaflop</h1>
        <nav className="nav">
            
          <NavLink href="#" className='login-home' to='/'><i className="bi bi-person-circle"></i> LOGIN</NavLink>
     
        </nav>
      </header>

      <main className="main-content">
        <section className="hero">
          <h2>Soluciones en Hardware y Software para Empresas</h2>
          <p>Automatizamos tus procesos de cotización con eficiencia, velocidad y precisión.</p>
        </section>

        <section id="nosotros" className="about-section">
          <h2>Sobre Nosotros</h2>
          <p><strong>Misión:</strong> Brindar soluciones tecnológicas innovadoras que permitan a las empresas optimizar sus procesos y mejorar su eficiencia operativa.</p>
          <p><strong>Visión:</strong> Ser el socio estratégico de confianza para empresas que buscan transformar digitalmente su gestión comercial.</p>
        </section>
      </main>

      <footer className="footer-home" id="contacto">
        <div className="footer-content">
            <div className='footer-info'>
            <p className='contacto-home'><strong>Contacto:</strong> contacto@gigaflop.com.ar</p>
            <p className='contacto-home'><strong>Teléfono:</strong> +54 11 1234-5678</p>
            <p className='contacto-home'><strong>Ubicación:</strong> CABA, Argentina</p>
            </div>
            <div className="footer-socials">
                <div className="socials">
                    <a href="https://www.instagram.com/gigaflopba/" className='redes' target="_blank" rel="noreferrer">
              <FaInstagram /> Instagram
                    </a>
                <a href="https://www.facebook.com/p/Gigaflop-Tienda-100085264720623/" target="_blank" rel="noreferrer">
              <FaFacebook /> Facebook
                </a>

            </div>
          </div>
        </div>
      </footer>
      </div>

      
    </>
  )
}

export default Home
