import React, { useState, useEffect } from 'react';
import '../estilos/Navegacion.css';
import logo from '../activos/logos/logo-bcelis-blanco.png';

const Navegacion = () => {
  const [navActiva, setNavActiva] = useState(false);
  const [menuAbierto, setMenuAbierto] = useState(false);

  const cambiarFondoNav = () => {
    if (window.scrollY >= 80) {
      setNavActiva(true);
    } else {
      setNavActiva(false);
    }
  };

  useEffect(() => {
    window.addEventListener('scroll', cambiarFondoNav);
    const observer = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.classList.add('visible');
        } else {
          // AÑADIMOS ESTA CONDICIÓN PARA QUITAR LA CLASE
          entry.target.classList.remove('visible');
        }
      });
    }, { threshold: 0.1 });

    const elementosOcultos = document.querySelectorAll('.revelar');
    elementosOcultos.forEach(el => observer.observe(el));

    return () => {
      window.removeEventListener('scroll', cambiarFondoNav);
      elementosOcultos.forEach(el => observer.unobserve(el));
    };
  }, []);

  const cerrarMenu = () => {
    setMenuAbierto(false);
  };

  return (
    <nav className={`${navActiva ? 'activa' : ''} ${menuAbierto ? 'menu-visible' : ''} navegacion`}>
      <div className="navegacion-contenedor">
        <a href="#inicio" className="logo-link" onClick={cerrarMenu}>
          <img src={logo} alt="B Celis Inmobiliaria" className="logo" />
        </a>

        <ul className="nav-links-desktop">
          <li><a href="#inicio">Inicio</a></li>
          <li><a href="#proyectos">Proyectos</a></li>
          <li><a href="#ubicacion">Ubicación</a></li>
          <li><a href="#galeria">Galería</a></li>
          <li><a href="#contacto">Contacto</a></li>
        </ul>

        <div 
          className="menu-hamburguesa" 
          onClick={() => setMenuAbierto(!menuAbierto)}
        >
          <div className="linea linea1"></div>
          <div className="linea linea2"></div>
          <div className="linea linea3"></div>
        </div>
      </div>

      <div className="nav-links-mobile">
        <ul>
          <li><a href="#inicio" onClick={cerrarMenu}>Inicio</a></li>
          <li><a href="#proyectos" onClick={cerrarMenu}>Proyectos</a></li>
          <li><a href="#ubicacion" onClick={cerrarMenu}>Ubicación</a></li>
          <li><a href="#galeria" onClick={cerrarMenu}>Galería</a></li>
          <li><a href="#contacto" onClick={cerrarMenu}>Contacto</a></li>
        </ul>
      </div>
    </nav>
  );
};

export default Navegacion;