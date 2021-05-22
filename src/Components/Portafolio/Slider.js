import React from 'react';
import Carousel from '@brainhubeu/react-carousel';
import "@brainhubeu/react-carousel/lib/style.css";
import Slides from './Slides';
import "./Slider.css";

const Slider = () => {

  return (

    <div className="carousel-container" id="portafolio">
      <div className="carousel-title">
        <h2>Mis Proyectos</h2>
      </div>

      <Carousel
        plugins={[
          'centered',
          'infinite',
          'arrows',
        ]}
        
        slides={Slides}
      />

    </div>
  );

};

export default Slider;