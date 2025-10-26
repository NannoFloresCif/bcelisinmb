import React from 'react';
import '../estilos/Hero.css';
import videoFondo from '../activos/videos/portada-video.mp4'; // Asegúrate de que este archivo exista

const Hero = () => {
  return (
    <section id="inicio" className="hero-contenedor">
      <video className="hero-video" autoPlay loop muted playsInline>
        <source src={videoFondo} type="video/mp4" />
        Tu navegador no soporta videos.
      </video>
      <div className="hero-superposicion"></div>
      <div className="hero-contenido revelar">
        <h1 className="hero-titulo">Tu tranquilidad está en Santa Juana</h1>
        <p className="hero-subtitulo">
          Accesibilidad, seguridad y naturaleza en tres proyectos que sin duda están hechos para ti.
        </p>
        <a href="#contacto" className="hero-cta">CONTACTO</a>
      </div>
    </section>
  );
};

export default Hero;