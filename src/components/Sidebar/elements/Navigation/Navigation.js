import React from 'react';
import { NavLink } from 'react-router-dom';
import styles from './Navigation.sass';
import { MdHome, MdCode, MdDock, MdContacts } from 'react-icons/md';

const scroll = (e, id) => {
    e.preventDefault(); 
    document.getElementById(id).scrollIntoView({behavior: "smooth"});
}

const Navigation = () => (
    <section className={styles.container}>
        <a onClick={(e) => scroll(e, "home")} href="#home" className={styles.link}><MdHome /></a>
        <a onClick={(e) => scroll(e, "projects")} href="#projects" className={styles.link}><MdCode /></a>
        <a onClick={(e) => scroll(e, "cv")} href="#cv" className={styles.link}><MdDock /></a>
        <a onClick={(e) => scroll(e, "contact")} href="#contact" className={styles.link}><MdContacts /></a>
    </section>
);

export default Navigation;
