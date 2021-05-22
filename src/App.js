import React, { useEffect, useState } from 'react';
import "./Fontello/css/fontello.css";
import Menu from './Components/MenuNav/Menu';
import About from './Components/About/About';
import Portada from './Components/Portada/Portada';
import Conocimientos from './Components/Conocimientos/Conocimientos';
import Slider from './Components/Portafolio/Slider';
import Footer from './Components/Footer/Footer';
import Contacto from "./Components/Contacto/Contacto";



const App = () => {


  const [scroll, setScroll] = useState(0);

  const scrollNav = () => {
    const posicion = window.pageYOffset;
    setScroll(posicion);
  }

  useEffect(() => {
    window.addEventListener("scroll", scrollNav);
  }, [scroll]);

  return (
    <div>
      <Menu onScroll={scroll} />
      <Portada />
      <About />
      <Conocimientos />
      <Slider />
      <Contacto />
      <Footer />

    </div>
  )
}

export default App;

