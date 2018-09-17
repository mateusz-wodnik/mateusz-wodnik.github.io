import React, {Component} from 'react';
import { NavLink } from 'react-router-dom';
import styles from './Navigation.sass';
import { MdHome, MdCode, MdDock, MdContacts } from 'react-icons/md';

const scroll = (e, id) => {
    document.getElementById(id).scrollIntoView({
        behavior: "smooth",
        block: "start",
        inline: "nearest"
    });
}
const isActive = (path) => window.location.pathname + window.location.hash === path;  

class Navigation extends Component {
    render() {
        return(
            <section className={styles.container}>
                <NavLink to={"/#home"} isActive={() => isActive("/#home")} onClick={(e) => scroll(e, "home")} className={styles.link} activeClassName={styles.active}><MdHome /></NavLink>
                <NavLink to={"/#projects"} isActive={() => isActive("/#projects")} onClick={(e) => scroll(e, "projects")} className={styles.link} activeClassName={styles.active}><MdCode /></NavLink>
                <NavLink to={"/#cv"} isActive={() => isActive("/#cv")} onClick={(e) => scroll(e, "cv")} className={styles.link} activeClassName={styles.active}><MdDock /></NavLink>
                <NavLink to={"/#contact"} isActive={() => isActive("/#contact")} onClick={(e) => scroll(e, "contact")} className={styles.link} activeClassName={styles.active}><MdContacts /></NavLink>
            </section>
        );
    }
} 

export default Navigation;
