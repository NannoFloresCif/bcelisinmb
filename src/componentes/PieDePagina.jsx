import React from 'react';
import '../estilos/PieDePagina.css';
import logo from '../activos/logos/logo-bcelis-blanco.png';
import { FaWhatsapp, FaMapMarkerAlt, FaInstagram } from 'react-icons/fa';

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
          {/* 2. Añadimos los iconos a la lista */}
          <ul className="footer-contacto-directo">
            <li>
              <a href="https://wa.me/56981825385" target="_blank" rel="noopener noreferrer">
                <FaWhatsapp /> +56 9 8182 5385
              </a>
            </li>
            <li>
              <a href="mailto:tuemail@bcelis.cl">
                <FaInstagram /> @inmobiliariaBCelis
              </a>
            </li>
            <li>
              <span>
                <FaMapMarkerAlt /> Santa Juana, Chile
              </span>
            </li>
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