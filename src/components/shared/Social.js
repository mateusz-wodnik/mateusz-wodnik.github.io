import React from 'react';
import { FaLinkedin, FaGithub } from 'react-icons/fa';

const Social = ({styles={}}) => (
    <section className={styles.container}>
        <a href="https://www.linkedin.com/in/mateusz-wodnik" target="_blank" rel="noopener noreferrer" className={styles.link}>
            <FaLinkedin />
        </a>
        <a href="https://github.com/mateusz-wodnik" target="_blank" rel="noopener noreferrer" className={styles.link}>
            <FaGithub />
        </a>
    </section>
);

export default Social;
