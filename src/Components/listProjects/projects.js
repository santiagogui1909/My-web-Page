
const projects = ({ project }) => {


    return (
        <div className="projects">
            {project.map((value) =>
                <>
                    <div className="container-cards">
                        <section className="column-img">
                            <img src={value.img}></img>
                            <article className="btn">
                                <a href={value.url} target="_blank"><button>website</button></a>
                                <a href={value.gitHub} target="_blank"><button>repository</button></a>
                            </article>
                        </section>
                        <section className="column-information">
                            <label>{value.name}</label>
                            <p>{value.description}</p>
                        </section>
                    </div>
                </>
            )}
        </div>
    );
};

export default projects;