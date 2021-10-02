/* eslint-disable array-callback-return */
import { useEffect, useState } from 'react';
import Projects from '../listProjects/projects';

import './Briefcase.css';

const Briefcase = () => {

    const [project, setProject] = useState([])

    useEffect(() => {
        const getProject = async () => {
            const result = await fetchProject();
            setProject(result);
        }
        getProject()

    }, [])

    const fetchProject = async () => {
        const response = await fetch("http://localhost:5000/posts")
        const data = await response.json()

        return data;
    }

    return (
        <div className="box-projects">
            <article className="box-info">
                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt
                ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco
                laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in
                voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat
                non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p>
            </article>
            <Projects project={project} />
        </div>
    );
};

export default Briefcase;
