
import css from '../../media/Css.png'
import Figma from '../../media/figma.png'
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
                    <img src={html} className="react-logo"></img>
                    <p>Html</p>
                </div>
                <div className="targeta">
                    <img src={css} className="react-logo"></img>
                    <p>Css</p>
                </div>
                <div className="targeta">
                    <img src={js} className="react-logo"></img>
                    <p>Js</p>
                </div>
                <div className="targeta">
                    <img src={Reactt} className="react-logo"></img>
                    <p>React</p>
                </div>
                <div className="targeta">
                    <img src={Figma} className="react-logo"></img>
                    <p>Figma</p>
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
                <div className="targeta-backend">
                    <img src={Git}></img>
                </div>
            </div>
        </div>
    );
}

export default Conocimientos;