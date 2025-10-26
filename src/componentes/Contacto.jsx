import React from 'react';
import '../estilos/Contacto.css';
import { FaWhatsapp, FaEnvelope, FaInstagram } from 'react-icons/fa';

const Contacto = () => {
  return (
    <section id="contacto" className="seccion-contacto">
      <div className="contenedor contacto-grid">
        <div className="info-contacto revelar">
          <h2 className="titulo-seccion">Contáctanos</h2>
          <p>
            ¿Tienes alguna consulta o quieres agendar una visita?
            Completa el formulario o contáctanos directamente a través de
            nuestros canales.
          </p>
          <div className="canales-directos">
            <a href="https://wa.me/56981825385" target="_blank" rel="noopener noreferrer">
              <FaWhatsapp /> +56 9 8182 5385
            </a>
  
            <a href="https://www.instagram.com/inmobiliariabcelis/" target="_blank" rel="noopener noreferrer">
              <FaInstagram /> @inmobiliariaBCelis
            </a>

            <a href="mailto:bcelisinmobiliaria@gmail.com">
             <FaEnvelope /> bcelisinmobiliaria@gmail.com
            </a>
          </div>
        </div>

        <form 
          action="https://formspree.io/f/mzzjqqlk" // <-- REEMPLAZA ESTO
          method="POST"
          className="formulario-contacto revelar"
        >
          <div className="form-grupo">
            <label htmlFor="nombre">Nombre</label>
            <input type="text" id="nombre" name="nombre" required />
          </div>
          <div className="form-grupo">
            <label htmlFor="email">Email</label>
            <input type="email" id="email" name="email" required />
          </div>
          <div className="form-grupo">
            <label htmlFor="telefono">Teléfono</label>
            <input type="tel" id="telefono" name="telefono" />
          </div>
          <div className="form-grupo">
            <label htmlFor="mensaje">Mensaje</label>
            <textarea id="mensaje" name="mensaje" rows="5" required></textarea>
          </div>
          <button type="submit" className="btn-enviar">Enviar Mensaje</button>
        </form>
      </div>
    </section>
  );
};

export default Contacto;