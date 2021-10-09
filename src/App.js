import React, { useEffect, useState } from 'react';
import "./Fontello/css/fontello.css";
import { BrowserRouter as Router, Route, Switch, Link } from 'react-router-dom';

import CoverPage from './Components/Coverpage/coverPage';
import Briefcase from './Components/Briefcase/Briefcase';
import Contact from './Components/Contact/Contact';
import Footer from './Components/Footer/Footer';

import './index.css';

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
      <Router basename={process.env.PUBLIC_URL}>
        <nav className={`container-menu ${scroll > 20 ? "scroll" : null}`}>
          <ul class="nav-menu">
            <li>
              <Link to="/" className="optionNav">
                <span className="icon-up-open"></span>Home
              </Link>
            </li>
            <li>
              <Link to="/Briefcase" className="optionNav">
                <span className="icon-folder-open"></span>Briefcase
              </Link>
            </li>
            <li>
              <Link to="/Contact" className="optionNav">
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
  );
}
export default App;
