/* eslint-disable jsx-a11y/alt-text */
/* eslint-disable jsx-a11y/anchor-is-valid */
import { Link } from 'react-router-dom';
import './About.css'

const About = () => {

    return (

        <div className="about-container" id="about">
            <article className="about-desc">
                <h2>¿Who I Am?</h2>
                <p>
                    Hello, my name is Santiago, I am a junior Front-end developer, passionate about technology, innovation,
                    the development of new systems,I like to play football, play sports, video games, meet new people and share experiences.
                </p>
                <p>
                    Every day I seek to learn new concepts, I like to help others, teamwork, to be able to learn from the experiences and advice
                    of the people around me, I want to learn and further develop my skills as a Frontend developer, to be able to create
                    applications that help improve people's lives, creating solutions for great technological development.
                </p>
                <Link to="/Contact" className="contactButton">Contact Me</Link>
            </article>
            <article className="about-img">
                <img src="https://i.ibb.co/DQhRVhJ/foto2.jpg" alt="santiago guillen"></img>
                <a href="https://drive.google.com/file/d/1M388wWELpyprjM1M8b_mPgG0TQxLZlC6/view?usp=sharing" target="_blank">
                    <section className="box-titleName">
                        know my cV<span className="icon-paper-plane"></span>
                    </section>
                </a>
            </article>
        </div>
    )
}

export default About;