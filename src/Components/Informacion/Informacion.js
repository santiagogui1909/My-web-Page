import React from "react";

import './Informacion.css';


const datos = [
    {
        id: "pro-uno",
        img: "https://www.tooltyp.com/wp-content/uploads/2014/10/1900x920-8-beneficios-de-usar-imagenes-en-nuestros-sitios-web.jpg",
        nombre: "Comunicaciones LiSanty",
        info: "Desde el principio,hemos destacado por la calidad y fiabilidad de nuestros productos y servicios. Se asegura la mejor calidad posible, tanto que se convierte en una prioridad como un sólido valor.",
        link: "https://comunicacioneslisanty.tech/",
        codGit: "https://github.com/santiagogui1909/ComunicacionesLySanti",
    },
    {
        id: "pro-dos",
        img: "https://www.tooltyp.com/wp-content/uploads/2014/10/1900x920-8-beneficios-de-usar-imagenes-en-nuestros-sitios-web.jpg",
        nombre: "Drum Kit",
        info: "Desde el principio,hemos destacado por la calidad y fiabilidad de nuestros productos y servicios. Se asegura la mejor calidad posible, tanto que se convierte en una prioridad como un sólido valor.",
        link: "https://comunicacioneslisanty.tech/",
        codGit: "https://github.com/santiagogui1909/ComunicacionesLySanti",
    },
    {
        id: "pro-tres",
        img: "https://www.tooltyp.com/wp-content/uploads/2014/10/1900x920-8-beneficios-de-usar-imagenes-en-nuestros-sitios-web.jpg",
        nombre: "Among Devs",
        info: "Desde el principio,hemos destacado por la calidad y fiabilidad de nuestros productos y servicios. Se asegura la mejor calidad posible, tanto que se convierte en una prioridad como un sólido valor.",
        link: "https://comunicacioneslisanty.tech/",
        codGit: "https://github.com/santiagogui1909/ComunicacionesLySanti",
    },
];

const informacion = datos.map((info) => (
    <div className="container-all" id="uno">

        <div className="popup">
            <div>
                <img src={info.img} className="img"></img>
            </div>

            <div className="container-text">
                <h2>{info.nombre}</h2>
                <p>{info.info}</p>
                <a href={info.link}>Ver Codigo</a>
                <a href={info.codGit}>Ver Proyecto</a>
            </div>

            <a href="#" class="btn-close-popup">X</a>

        </div>
    </div>
));


export default informacion;