/* eslint-disable no-undef */
import { useState, useEffect } from 'react';
import videoFondo from '../../media/video.mp4';

import About from '../About/About';
import Knowledge from '../knowledge/knowledge';

import './coverPage.css';

const CoverPage = () => {

    const [printStr, setprintStr] = useState();
    const [perfilStatus, setPerfilStatus] = useState(false);

    useEffect(() => {

        const writing = (str) => {

            let arrayWords = str.split('');
            let i = 0;
            let newArray = "";
            let interval = setInterval(function () {

                newArray += arrayWords[i];
                setprintStr(newArray);
                i++;

                if (i === arrayWords.length) {
                    clearInterval(interval);
                    setPerfilStatus(true);
                }
            }, 85);
        };

        writing("santiago guillen ramirez");
    }, []);

    return (
        <div id="home">
            <header className="container-coverPage">
                <video loop autoPlay muted>
                    <source src={videoFondo} type="video/mp4" />
                </video>
                <h1>{printStr}</h1>
                <p className={(perfilStatus === true) ? "showPerfil" : "hidePerfil"}><span className="icon-code-1" Web></span> Junior Frontend Developer <span className="icon-code" Web></span></p>
                <span className="icon-down-open"></span>
            </header>
            <About />
            <Knowledge />
        </div>
    )
}

export default CoverPage;