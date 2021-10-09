/* eslint-disable array-callback-return */
// import { useEffect, useState } from 'react';
import Projects from '../listProjects/projects';
import Web from '../../media/programacion-web.png';
import Globant from '../../media/globant.png';

import './Briefcase.css';

const Briefcase = () => {

    const project = [
        {
            "id": 1,
            "name": "FilmsWeb",
            "description": "filmsWeb is a movie website created in React, where you can interact, know the latest movie releases, know the ranking of movies around the world, and you can find detailed information about old and new movies.",
            "img": "https://i.ibb.co/nfN3gXw/filmsweb.png",
            "url": "https://santiagogui1909.github.io/FilmsWeb/",
            "gitHub": "https://github.com/santiagogui1909/FilmsWeb"
        },
        {
            "id": 2,
            "name": "Comunicaciones LySanti",
            "description": "communications is a website for a small business with a variety of products, where you can find information about their services, navigate between different sections, you can communicate with the advisor in different ways and be able to acquire a product easily and without problems.",
            "img": "https://i.ibb.co/x1MHtGG/comunicaciones-Li-Santy.png",
            "url": "https://santiagogui1909.github.io/ComunicacionesLySanti/",
            "gitHub": "https://github.com/santiagogui1909/ComunicacionesLySanti"
        },
        {
            "id": 3,
            "name": "Guess The Movie",
            "description": "guess the movie is a little game, where you can guess the name of the movie by interpreting the emogis and have fun.",
            "img": "https://i.ibb.co/02GJb56/Guess-The-Films.png",
            "url": "https://santiagogui1909.github.io/Guess-The-Movie/",
            "gitHub": "https://github.com/santiagogui1909/Guess-The-Movie"
        },
        {
            "id": 4,
            "name": "Calculadora",
            "description": "it is a small project of a calculator with which you can perform very basic calculations with the well-known mathematical operators",
            "img": "https://i.ibb.co/jbWPD3m/Calculadora.png",
            "url": "https://santiagogui1909.github.io/Calculadora/",
            "gitHub": "https://github.com/santiagogui1909/Calculadora"
        }]


    return (
        <div className="box-projects">
            <article className="box-info">
                <section className="information">
                    <p>Here you will be able to know the personal projects in which I have worked my
                    knowledge of web development, I also have group study projects in which I develop
                    teamwork knowledge, work methodologies such as scrum and the application of version
                    controllers such as Git.</p>
                </section>
                <section className="img-information">
                    <img src={Web}></img>
                </section>
            </article>
            <div className="worksSection">
                <img src={Globant}/>
                <p>I worked at globant for 6 months as a web intern</p>
            </div>
            <h2 className="titleProjects">projects</h2>
            <Projects project={project} />
        </div>
    );
};

export default Briefcase;
