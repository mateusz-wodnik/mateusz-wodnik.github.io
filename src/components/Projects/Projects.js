import React, {Component} from 'react';
import styles from './Projects.sass';
import data from "./projects.data.json";
import Project from './elements/Project/Project';

class Projects extends Component {
    componentDidMount() {
        
    }
    render() {
        return(
            <article className={styles.container}>
                {console.log(data)}
                {data.map((project, idx) => <Project key={project.repo} project={project} name={`project-${idx}`} />)}
            </article>
        );
    }
}  

export default Projects;
