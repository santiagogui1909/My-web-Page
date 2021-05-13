import React, { useEffect, useState }from 'react';
import Menu from './Components/MenuNav/Menu';
import About from './Components/About/About';
import Portada from './Components/Portada/Portada';
import Conocimientos from './Components/Conocimientos/Conocimientos';


const App = () => {
  
  const [scroll, setScroll] = useState(0);

  const scrollNav = () => {
    const posicion = window.pageYOffset;
    setScroll(posicion);
  }

  useEffect(() => {
    window.addEventListener("scroll" , scrollNav);
  },[scroll]);





  return (  
    <div>
      <Menu onScroll={scroll}/>
      <Portada />
      <About />
      <Conocimientos />
    </div>
  )
}

export default App;

