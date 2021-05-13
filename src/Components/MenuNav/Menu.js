import React from 'react';
import './Menu.css';

const Menu = ({onScroll}) => {

    const top = () => {
        window.scrollTo({top:0, left:0, behavior:"smooth"});
    }

    return (
        <nav className={`container-menu ${onScroll > 20 ? "scroll" : null}`}>
            <a href="">Inicio</a>
            <a href="#about">¿Quien Soy?</a>
            <a href="#conocimientos">Conocimientos</a>
            <a href="">Contacto</a>
        </nav>
    )
}

export default Menu;