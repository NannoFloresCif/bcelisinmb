import React from 'react';
import '../estilos/PieDePagina.css';
import logo from '../activos/logos/logo-bcelis-blanco.png';

const PieDePagina = () => {
  return (
    <footer className="footer-nuevo">
      <div className="contenedor footer-grid">
        <div className="footer-columna footer-logo-info">
          <a href="#inicio">
            <img src={logo} alt="B Celis Inmobiliaria" className="footer-logo" />
          </a>
          <p>Invierte en tu futuro. Invierte en calidad de vida.</p>
        </div>
        <div className="footer-columna">
          <h4>Navegación</h4>
          <ul>
            <li><a href="#inicio">Inicio</a></li>
            <li><a href="#proyectos">Proyectos</a></li>
            <li><a href="#ubicacion">Ubicación</a></li>
            <li><a href="#galeria">Galería</a></li>
            <li><a href="#contacto">Contacto</a></li>
          </ul>
        </div>
        <div className="footer-columna">
          <h4>Contacto Directo</h4>
          <ul>
            <li>+56 9 8182 5385</li>
            <a href="https://www.instagram.com/inmobiliariabcelis/"><li>@inmobiliariabcelis</li></a>
            <li>Santa Juana, Chile</li>
          </ul>
        </div>
      </div>
      <div className="footer-copy">
        <div className="contenedor">
          &copy; {new Date().getFullYear()} B Celis Inmobiliaria. Todos los derechos reservados.
        </div>
      </div>
    </footer>
  );
};

export default PieDePagina;