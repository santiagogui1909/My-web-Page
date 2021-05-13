import React from 'react';

import css from '../../media/Css.png'
import Figma from '../../media/figma.png'
import GitHub from '../../media/Git Hub2.svg'
import Git from '../../media/git-icon.svg'
import html from '../../media/Html.png'
import Java from '../../media/Java.svg'
import js from '../../media/JS.png'
import MySQL from '../../media/Mysql.png'
import Reactt from '../../media/React.png'

import './Conocimientos.css'

const Conocimientos = () => {

    return (
        <div className="container-conocimientos" id="conocimientos">
            <h1 className="titulo-front">Frontend</h1>
            <div className="container-front">
                <div className="targeta">
                    <img src={html}></img>
                    <p>HTML</p>
                </div>
                <div className="targeta">
                    <img src={css}></img>
                    <p>Css</p>
                </div>
                <div className="targeta">
                    <img src={js}></img>
                    <p>Javascript</p>
                </div>
                <div className="targeta">
                    <img src={Reactt}></img>
                    <p>React</p>
                </div>
            </div>
 
            <h1 className="titulo-backend">Backend</h1>
            <div className="container-backend">
                <div className="targeta-backend">
                    <img src={Java}></img>
                </div>
                <div className="targeta-backend">
                    <img src={MySQL}></img>
                </div>
            </div>

            <h1 className="titulo-otro">Otros</h1>
            <div className="container-otros">
                <div className="targeta-otros">
                    <img src={Git}></img>
                    <p>Git</p>
                </div>
                <div className="targeta-otros">
                    <img src={GitHub}></img>
                    <p>Git Hub</p>
                </div>
                <div className="targeta-otros">
                    <img src={Figma}></img>
                    <p>Figma</p>
                </div>
            </div>
        </div>
    );
}

export default Conocimientos;