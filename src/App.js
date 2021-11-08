import React, { useEffect, useState, useRef } from 'react';
import "./Fontello/css/fontello.css";
import { BrowserRouter as Router, Route, Switch, Link } from 'react-router-dom';

import CoverPage from './Components/Coverpage/coverPage';
import Briefcase from './Components/Briefcase/Briefcase';
import Contact from './Components/Contact/Contact';
import Footer from './Components/Footer/Footer';

import imgLoading from './media/sala-de-espera.png';
import './index.css';

const App = () => {

  let topRef = useRef(null);
  const [scroll, setScroll] = useState(0);
  const [onloadPaje, setOnload] = useState(0);

  const scrollNav = () => {
    const posicion = window.pageYOffset;
    setScroll(posicion);
  }

  useEffect(() => {
    window.addEventListener("scroll", scrollNav);
  }, [scroll]);

  // useEffect(() => {

  //   window.onload = function () {
  //     setOnload(false);
  //     setTimeout(alertFunc, 2000);
  //   };

  //   function alertFunc() {
  //     setOnload(true);
  //   }
  // })

  return (
    <>
      <div ref={topRef}>
        <Router basename={process.env.PUBLIC_URL}>
          <nav className={`container-menu ${scroll > 20 ? "scroll" : null}`}>
            <ul class="nav-menu">
              <li>
                <Link to="/" className="optionNav" onClick={() => { topRef.current.scrollIntoView(true) }}>
                  <span className="icon-up-open"></span>Home
                </Link>
              </li>
              <li>
                <Link to="/Briefcase" className="optionNav" onClick={() => { topRef.current.scrollIntoView(true) }}>
                  <span className="icon-folder-open"></span>Briefcase
                </Link>
              </li>
              <li>
                <Link to="/Contact" className="optionNav" onClick={() => { topRef.current.scrollIntoView(true) }}>
                  <span className="icon-user-add"></span>Contact
                </Link>
              </li>
            </ul>
          </nav>

          <Switch>
            <Route path="/" component={CoverPage} exact />
            <Route path="/Briefcase" component={Briefcase} exact />
            <Route path="/Contact" component={Contact} exact />
          </Switch>
        </Router>
        <Footer />
      </div>
    </>
  );
}
export default App;



/* /* {onloadPaje === false ? 
        <section className="containerLoad">
          <p>loading please wait... 🔌</p> 
          <img src={imgLoading}></img>
        </section>
      :  }*/
