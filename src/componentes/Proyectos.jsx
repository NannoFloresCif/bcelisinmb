import React from 'react';
import '../estilos/Proyectos.css';
import { FaCar, FaWater, FaDoorOpen, FaLayerGroup ,FaCloudSun , FaTree, FaRoad, FaLightbulb, FaChartLine, FaCarSide, FaLocationArrow } from 'react-icons/fa';

import tricaucoImg from '../activos/proyectos/tricauco-proyecto.jpeg';
import dinicoImg from '../activos/proyectos/dinico-proyecto.png';
import huallerehueImg from '../activos/proyectos/h-p.jpg';

const datosProyectos = [
  {
    nombre: "Aires de Tricauco",
    imagen: tricaucoImg,
    caracteristicas: [
      { icono: <FaDoorOpen />, texto: "Porton de acceso privado" },
      { icono: <FaRoad />, texto: "A orilla de carretera" },
      { icono: <FaLightbulb /> , texto: "Factibilidad Agua y Luz" },
    ]
  },
  {
    nombre: "Aires de Diñico",
    imagen: dinicoImg,
    caracteristicas: [
      { icono: <FaCar />, texto: "Acceso estabilizado" },
      { icono: <FaLightbulb />, texto: "Factibilidad Agua y Luz" },
      { icono: <FaLayerGroup />, texto: "Terreno tipo terraza" },
    ]
  },
  {
    nombre: "Aires de Huallerehue",
    imagen: huallerehueImg,
    caracteristicas: [
      { icono: <FaCloudSun />, texto: "Tranquilidad" },
      { icono: <FaTree />, texto: "Entorno de naturaleza" },
      { icono: <FaChartLine />, texto: "Oportunidad de inversión" }
    ]
  }
];

const TarjetaProyecto = ({ proyecto }) => (
  <div className="proyecto-tarjeta-nueva revelar">
    <div className="proyecto-imagen-contenedor">
      <img src={proyecto.imagen} alt={proyecto.nombre} className="proyecto-imagen" />
    </div>
    <div className="proyecto-info">
      <h3 className="proyecto-nombre">{proyecto.nombre}</h3>
      <ul className="proyecto-caracteristicas">
        {proyecto.caracteristicas.map((car, index) => (
          <li key={index}>{car.icono} {car.texto}</li>
        ))}
      </ul>
      <a href="#contacto" className="proyecto-cta">Quiero más información</a>
    </div>
  </div>
);

const Proyectos = () => {
  return (
    <section id="proyectos" className="seccion-proyectos">
      <div className="contenedor">
        <h2 className="titulo-seccion">Nuestros Proyectos</h2>
        <div className="proyectos-grid">
          {datosProyectos.map((p, i) => <TarjetaProyecto key={i} proyecto={p} />)}
        </div>
      </div>
    </section>
  );
};

export default Proyectos;