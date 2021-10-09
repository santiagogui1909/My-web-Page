/* eslint-disable jsx-a11y/alt-text */
/* eslint-disable jsx-a11y/anchor-is-valid */
import React from 'react';
import FotPerfil from '../../media/foto.jpg'

import './About.css'

const About = () => {

    return (

        <div className="about-container" id="about">
            <article className="about-desc">
                <h2>¿Who I Am?</h2>
                <p>
                    Hello, my name is Santiago, I am a junior Web UI developer, passionate about technology, innovation,
                    the development of new systems,I like to play football, play sports, video games, meet new people and share experiences.
                </p>
                <p>
                    Every day I seek to learn new concepts, I like to help others, teamwork, to be able to learn from the experiences and advice
                    of the people around me, I want to learn and further develop my skills as a Frontend developer, to be able to create
                    applications that help improve people's lives, creating solutions for great technological development.
                </p>
            </article>
            <article className="about-img">
                <img src={FotPerfil}></img>
                <section className="box-titleName">
                    <a href="" target="_blank">Santiago Guillen Ramirez</a>
                </section>
            </article>
        </div>
    )
}

export default About;