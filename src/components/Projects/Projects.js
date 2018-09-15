import React, {Component} from 'react';
import styles from './Projects.sass';
import data from "./projects.data.json";
import Project from './elements/Project/Project';

class Projects extends Component {
    componentDidMount() {
        
    }
    render() {
        return(
            <article id="projects" className={styles.container}>
                <h2 className={styles.name}>Projekty</h2>
                <div className={styles.list}>
                    {data.map((project, idx) => <Project key={project.repo} project={project} name={`project-${idx}`} />)}
                </div>
            </article>
        );
    }
}  

export default Projects;
