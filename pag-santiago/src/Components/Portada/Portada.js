import React from 'react';
import './Portada.css'

const Portada = () => {

    return (
        <div>
            <div className="informacion">
                <h1 className="titulo">Santiago Guillen Ramirez</h1>
                <div className="descripcion">
                    <p>lorem ipsum dolor sit amet, consectetur adip occ sapien sed diam nonumy eirmod tempor incididunt ut 
                    labore et dolore mag et dolore mag et dolore mag et dolore mag et dolore mag et</p>
                </div>
            </div>
            
            <div className="targeta">
                <div className="logo">
                    <img src="https://i.ibb.co/B2xMpy1/20190612-170017-01.jpg"></img>
                </div>
                <a href="https://github.com/santiagogui1909" target="_blank">Web UI Developer</a>
            </div>
            <button className="btn-mas">Conoce mas de mi</button>
        </div>
    )
}

export default Portada;