import React, { useEffect, useState } from 'react';

import css from '../../media/Css.png'
import Git from '../../media/git-icon.svg'
import html from '../../media/Html.png'
import contentFul from '../../media/contentful.png'
import js from '../../media/JS.png'
import MySQL from '../../media/Mysql.png'
import Reactt from '../../media/React.png'

import './knowledge.css'

const Knowledge = () => {

    return (
        <>
            <article className="container-knowledge">
            <h1 className="title-knowledge" id="knowledge">My Skills</h1>
                <section className="container-front">
                    <div className="card">
                        <img src={html} className="react-logo"></img>
                        <p>Html</p>
                    </div>
                    <div className="card">
                        <img src={css} className="react-logo"></img>
                        <p>Css</p>
                    </div>
                    <div className="card">
                        <img src={js} className="react-logo"></img>
                        <p>Js</p>
                    </div>
                    <div className="card">
                        <img src={Reactt} className="react-logo"></img>
                        <p>React</p>
                    </div>
                </section>

                <section id="backend-skills" className="container-backend">
                    <div className="card-backend">
                        <img src={Git}></img>
                    </div>
                    <div className="card-backend">
                        <img src={MySQL}></img>
                    </div>

                    <div className="card-backend">
                        <img src={contentFul}></img>
                    </div>
                </section>
            </article>
        </>
    );
}

export default Knowledge;