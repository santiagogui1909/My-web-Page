import React from 'react';
import imgFondo from '../../media/2.jpg'

import './Portada.css';

const Portada = () => {

    return (
        <div className="container-portada">
            <img src={imgFondo}></img>
            <h1>Santiago Guillen Ramirez</h1>
            <p>Web UI Developer</p>
        </div>
    )

}

export default Portada;