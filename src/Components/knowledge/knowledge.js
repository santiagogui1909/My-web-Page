import Html from '../../media/Html.png'
import Css from '../../media/Css.png'
import Js from '../../media/JS.png'
import React from '../../media/React.png'
import Git from '../../media/git-icon.svg'
import Figma from '../../media/figma.png'
import Contentful from '../../media/contentful-logo.png'
import Scrum from '../../media/Scrum.png'

import './knowledge.css'

const Knowledge = () => {

    return (
        <>
            <article className="container-knowledge">
            <h1 className="title-knowledge" id="knowledge">My Skills</h1>
                <section className="container-front">
                    <div className="card">
                        <img src={Html} className="react-logo"></img>
                        <p>Html</p>
                    </div>
                    <div className="card">
                        <img src={Css} className="react-logo"></img>
                        <p>Css</p>
                    </div>
                    <div className="card">
                        <img src={Js} className="react-logo"></img>
                        <p>Js</p>
                    </div>
                    <div className="card">
                        <img src={React} className="react-logo"></img>
                        <p>React</p>
                    </div>
                    <div className="card">
                        <img src={Git} className="react-logo"></img>
                        <p>Git</p>
                    </div>
                    <div className="card">
                        <img src={Scrum} className="react-logo"></img>
                        <p>Scrum</p>
                    </div>
                    <div className="card">
                        <img src={Figma} className="react-logo"></img>
                        <p>Figma</p>
                    </div>
                    <div className="card">
                        <img src={Contentful} className="react-logo"></img>
                        <p>Contentful</p>
                    </div>
                </section>
            </article>
        </>
    );
}

export default Knowledge;