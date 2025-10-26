import React from 'react';
import '../estilos/Ubicacion.css';

const Ubicacion = () => {
  return (
    <section id="ubicacion" className="seccion-ubicacion">
      <div className="contenedor">
        <h2 className="titulo-seccion">Ubicación de las Parcelas</h2>
        <div className="mapas-grid">
          <div className="mapa-item revelar">
            <h3>Aires de Tricauco</h3>
            <div className="mapa-contenedor">
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m17!1m12!1m3!1d3771.116094070557!2d-72.98154072414455!3d-37.17260357214322!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m2!1m1!2zMzfCsDEwJzIxLjQiUyA3MsKwNTgnNDQuMyJX!5e1!3m2!1ses!2scl!4v1761090825266!5m2!1ses!2scl"
                width="600"
                height="450"
                style={{ border: 0 }}
                allowFullScreen=""
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
              ></iframe>
            </div>
          </div>
          <div className="mapa-item revelar">
            <h3>Aires de Diñico</h3>
            <div className="mapa-contenedor">
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m17!1m12!1m3!1d3770.48853735688!2d-72.97199492342533!3d-37.18517569837683!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m2!1m1!2zMzfCsDExJzA2LjciUyA3MsKwNTgnMDkuOSJX!5e1!3m2!1ses!2scl!4v1761090678489!5m2!1ses!2scl"
                width="600"
                height="450"
                style={{ border: 0 }}
                allowFullScreen=""
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
              ></iframe>
            </div>
          </div>
          <div className="mapa-item revelar">
            <h3>Aires de Huallerehue</h3>
            <div className="mapa-contenedor">
               <iframe
                src="https://www.google.com/maps/embed?pb=!1m17!1m12!1m3!1d2876.5175559068884!2d-72.97043992414402!3d-37.184658072139975!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m2!1m1!2zMzfCsDExJzA0LjgiUyA3MsKwNTgnMDQuMyJX!5e1!3m2!1ses!2scl!4v1760666712354!5m2!1ses!2scl"
                width="600"
                height="450"
                style={{ border: 0 }}
                allowFullScreen=""
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
              ></iframe>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Ubicacion;