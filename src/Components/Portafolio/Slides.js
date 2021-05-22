import React from "react";

import './Slider.css';

const slidesInfo = [
  {
    id: "pro-uno",
    portada: "https://th.wallhaven.cc/lg/8o/8ogod1.jpg",
    nombre: "Comunicaciones LiSanty",
  },
  {
    id: "pro-dos",
    portada: "https://th.wallhaven.cc/lg/8o/8ogod1.jpg",
    nombre: "Drum Kit",
  },
  {
    id: "pro-tres",
    portada: "https://th.wallhaven.cc/lg/8o/8ogod1.jpg",
    nombre: "Among Devs",
  },
];

const slides = slidesInfo.map((slide) => (

    <div className="container">
      <div className="slide-container">
        <img src={slide.portada} />
        <div className="slide-desc">
          <span>{slide.nombre}</span>
          <a href="#uno" class="btn-open-popup">Ver</a>
        </div>
      </div>
    </div>
));

export default slides;


