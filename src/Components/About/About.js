import React from 'react';
import FotPerfil from '../../media/foto.jpeg'

import './About.css'

const About= () => {

    return (

        <div className="about-container" id="about">
            <div className="about-desc">
                <h3>¿Quien Soy?</h3>
                <p>
                    Lorem ipsum dolor sit amet, consectetur adipisicing elit. Omnis
                    provident inventore quod voluptates sequi. Quis, necessitatibus omnis
                    iusto perferendis dolores voluptate et dolorum inventore autem nemo,
                    quos eveniet magni nesciunt.
                </p>
            </div>
            <div className="about-img">
                <img src={FotPerfil}></img>
                <a href="" target="_blank">Santiago Guillen Ramirez</a>
            </div>
        </div>
    )
}

export default About;