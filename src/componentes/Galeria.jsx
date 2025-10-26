import React, { useState } from 'react';
import Lightbox from "yet-another-react-lightbox";
import "yet-another-react-lightbox/styles.css";

import Zoom from "yet-another-react-lightbox/plugins/zoom";
import Captions from "yet-another-react-lightbox/plugins/captions";
import Video from "yet-another-react-lightbox/plugins/video";

import tricaucoImg from '../activos/proyectos/tricauco-proyecto.jpeg';
import dinicoImg from '../activos/proyectos/dinico-proyecto.png';
import huallerehueImg from '../activos/proyectos/huallerehue-proyecto.JPG';

 

import '../estilos/Galeria.css';


// === Importación de imágenes por proyecto ===
// AIRES DE TRICAUCO
import tricaucoImg1 from '../activos/proyectos/tricauco-1.jpg';
import tricaucoImg2 from '../activos/proyectos/tricauco-2.jpg';
import tricaucoImg3 from '../activos/proyectos/tricauco-3.jpg';

import tricaucoVideo1 from '../activos/videos/tricauco-video-1.mp4';

const tricaucoFotos = [
  { src: tricaucoImg1 },
  { src: tricaucoImg2 },
  { src: tricaucoImg3 }, 
  
];
const tricaucoVideos = [
   { src: tricaucoVideo1, type: 'video/mp4', poster: tricaucoImg },
];

// AIRES DE DIÑICO
import dinicoImg1 from '../activos/proyectos/dinico-1.jpg';
import dinicoImg2 from '../activos/proyectos/dinico-2.jpg';
import dinicoImg3 from '../activos/proyectos/dinico-3.jpg';

import dinicoVideo1 from '../activos/videos/dinico-video-1.mp4';
const dinicoFotos = [
  { src: dinicoImg1 },
  { src: dinicoImg2 },
  { src: dinicoImg3 },
  
];
const dinicoVideos = [
   { src: dinicoVideo1, type: 'video/mp4', poster: dinicoImg },
];

// AIRES DE HUALLEREHUE
import huallerehueImg1 from '../activos/proyectos/huallerehue-1.jpg';
import huallerehueImg2 from '../activos/proyectos/huallerehue-2.jpg';
import huallerehueImg3 from '../activos/proyectos/huallerehue-3.jpg';

import huallerehueVideo1 from '../activos/videos/huallerehue-video-1.mp4';

const huallerehueFotos = [
  { src: huallerehueImg1 },
  { src: huallerehueImg2 },
  { src: huallerehueImg3 },
  
];
const huallerehueVideos = [
   { src: huallerehueVideo1, type: 'video/mp4', poster: huallerehueImg },
];

// Datos organizados por proyecto para la galería
const datosGaleria = {
  "Aires de Tricauco": [...tricaucoVideos, ...tricaucoFotos],
  "Aires de Diñico": [...dinicoVideos, ...dinicoFotos],
  "Aires de Huallerehue": [...huallerehueVideos, ...huallerehueFotos],
};


const Galeria = () => {
  const [index, setIndex] = useState(-1);
  const [currentSlides, setCurrentSlides] = useState([]); // Guarda los slides del proyecto actual

  const abrirLightbox = (proyectoNombre, clickedIndex) => {
    const slidesParaProyecto = datosGaleria[proyectoNombre].map(item => {
      // Lightbox requiere un formato específico para videos vs imágenes
      if (item.type && item.type.startsWith('video')) {
        return { 
          type: 'video', 
          sources: [{ src: item.src, type: item.type }],
          title: proyectoNombre, 
          description: item.alt,
          poster: item.poster // Añadimos poster al lightbox también
        };
      }
      return { 
        src: item.src, 
        title: proyectoNombre, 
        description: item.alt 
      };
    });
    setCurrentSlides(slidesParaProyecto);
    setIndex(clickedIndex);
  };

  return (
    <section id="galeria" className="seccion-galeria">
      <div className="contenedor">
        <h2 className="titulo-seccion">Galería</h2>
        
        <div className="galeria-proyectos-vertical">
          {Object.keys(datosGaleria).map((proyectoNombre, colIndex) => (
            <div key={colIndex} className="galeria-columna revelar">
              <h3 className="nombre-proyecto-galeria">{proyectoNombre}</h3>
              {datosGaleria[proyectoNombre].map((item, itemIndex) => (
                <div 
                  key={itemIndex} 
                  className="galeria-item-vertical" 
                  onClick={() => abrirLightbox(proyectoNombre, itemIndex)}
                >
                  {item.type && item.type.startsWith('video') ? (
                    <div className="galeria-video-thumbnail">
                      <video src={item.src} poster={item.poster} preload="metadata" muted playsInline></video> {/* Muestra thumbnail del video */}
                      <div className="galeria-video-play-overlay">▶</div>
                    </div>
                  ) : (
                    <img src={item.src} alt={item.alt} />
                  )}
                  <div className="galeria-superposicion-vertical">VER</div>
                </div>
              ))}
            </div>
          ))}
        </div>
      </div>

      <Lightbox
        open={index >= 0}
        index={index}
        close={() => setIndex(-1)}
        slides={currentSlides}
        plugins={[Video, Zoom, Captions]} // Activa los plugins si los instalaste
      />
    </section>
  );
};

export default Galeria;