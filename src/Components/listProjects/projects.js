/* eslint-disable react-hooks/rules-of-hooks */
import Skills from './skills'
import './../Briefcase/Briefcase.css';

const projects = ({ project }) => {

    return (
        <div className="projects">
            {project.map((value) =>
                <>
                    <div className="container-cards">
                        <section className="column-img">
                            <img src={value.img}></img>
                            <article className="btn">
                                <a href={value.gitHub} target="_blank"><button className="icon-github-circled"></button></a>
                                <a href={value.url} target="_blank"><button className="icon-laptop"></button></a>
                            </article>
                        </section>
                        <section>
                            <label className="projectTitle">{value.name}</label>
                            <p className="information">{value.description}</p>
                            <Skills skillId={value.id} />
                            {value.id === 3 && <p className="messajeLink">broken website link</p>}
                        </section>
                    </div>
                </>
            )}
        </div>
    );
};

export default projects;