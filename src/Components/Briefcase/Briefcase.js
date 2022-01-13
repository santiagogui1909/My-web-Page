/* eslint-disable array-callback-return */
import { useEffect, useState } from 'react';
import Projects from '../listProjects/projects';
import Web from '../../media/desarrollo-web.png';
import Globant from '../../media/globant.png';
import data from '../../data/data.json';

import './Briefcase.css';

const Briefcase = () => {

    const [project , setProject] = useState([]);

    useEffect(() => {
        setProject(data);
    },[])

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
                {/* <p>I worked at globant for 1 year as a web development intern</p> */}
                <p>I am currently working with Globant</p>
            </div>
            <h2 className="titleProjects">projects</h2>
            <Projects project={project} />
        </div>
    );
};

export default Briefcase;
