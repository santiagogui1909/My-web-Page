import Html from '../../media/Html.png';
import Css from '../../media/Css.png';
import Js from '../../media/JS.png';
import React from '../../media/React.png';
import Redux from '../../media/Redux.png';
import Git from '../../media/git-icon.svg';
import GitHub from '../../media/GitHub.png';
import Figma from '../../media/figma.png';
import Sass from '../../media/sass.jpg';
import Wordpress from '../../media/wordpress.svg';
import Scrum from '../../media/Scrum.png';
import SoftSkills from '../../media/softSkills.png';

import './knowledge.css'

const Knowledge = () => {

    return (
        <>
            <article className="container-knowledge">
            <h1 className="title-knowledge" id="knowledge">My Skills</h1>
                <section className="container-front">
                    <div className="card">
                        <img src={Html} className="react-logo"></img>
                        <div className="infoCard">
                            <h3>html</h3>
                            <p>My level <span>70%</span></p>
                        </div>
                    </div>
                    <div className="card">
                        <img src={Css} className="react-logo"></img>
                        <div className="infoCard">
                            <h3>css</h3>
                            <p>My level <span>70%</span></p>
                        </div>
                    </div>
                    <div className="card">
                        <img src={Sass} className="react-logo"></img>
                        <div className="infoCard">
                            <h3>Sass</h3>
                            <p>My level <span>20%</span></p>
                        </div>
                    </div>
                    <div className="card">
                        <img src={Js} className="react-logo"></img>
                        <div className="infoCard">
                            <h3>js</h3>
                            <p>My level <span>60%</span></p>
                        </div>
                    </div>
                    <div className="card">
                        <img src={React} className="react-logo"></img>
                        <div className="infoCard">
                            <h3>react</h3>
                            <p>My level <span>40%</span></p>
                        </div>
                    </div>
                    <div className="card">
                        <img src={Redux} className="react-logo"></img>
                        <div className="infoCard">
                            <h3>redux</h3>
                            <p>My level <span>20%</span></p>
                        </div>
                    </div>
                    <div className="card">
                        <img src={Git} className="react-logo"></img>
                        <div className="infoCard">
                            <h3>git</h3>
                            <p>My level <span>40%</span></p>
                        </div>
                    </div>
                    <div className="card">
                        <img src={GitHub} className="react-logo"></img>
                        <div className="infoCard">
                            <h3>git hub</h3>
                            <p>My level <span>40%</span></p>
                        </div>
                    </div>
                    <div className="card">
                        <img src={Wordpress} className="react-logo"></img>
                        <div className="infoCard">
                            <h3>wordpress</h3>
                            <p>My level <span>30%</span></p>
                        </div>
                    </div>
                    <div className="card">
                        <img src={Figma} className="react-logo"></img>
                        <div className="infoCard">
                            <h3>figma</h3>
                            <p>My level <span> 40%</span></p>
                        </div>
                    </div>
                    <div className="card">
                        <img src={Scrum} className="react-logo"></img>
                        <div className="infoCard">
                            <h3>scrum</h3>
                            <p className="otherCardInfo">Knowledge of the scrum methodology and its development process and collaborative work.</p>
                        </div>
                    </div>
                    <div className="card">
                        <img src={SoftSkills} className="react-logo"></img>
                        <div className="infoCard">
                            <h3>soft skills</h3>
                            <p className="otherCardInfo">Teamwork, tolerance, companionship, respect, help, support my team, desire to learn and provide experiences.</p>
                        </div>
                    </div>
                </section>
            </article>
        </>
    );
}

export default Knowledge;