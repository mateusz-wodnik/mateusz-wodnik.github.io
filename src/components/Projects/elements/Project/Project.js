import React from 'react';
import styles from './Project.sass';
import {FaGithub, FaSitemap} from 'react-icons/fa'

const Project = ({project, name}) => (
    <section className={styles.container + " " + name}  >
        <img src={`/images/${project.image}.png`} alt={project.repo} className={styles.image}/>
        <div className={styles.modal}>
            <div className={styles.text}>
                <h3 className={styles.name}>{project.repo}</h3>
                <a href={project.url} className={styles.link}><FaSitemap/></a>
                <a href={`https://github.com/mateusz-wodnik/${project.repo}`} className={styles.link}><FaGithub /></a>
            </div>
        </div>
    </section>
);

export default Project;