import React, { useEffect, useState, useRef } from 'react';
import "./Fontello/css/fontello.css";
import { BrowserRouter as Router, Route, Switch, Link } from 'react-router-dom';
import {ScrollToTop} from './hooks/hooks';
import CoverPage from './Components/Coverpage/coverPage';
import Briefcase from './Components/Briefcase/Briefcase';
import Contact from './Components/Contact/Contact';
import Footer from './Components/Footer/Footer';

import logo from './media/logo_transparent.png';
import './index.css';

const App = () => {

  let topRef = useRef(null);
  const [scroll, setScroll] = useState(0);
  const [menu, setMenu] = useState(false);

  const scrollNav = () => {
    const posicion = window.pageYOffset;
    setScroll(posicion);
  }

  useEffect(() => {
    window.addEventListener("scroll", scrollNav);
  }, [scroll]);

  return (
    <>
      <div ref={topRef}>
        <Router basename={process.env.PUBLIC_URL}>
        <ScrollToTop setMenu={setMenu} />
          <nav className={`container-menu ${scroll > 20 ? "scroll" : null}`}>
            <ul class={menu === true ? 'menuResponsive' : 'nav-menu'}>
              <li>
                <Link to="/" className="optionNav" onClick={() => { topRef.current.scrollIntoView(true) }}>
                  <span className="iconStyle icon-up-open"></span>Home
                </Link>
              </li>
              <li>
                <Link to="/Briefcase" className="optionNav" onClick={() => { topRef.current.scrollIntoView(true) }}>
                  <span className="iconStyle icon-folder-open"></span>Briefcase
                </Link>
              </li>
              <li>
                <Link to="/Contact" className="optionNav" onClick={() => { topRef.current.scrollIntoView(true) }}>
                  <span className="iconStyle icon-user-add"></span>Contact
                </Link>
              </li>
              <img className="logo" src={logo} onClick={() => { topRef.current.scrollIntoView(true) }}></img>
            </ul>
              <span className="icon-th-list" onClick={() => setMenu(!menu)}></span>
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
          <p>loading please wait... </p> 
          <img src={imgLoading}></img>
        </section>
      :  }*/
